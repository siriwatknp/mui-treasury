import { promises as fsp } from "fs";
import cpy from "cpy";
import { set } from "edit-package-json";

const PUBLISH_DIR = "dist";

type PackageType = "cli" | "theme" | "component" | "style" | "layout" | "types";

async function run() {
  // ts-node  prerelease.ts  component
  // 0      | 1            | 2
  const packageType = process.argv[2] as PackageType;

  if (!packageType) {
    throw new Error("arg must not be undefined");
  }

  const file = await fsp.readFile("package.json", "utf8");

  if (packageType === "cli") {
    await Promise.resolve(set(file, "bin.mui-treasury", "index.js")).then(
      (result) => fsp.writeFile(`${PUBLISH_DIR}/package.json`, result)
    );
  }
  if (packageType === "types") {
    await Promise.all([
      cpy("index.d.ts", PUBLISH_DIR),
      cpy("package.json", PUBLISH_DIR),
    ]);
  }
  if (["component", "style", "theme", "hook", "mockup"].includes(packageType)) {
    await Promise.resolve(file)
      .then((newFile) => set(newFile, "main", "index.js"))
      .then((newFile) => set(newFile, "types", "index.d.ts"))
      .then((result) => fsp.writeFile(`${PUBLISH_DIR}/package.json`, result));
  }
  if (packageType === "layout") {
    await fsp.writeFile(`${PUBLISH_DIR}/package.json`, file);
  }
  try {
    await cpy("README.md", PUBLISH_DIR);
  } catch (error) {
    console.log("error", error);
  }
  try {
    await cpy("CHANGELOG.md", PUBLISH_DIR);
  } catch (error) {
    console.log("error", error);
  }
}

run().catch((error) => {
  console.error(error);
});
