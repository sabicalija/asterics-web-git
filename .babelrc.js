const node = [
  "@babel/preset-env",
  {
    targets: {
      node: "current"
    }
  }
];
const presets = [...node];
const plugins = ["babel-plugin-add-module-exports"];

module.exports = { presets, plugins };
