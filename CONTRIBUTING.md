# Welcome to Joy Treasury contributing guide

Thank you for your time in contributing to Joy Treasury! Let's build a block ✨.

## Types of contributions

### Request a block

To request a block, open a new issue with the title `Request: [block name]` and describe the block you want. If you have a design inspiration, please attach it to the issue.

### Add a block

1. Pick a [block](https://github.com/siriwatknp/mui-treasury/issues) you want to work on and comment on the issue that you are working on it.

> Note: if there is no block that you want to work on, you can create a new issue to request a block and start working on it.

2. Fork the [mui-treasury](https://github.com/siriwatknp/mui-treasury) and clone it to your local machine.
3. Create a new branch from `main` branch with the name `block/[block-name]` (e.g. `block/card-news-maldives`).
4. Run a script to create a new block, the block name should follow the format of `{component}-{style}-{name}` (e.g. `card-news-maldives`).

   ```bash
   yarn new-block [block-name]
   ```

5. run `yarn storybook` to see the block and start working on it.
6. create a [PR](https://github.com/siriwatknp/mui-treasury/pulls).
