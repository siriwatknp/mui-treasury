# Material-UI Treasury [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/siriwatknp/mui-treasury/pulls)

Imagine a thousands of real-world, ready-to-use, and themable components that you can copy & paste to your project.
I believe that it will help boosting many projects that the founder want to prove their ideas to make this world a better place.

![image](https://user-images.githubusercontent.com/18292247/54541807-318da300-49cd-11e9-828d-7926ca0c8428.png)

I would love to have anyone that believe that same thing as I believe. I am very excited about this project because I know that there is a lot of developers
who are struggling at building ui and waiting for something like this to come true. I will take a lot of time for me alone to make it to thousand components.
So if you want to do something great and fun, please read our [contribution section](#Contribution)

#### In this project, we aim to

1. Increase ui development productivity so that you can focus on other parts of your app.
2. Make it dynamic for developers to customize (that's why we provide the code sandbox link for you).
3. Help growing material-ui community because we love it.

#### How to use

1. [Open mui-treasury website](https://mui-treasury.com) (don't worry, it is not a spam)
2. In the components panel, choose one that you like.
3. Click search icon to copy theme and code sandbox for jsx => paste to your project.
![image](https://user-images.githubusercontent.com/18292247/54541969-7f0a1000-49cd-11e9-90dd-8400ad62ace1.png)


## Contribution

Thank you for your interest in this project. let's do it.

#### Submitting a pull request

Please keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

##### Case 1 : New Component

1. Please open new issue for every new component that you want to add, so that other people don't create the same component as your
2. Title the issue with (New)-Category_Component. For Example, `(New)-Card_SimpleDashboardCard`
3. Add image of the component that you want to product (if possible)
4. Create branch name same as the issue title
5. Follow component file guideline for consistency

##### Case 2 : Bug, modification, support, anything else

1. Please open new issue for every new component that you want to add, so that other people can see and help
2. Title the issue with (Help)-Category_Component description. For Example, `(Help)-Card_SimpleDashboardCard Something is wrong!`
3. Add image (if possible)
4. Create branch name same as the issue title
5. Follow component file guideline for consistency

##### Branch Structure

All stable releases are tagged [(view tags)](https://github.com/siriwatknp/mui-treasury/tags).
At any given time, `development` represents the latest development version of the library. Patches or hotfix releases are prepared on an independent branch.
When `development` is merged with new component or new page, it will be deployed to `master` with a tag of new release version

##### `master` is for deployed version

Only important bug fixes should be applied to master at this point. create `hotfix` branch from `master` if there is a critical bug.

### Getting started

Please create a new branch from an up to date master on your fork. (Note, urgent hotfixes should be branched off the latest stable release rather than master)

1. Fork the Mui Treasury repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/mui-treasury.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes, lint, then push to to GitHub with `git push --set-upstream origin my-topic-branch`.
   Visit GitHub and make your pull request.
   If you have an existing local repository, please update it before you start, to minimise the chance of merge conflicts.

```
git remote add upstream git@github.com:siriwatknp/mui-treasury.git
git checkout dev
git pull upstream dev
git checkout -b my-topic-branch
yarn
```

### How do I add a new component to the treasury ?

##### If it is the new category

1. copy everything in `src/contribution/PageTemplate.js`
2. create new CategoryPage in `src/pages/components/` and paste from (1)
3. rename the page
4. add new page to `src/pages/components/.routes.js`
5. add new category folder to `src/components`
6. copy everything in `src/contribution/ComponentTemplate.js`
7. create new component in `src/components/<category>/` and paste from (6)
8. `yarn start` and check your component in the page

##### If the category exists

Follow step 6 from the above

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
