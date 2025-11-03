const { getDefaultConfig, mergeConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = mergeConfig(config, {
  // Add Metro configuration here
});