# Contributing to Mui Treasury

Welcome to mui-treasury, these are guidelines that will help you get the picture and understand how to contribute to this project. Let's do it.

## Become a maintainer

Right now I am managing this project alone but I really want to have a team (3-4 people) that share the same vision to drive this project. If you are in love with this project and want to become a maintainer, we can have a chat.

These are some that I think will benefit to this project.

- time to contribute, 2-4 hours per week. (more than this is nice)
- fall in love with UI, design, React Material-UI and want to bring great interface to everyone in the world
- you are a Dev or Designer
- if you have exp with maintaining open-source project before is awesome! (because this is my first time)

## Code of Conduct

Mui Treasury has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full content](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Your first Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Sending a Pull Request

Please keep your Pull Requests small, don't bundle more than one feature or bug fix per Pull Request. It is best to open an issue first to let other people know what feature are you working on.
Mui Treasury is built for community, so Pull Requests is welcome from everyone.

##### Here is the steps

1. Fork the repository.

2. Clone the fork to your local machine and add upstream remote

```sh
git clone git@github.com:<yourname>/mui-treasury-next.git
cd mui-treasury-next
git remote add upstream git@github.com:siriwatknp/mui-treasury-next.git
```

3. Synchronize your local `master` branch with the upstream one:

```sh
git checkout master
git pull upstream master
```

4. Create a new topic branch:

```sh
git checkout -b #{ISSUE No.}-my-topic-branch
```

5. Make changes, commit and push to your fork:

```sh
git push -u
```

6. Go to [the repository](https://github.com/siriwatknp/mui-treasury-next) and make a Pull Request.

The core team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.

## Project structure

This project is divided into 2 parts

1. Documentation website : built with [Gatsbyjs](https://gatsbyjs.org)
2. Mui Treasury ecosystem (packages) : use yarn workspace & built with babel

##### Website

located in root folder

```
.
├── src
│   ├── ...
│   ├── docs
│   ├── pages
├── static
│   ├── ...
├── gatsby-config.js
├── gatsby-node.js
└── ...
```

##### Packages

located in `packages` folder

```
.
├── packages
│   ├── mui-components/
│   ├── mui-layout/
│   └── mui-styles/
│   └── mui-styling/
│   └── mui-utils/
```

## Development

After you pull the project to local, run this command in the root of the directory.

```
yarn install && yarn start
```

then you will see the site in `localhost:8000`, `localhost:8001` is iGraphQL
for more info about Gatsby, [find it here](https://www.gatsbyjs.org/docs/).

## Create new component, styles

This is a guideline if you want to create a component or styles to show it in Mui Treasury.

### New Page

Do this if your component is not in any existing category yet.

#### `Step 1 : add empty page`

create new `js` file in `src/pages/components/{name of the page}.js`. (name of the page should be discussed in the issue first) and then add some component to test

```
import React from 'react';
import PropTypes from 'prop-types';

const Page = () => (
  <div>Test that it works</div>
);

export default Page
```

delete `.cache` at root folder, then run `yarn start` again. 
You should be able to access this url in your browser 
```
https://localhost:8000/components/{filename without ext}
```

if you can't, [fire an issue](https://github.com/siriwatknp/mui-treasury-next/issues) and explain what error or behavior you have.

#### `Step 2 : add menu`

open file `src/constants/menu.js` and add your menu to

```
...
    [PKG.components]: [
    {
      // could be basic or complex, this is just an ex.
      key: 'basic',
      label: 'BASIC (5)',
      subMenus: [
        ...
        // add this schema
        {
          key: String,
          label: String,
          to: '/components/{category}',
        },
        ...
      ],
    },
    ]
...
```

Save the file (*don't* need to run `yarn start` again), then you should see the menu added to the sidebar navigation pane.


#### `Step 3 : Create Component`

[Goto create component section]()

#### `Step 4 : Display components`
copy content from `src/__templates/PageTemplate.js` and place it in the file from `step 1`

```
import React from 'react';
import DemoPage from 'containers/Demo';
import {
  customComponents,
  DefaultComponent,
} from 'docs/components/{COMPONENT FOLDER}';

const CardContentPage = () => (
  <DemoPage
    title={'INSERT TITLE'}
    description={'INSERT DESCRIPTION'}
    DemoComponentsProps={{
      noDefaultSection: true,
      customComponents,
      DefaultComponent,
    }}
    DemoSourceDrawerProps={{
      frameProps: {
        p: 2,
      },
    }}
  />
);

export default CardContentPage;
```

Congratulations! create new page is done. you can follow steps to create components below

### New Component

#### `Step 1 : add empty component`
create `js` file in `docs/components/{category}/{name}/{Name}.js`

For example, I want to create a button named `RealisticButton`
```
// in src/docs/components/button/realistic/RealisticButton.js
import React from 'react';
import PropTypes from 'prop-types';

const RealisticButton = () => <div>realistic button</div>;

RealisticButton.propTypes = {};
RealisticButton.defaultProps = {};

// hide-start
RealisticButton.metadata = {
  title: 'Realistic', // name that appear in web
  path: 'button/realistic', // reference to markdown file
  files: [],
  relates: [],
};
// hide-end

export default RealisticButton;
```
Now you should see your component in its category page. If you just create new page, [go to next step]()

#### `Step 2 : add stylesheet`
We aim to provide reusable stylesheet for other developers, so we need to create it in `@mui-treasury/styles` package.
Create 2 files `{name}.styles.js` and `index.js` in `/packages/mui-styles/src/{category}/{component style}`. (look at other folder if you are confused)

***Stylesheet must be an object or pure function
```
// {name}.styles.js
export default ({ palette, shadows }) => ({
  root: {
    minWidth: 200,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    background:
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      'linear-gradient(to right, #FFC371, #FF5F6D)',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});
```

Don't forget to add your component in `packages/mui-styles/src/{category}/index.js`

Then in your website component `src/docs/components/realistic/RealisticButton.js`, import the styles and use it in your component.
```
import { useRealisticBtnStyles } from '@mui-treasury/styles/button';

const RealisticButton = () => {
  const styles = useRealisticBtnStyles();
  return (
    <Button classes={styles} variant={'contained'} color={'primary'}>
      Realistic
    </Button>
  );
};
```

#### `Step 3 : add markdown`
create `index.md` next to your component in `/src/docs/components/{category}/{component}
```
---
category: "component"
path: "button/{style}"
---

`embed:components/button/{style}/{Name}.js`
```