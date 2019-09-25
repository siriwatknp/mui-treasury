/* eslint-disable no-console */
const path = require('path');
const fse = require('fs-extra');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './build');

async function createPackageFile() {
  const packageData = await fse.readFile(
    path.resolve(packagePath, './package.json'),
    'utf8'
  );
  const {
    nyc,
    scripts,
    devDependencies,
    workspaces,
    ...packageDataOther
  } = JSON.parse(packageData);
  const newPackageData = {
    ...packageDataOther,
    private: false,
    main: './index.js',
  };
  const targetPath = path.resolve(buildPath, './package.json');

  await fse.writeFile(
    targetPath,
    JSON.stringify(newPackageData, null, 2),
    'utf8'
  );
  console.log(`Created package.json in ${targetPath}`);

  return newPackageData;
}

async function run() {
  try {
    await createPackageFile();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
