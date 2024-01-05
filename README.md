# 👋 Welcome! to Material Treasury

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-11-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Material Treasury is a collection of blocks that are ready-to-use for [Material UI](https://mui.com/material-ui/getting-started/) projects.

The blocks are made to live from design inspiration resources such as [Dribbble](https://dribbble.com/) and [Pinterest](https://www.pinterest.com/), etc.

There are 2 way to use the blocks in your project.

- Copy and paste: open the "Doc" of the block you want and copy the code. Then paste it to your project, it should work instantly (open [an issue](https://github.com/siriwatknp/mui-treasury/issues/new) if it does not).
- Use [CLI](#cli) to clone the latest blocks to your project.

## CLI

1. go to [mui-treasury](https://siriwatknp.github.io/mui-treasury/)
2. find a block you want to clone from the sidebar (let's say that I want the `Card/News/Maldives`)
3. open your terminal and go to your root project directory
4. run `npx mui-treasury@latest clone card-news-maldives`
5. you will see that the code is downloaded to `src/mui-treasury` folder (in your local project)

> Note: to clone multiple blocks, just add more names to the command with a space in between, e.g. `npx mui-treasury clone [blocks...]`

```bash
Usage: npx mui-treasury@latest [options] [command]

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
npx mui-treasury@latest init
```

> Note that config file will be overridden by cli options (if specified)

### `clone`

```bash
Usage: npx mui-treasury@latest clone [options] <sources...>

clone components/styles to your config directory

Options:
  -d, --dir [directory]      destination directory
  -t, --template [template]  template of the files, typescript (default) | javascript
  -b, --branch [branch]      target branch on github
  --storybook                storybook file(s) will be included.
  --test                     test file(s) will be included.
  -h, --help                 display help for command
```

**clone multiple blocks**

```bash
npx mui-treasury@latest clone card-galaxy info-basic
```

## Donation

To help me keep this project alive! every dollar matters.

- [Open Collective](https://opencollective.com/mui-treasury)
- [Patreon](https://www.patreon.com/user?u=16324303&fan_landing=true)


## Contribution

I am profoundly appreciate any [contribution](/.github/CONTRIBUTING.md) you submit, thanks.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/siriwatknp"><img src="https://avatars2.githubusercontent.com/u/18292247?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Siriwat Kunaporn</b></sub></a><br /><a href="#design-siriwatknp" title="Design">🎨</a> <a href="https://github.com/siriwatknp/mui-treasury/commits?author=siriwatknp" title="Code">💻</a> <a href="https://github.com/siriwatknp/mui-treasury/issues?q=author%3Asiriwatknp" title="Bug reports">🐛</a> <a href="https://github.com/siriwatknp/mui-treasury/commits?author=siriwatknp" title="Documentation">📖</a> <a href="#example-siriwatknp" title="Examples">💡</a> <a href="#ideas-siriwatknp" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-siriwatknp" title="Project Management">📆</a> <a href="#maintenance-siriwatknp" title="Maintenance">🚧</a> <a href="#infra-siriwatknp" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/siriwatknp/mui-treasury/pulls?q=is%3Apr+reviewed-by%3Asiriwatknp" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/siriwatknp/mui-treasury/commits?author=siriwatknp" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://www.facebook.com/kunanan.tassuwan"><img src="https://avatars2.githubusercontent.com/u/16300114?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kunanan</b></sub></a><br /><a href="#tool-futurouz" title="Tools">🔧</a></td>
    <td align="center"><a href="https://renamoo-portfolio.netlify.com"><img src="https://avatars2.githubusercontent.com/u/41532275?v=4?s=100" width="100px;" alt=""/><br /><sub><b>renamoo</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/commits?author=renamoo" title="Documentation">📖</a> <a href="https://github.com/siriwatknp/mui-treasury/commits?author=renamoo" title="Code">💻</a></td>
    <td align="center"><a href="https://p-siriphanthong.github.io/"><img src="https://avatars2.githubusercontent.com/u/29949429?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Punn Siriphanthong</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/commits?author=p-siriphanthong" title="Code">💻</a></td>
    <td align="center"><a href="https://borbier.com/"><img src="https://avatars3.githubusercontent.com/u/14361087?v=4?s=100" width="100px;" alt=""/><br /><sub><b>_borBier</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/commits?author=borbier" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/bokherus"><img src="https://avatars0.githubusercontent.com/u/9125776?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thongrapee Panyapatiphan</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/commits?author=bokherus" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Kijpokin"><img src="https://avatars0.githubusercontent.com/u/37680525?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kijpokin</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/commits?author=Kijpokin" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://twitter.com/davidedantonio"><img src="https://avatars2.githubusercontent.com/u/9164563?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Davide D'Antonio</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/commits?author=davidedantonio" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/aaronhayes1/"><img src="https://avatars2.githubusercontent.com/u/4180720?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aaron Hayes</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/commits?author=aaronhayes" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/tokdaniel"><img src="https://avatars1.githubusercontent.com/u/7677603?v=4?s=100" width="100px;" alt=""/><br /><sub><b>tokdaniel</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/issues?q=author%3Atokdaniel" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/venegasalejandro"><img src="https://avatars3.githubusercontent.com/u/8170561?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alejandro Venegas</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/commits?author=venegasalejandro" title="Code">💻</a></td>
    <td align="center"><a href="https://barthicus.github.io"><img src="https://avatars2.githubusercontent.com/u/6414011?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bartosz Podgruszecki</b></sub></a><br /><a href="#maintenance-barthicus" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://www.hackerrank.com/pacurtin"><img src="https://avatars2.githubusercontent.com/u/17761806?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paddy</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/commits?author=pacurtin" title="Documentation">📖</a> <a href="#maintenance-pacurtin" title="Maintenance">🚧</a> <a href="https://github.com/siriwatknp/mui-treasury/commits?author=pacurtin" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/alexandre-teyar/"><img src="https://avatars3.githubusercontent.com/u/11601622?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alexandre Teyar</b></sub></a><br /><a href="#a11y-aress31" title="Accessibility">️️️️♿️</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/maxwassiljew"><img src="https://avatars0.githubusercontent.com/u/27824730?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Max Wassiljew</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/commits?author=maxwassiljew" title="Code">💻</a></td>
    <td align="center"><a href="https://qiita.com/TsutomuNakamura"><img src="https://avatars3.githubusercontent.com/u/10674169?v=4?s=100" width="100px;" alt=""/><br /><sub><b>tsutomu</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/commits?author=TsutomuNakamura" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/david0178418"><img src="https://avatars3.githubusercontent.com/u/128739?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Granado</b></sub></a><br /><a href="#maintenance-david0178418" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/murbanowicz"><img src="https://avatars1.githubusercontent.com/u/9385106?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marek</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/commits?author=murbanowicz" title="Code">💻</a></td>
    <td align="center"><a href="http://matthewlancellotti.com"><img src="https://avatars.githubusercontent.com/u/860303?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matthew Lancellotti</b></sub></a><br /><a href="https://github.com/siriwatknp/mui-treasury/commits?author=MareoRaft" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!