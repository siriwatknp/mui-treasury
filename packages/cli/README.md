# Mui Treasury CLI

a cli for pulling code from mui-treasury project when you need to extend or customize the existing code.

## Installation

**npm**

```bash
npm install mui-treasury -g
```

**yarn**

```bash
yarn global add mui-treasury
```

## Tutorial

1. go to [mui-treasury github](https://github.com/siriwatknp/mui-treasury/tree/next)
2. find a module you want to clone in `packages` (let's say that I want the `packages/template-card-social`)
3. open your terminal and go to your root project directory
4. run `mui-treasury clone template-card-social`
5. you will see that the code is downloaded to `src/mui-treasury` folder (in your local project)

## Usage

```bash
Usage: mui-treasury [options] [command]

Options:
  -v, --version                 output the current version
  -h, --help                    display help for command

Commands:
  init
  clone [options] <sources...>  clone components/styles to your config directory
  help [command]                display help for command
```

### `init`

create a `mui-treasury.config.js` file that will be used when running `clone`.

```bash
mui-treasury init
```

> Note that config file will be overridden by cli options (if specified)

### `clone`

```bash
Usage: mui-treasury clone [options] <sources...>

clone components/styles to your config directory

Options:
  -d, --dir [directory]      destination directory
  -t, --template [template]  template of the files, typescript (default) | javascript
  -b, --branch [branch]      target branch on github
  --storybook                storybook file(s) will be included.
  --test                     test file(s) will be included.
  -h, --help                 display help for command
```

**clone multiple modules**

```bash
mui-treasury clone component-info style-info-apex
```
