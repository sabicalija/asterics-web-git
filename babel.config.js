module.exports = api => {
  api.cache(api);
  return {
    presets: ["@babel/preset-env"],
    plugins: []
  };
};
