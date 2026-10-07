const camel = (name) => name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

function parseOption(flags, description, defaultValue) {
  const m = /^(?:-(\w),\s*)?--([\w-]+)(?:\s+(<[^>]+>|\[[^\]]+\]))?$/.exec(flags);
  if (!m) {
    throw new Error(`bad option spec: ${flags}`);
  }
  const [, short, long, value] = m;
  return {
    flags,
    description,
    short,
    long,
    key: camel(long),
    takes: !value ? 'none' : value.startsWith('<') ? 'required' : 'optional',
    repeat: Boolean(value?.includes('...')),
    defaultValue,
  };
}

function parseArgSpec(spec) {
  return spec
    .split(/\s+/)
    .filter(Boolean)
    .map((token) => ({
      name: token.replace(/[<>[\].]/g, ''),
      required: token.startsWith('<'),
      variadic: token.endsWith('...>') || token.endsWith('...]'),
      token,
    }));
}

class UsageError extends Error {}

/** A commander-compatible subset: sub-commands with positional args, options and generated help — no dependency, ~0 load time. */
export class Command {
  constructor(name = '') {
    this._name = name;
    this._description = '';
    this._options = [];
    this._args = [];
    this._commands = [];
    this._action = null;
    this._opts = {};
    this._version = null;
  }

  name(value) {
    if (value === undefined) {
      return this._name;
    }
    this._name = value;
    return this;
  }

  description(value) {
    this._description = value;
    return this;
  }

  version(value) {
    this._version = value;
    return this;
  }

  option(flags, description, defaultValue) {
    this._options.push(parseOption(flags, description, defaultValue));
    return this;
  }

  showHelpAfterError() {
    this._helpAfterError = true;
    return this;
  }

  command(spec) {
    const [name, ...args] = spec.split(/\s+/);
    const sub = new Command(name);
    sub._args = parseArgSpec(args.join(' '));
    sub._parent = this;
    this._commands.push(sub);
    return sub;
  }

  get commands() {
    return this._commands;
  }

  action(fn) {
    this._action = fn;
    return this;
  }

  opts() {
    return this._opts;
  }

  usage() {
    const path = this._parent ? `${this._parent._name} ${this._name}` : this._name;
    const args = this._args.map((a) => a.token).join(' ');
    return `Usage: ${path} [options]${this._commands.length ? ' [command]' : ''}${args ? ` ${args}` : ''}`;
  }

  helpText() {
    const options = [
      ...(this._version ? [{ flags: '-V, --version', description: 'output the version number' }] : []),
      ...this._options,
      { flags: '-h, --help', description: 'display help for command' },
    ];
    const rows = (list) => {
      const width = Math.max(...list.map(([left]) => left.length)) + 2;
      return list.map(([left, right]) => `  ${left.padEnd(width)}${right}`).join('\n');
    };
    const sections = [
      this.usage(),
      ...(this._description ? [this._description] : []),
      `Options:\n${rows(options.map((o) => [o.flags, `${o.description}${o.defaultValue !== undefined ? ` (default: ${JSON.stringify(o.defaultValue)})` : ''}`]))}`,
    ];
    if (this._commands.length) {
      sections.push(
        `Commands:\n${rows([
          ...this._commands.map((c) => [`${c._name}${c._options.length ? ' [options]' : ''}${c._args.length ? ` ${c._args.map((a) => a.token).join(' ')}` : ''}`, c._description]),
          ['help [command]', 'display help for command'],
        ])}`,
      );
    }
    return `${sections.join('\n\n')}\n`;
  }

