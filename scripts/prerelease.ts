import { promises as fsp } from "fs";
import cpy from "cpy";
import { set } from "edit-package-json";

const PUBLISH_DIR = "dist";

type PackageType = "cli" | "theme" | "component" | "style" | "layout";

async function run() {
  // ts-node  prerelease.ts  component
  // 0      | 1            | 2
  const packageType = process.argv[2] as PackageType;
  console.info("packageType", packageType);

  if (!packageType) {
    throw new Error("arg must not be undefined");
  }

  const file = await fsp.readFile("package.json", "utf8");

  if (packageType === "cli") {
    await Promise.resolve(set(file, "bin.mui-treasury", "index.js")).then(
      (result) => fsp.writeFile(`${PUBLISH_DIR}/package.json`, result)
    );
  }
  if (["component", "style", "theme", "hook", "mockup"].includes(packageType)) {
    await Promise.resolve(file)
      .then((newFile) => {
        console.info('replacing "main"');
        return set(newFile, "main", "index.js");
      })
      .then((newFile) => {
        console.info('replacing "types"');
        return set(newFile, "types", "index.d.ts");
      })
      .then((result) => {
        console.info("writing file to dir:", PUBLISH_DIR);
        return fsp.writeFile(`${PUBLISH_DIR}/package.json`, result);
      });
  }
  if (packageType === "layout") {
    await fsp.writeFile(`${PUBLISH_DIR}/package.json`, file);
  }
  // try {
  //   await cpy("README.md", PUBLISH_DIR);
  // } catch (error) {
  //   console.log("error", error);
  // }
  // try {
  //   await cpy("CHANGELOG.md", PUBLISH_DIR);
  // } catch (error) {
  //   console.log("error", error);
  // }
}

run().catch((error) => {
  console.error(error);
});
