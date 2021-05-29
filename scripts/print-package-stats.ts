import { getPackageStats } from "package-build-stats";

const folders = [
  "cli",
  "component-formaddon",
  "component-groupy",
  "component-number-input",
  "component-number-spinner",
  "component-sticker",
  "layout",
  "style-button-bootstrap",
  "style-menu-bootstrap",
  "style-slider-apollo",
  "style-textfield-ant",
  "style-textfield-bootstrap",
  "style-textfield-standard",
  "style-textfield-tailwind",
  "theme-treasury",
  "use-number-input",
];

async function resolvePackageStats(name: string) {
  let result: any;
  try {
    result = await getPackageStats(name, {
      client: "yarn",
    });
  } catch (error) {
    result = {
      isError: true,
      ...error,
    };
  }
  return result;
}

function displayAsKB(bytes: string) {
  if (Number.isNaN(Number(bytes))) {
    return "unknown size";
  }
  return `${(Number(bytes) / 1000).toFixed(2)} KB`;
}

(async function run() {
  const jsons = folders.map((folder) => {
    return require(`../packages/${folder}/package.json`);
  });
  const results = await Promise.all(
    jsons.map((file) => resolvePackageStats(file.name))
  );
  results.forEach((info, index) => {
    console.info(`${jsons[index].name}`);
    if (!info.isError) {
      console.info(
        `size: ${displayAsKB(info.size)}, gzip: ${displayAsKB(info.gzip)}`
      );
    }
    console.info(` `);
    console.info(` `);
  });
})();