  /** Parse tokens for this command's own options; returns positionals. Unknown options are an error. */
  _parse(tokens, known) {
    const positionals = [];
    const opts = Object.fromEntries(this._options.filter((o) => o.defaultValue !== undefined).map((o) => [o.key, o.defaultValue]));
    for (let i = 0; i < tokens.length; i += 1) {
      const token = tokens[i];
      if (token === '--') {
        positionals.push(...tokens.slice(i + 1));
        break;
      }
      if (!token.startsWith('-') || token === '-') {
        positionals.push(token);
        continue;
      }
      const [raw, inline] = token.startsWith('--') ? token.slice(2).split(/=(.*)/s) : [token.slice(1), undefined];
      const option = known.find((o) => (token.startsWith('--') ? o.long === raw : o.short === raw));
      if (!option) {
        throw new UsageError(`error: unknown option '${token}'`);
      }
      const assign = (value) => {
        opts[option.key] = option.repeat ? [...(opts[option.key] ?? []), value] : value;
      };
      if (option.takes === 'none') {
        opts[option.key] = true;
      } else if (inline !== undefined) {
        assign(inline);
      } else if (option.takes === 'required') {
        if (i + 1 >= tokens.length) {
          throw new UsageError(`error: option '${option.flags}' argument missing`);
        }
        assign(tokens[(i += 1)]);
      } else {
        opts[option.key] = i + 1 < tokens.length && !tokens[i + 1].startsWith('-') ? tokens[(i += 1)] : true;
      }
    }
    return { positionals, opts };
  }

  async parseAsync(argv) {
    const tokens = argv.slice(2);
    const globals = [...this._options, { long: 'help', short: 'h', key: 'help', takes: 'none' }, ...(this._version ? [{ long: 'version', short: 'V', key: 'version', takes: 'none' }] : [])];
    const index = tokens.findIndex((t) => !t.startsWith('-'));
    const name = index === -1 ? null : tokens[index];
    const helpTarget = name === 'help' ? tokens[index + 1] : null;
    const sub = this._commands.find((c) => c._name === (helpTarget ?? name));
    const out = (text) => process.stdout.write(text);
    try {
      if (!sub) {
        const { opts } = this._parse(index === -1 ? tokens : tokens.slice(0, index), globals);
        if (opts.version && this._version) {
          out(`${this._version}\n`);
          return;
        }
        if (name && name !== 'help') {
          throw new UsageError(`error: unknown command '${name}'`);
        }
        if (name === 'help' || opts.help || !name) {
          (opts.help || name === 'help' ? out : (t) => process.stderr.write(t))(this.helpText());
          process.exitCode = opts.help || name === 'help' ? 0 : 1;
          return;
        }
      }
      if (helpTarget) {
        out(sub.helpText());
        return;
      }
      const shared = globals.filter((o) => !sub._options.some((s) => s.long === o.long));
      const { positionals, opts } = sub._parse([...tokens.slice(0, index), ...tokens.slice(index + 1)], [...sub._options, ...shared]);
      for (const g of this._options) {
        if (g.key in opts) {
          this._opts[g.key] = opts[g.key];
          delete opts[g.key];
        }
      }
      if (opts.help) {
        out(sub.helpText());
        return;
      }
      delete opts.version;
      const args = sub._args.map((spec, i) => {
        if (spec.variadic) {
          return positionals.slice(i);
        }
        return positionals[i];
      });
      sub._args.forEach((spec, i) => {
        const value = args[i];
        if (spec.required && (value === undefined || (spec.variadic && !value.length))) {
          throw new UsageError(`error: missing required argument '${spec.name}'`);
        }
      });
      if (!sub._args.some((a) => a.variadic) && positionals.length > sub._args.length) {
        throw new UsageError(`error: too many arguments for '${sub._name}'. Expected ${sub._args.length} argument${sub._args.length === 1 ? '' : 's'} but got ${positionals.length}.`);
      }
      sub._opts = opts;
      await sub._action(...args, opts, sub);
    } catch (err) {
      if (err instanceof UsageError) {
        process.stderr.write(this._helpAfterError ? `${err.message}\n\n${(sub ?? this).helpText()}` : `${err.message}\n(add --help for additional information)\n`);
        process.exitCode = 1;
        return;
      }
      throw err;
    }
  }
}
