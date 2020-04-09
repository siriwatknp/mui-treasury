/* eslint-disable no-console */
const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './build');
const srcPath = path.join(packagePath, './src');

async function createPackageFile() {
  const packageData = await fse.readJson(
    path.resolve(packagePath, './package.json')
  );
  const {
    nyc,
    gitHead,
    scripts,
    devDependencies,
    workspaces,
    ...packageDataOther
  } = packageData;
  const newPackageData = {
    ...packageDataOther,
    private: false,
    main: './index.js',
  };
  const targetPath = path.resolve(buildPath, './package.json');

  await fse.writeJSON(targetPath, newPackageData, { spaces: 2 });
  console.log(`Created package.json in ${targetPath}`);

  return newPackageData;
}

async function copyReadMeFile() {
  const targetPath = path.resolve(buildPath, './README.md');
  const sourcePath = path.resolve('./../../', './README.md');
  return fse.copyFile(sourcePath, targetPath);
}

async function typescriptCopy({ from, to }) {
  if (!(await fse.exists(to))) {
    console.warn(`path ${to} does not exists`);
    return [];
  }

  const files = glob.sync('**/*.d.ts', { cwd: from });
  const cmds = files.map(file =>
    fse.copy(path.resolve(from, file), path.resolve(to, file))
  );
  await Promise.all(cmds);

  // add types to package.json in build folder
  const targetPath = path.resolve(buildPath, './package.json');
  const packageData = await fse.readJson(targetPath);
  const newPackageData = {
    ...packageData,
    types: './index.d.ts',
  };
  await fse.writeJson(targetPath, newPackageData, { spaces: 2 });
}

async function run() {
  try {
    await Promise.all([createPackageFile(), copyReadMeFile()]);
    if (process.env.DTS_INCLUDED === 'true') {
      await typescriptCopy({ from: srcPath, to: buildPath });
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
