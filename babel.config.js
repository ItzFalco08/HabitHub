module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      'react-native-reanimated/plugin', // This must be last!
    ],
    env: {
      production: {
        plugins: [
          'react-native-paper/babel',
          'react-native-reanimated/plugin', // This must be last in production too!
        ],
      },
    },
  };
};