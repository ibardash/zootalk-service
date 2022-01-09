module.exports = function createBabelConfig(api) {
  api.cache(true);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
        },
      ],
      [
        "@babel/preset-typescript",
        {
          allowNamespaces: true,
        },
      ],
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "local/api": "./src/api",
            "local/app": "./src/app",
            "local/repository": "./src/repository",
            "local/domain": "./src/domain",
          },
        },
      ],
    ],
  };
};
