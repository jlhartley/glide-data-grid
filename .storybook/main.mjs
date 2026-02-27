import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

// Use createRequire so we can still use require.resolve in ESM
const require = createRequire(import.meta.url);

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

export default {
  stories: ["../**/src/**/*.stories.tsx"],
  addons: [getAbsolutePath("@storybook/addon-docs")],

  typescript: {
    reactDocgen: false,
  },

  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    const wyw = await import("@wyw-in-js/vite");

    return mergeConfig(config, {
      plugins: [wyw.default()],
    });
  },

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
};
