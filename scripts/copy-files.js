/* eslint-disable no-console */
const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './build');
const srcPath = path.join(packagePath, './src');

/**
 * Puts a package.json into every immediate child directory of rootDir.
 * That package.json contains information about esm for bundlers so that imports
 * like import Typography from '@material-ui/core/Typography' are tree-shakeable.
 *
 * It also tests that an this import can be used in typescript by checking
 * if an index.d.ts is present at that path.
 *
 * @param {string} rootDir
 */
async function createModulePackages({ from, to }) {
  const directoryPackages = glob.sync('*/index.ts', { cwd: from }).map(path.dirname);
  await Promise.all(
    directoryPackages.map(async (directoryPackage) => {
      const packageJson = {
        sideEffects: false,
        module: path.join('../esm', directoryPackage, 'index.js'),
        typings: './index.d.ts',
      };
      const packageJsonPath = path.join(to, directoryPackage, 'package.json');

      const [typingsExist] = await Promise.all([
        fse.exists(path.join(to, directoryPackage, 'index.d.ts')),
        fse.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2)),
      ]);

      if (!typingsExist) {
        throw new Error(`index.d.ts for ${directoryPackage} is missing`);
      }

      return packageJsonPath;
    }),
  );
}

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
  const sourcePath = path.resolve('./README.md');
  try {
    await fse.copyFile(sourcePath, targetPath);
  } catch (e) {
    console.log(`No readme at ${sourcePath}`)
  }
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
    await createModulePackages({ from: srcPath, to: buildPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
