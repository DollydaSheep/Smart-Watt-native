const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Extend resolver
config.resolver.assetExts.push("glb", "gltf", "png", "jpg");
config.resolver.sourceExts.push("cjs", "mjs");

// Wrap with NativeWind
module.exports = withNativeWind(config, { 
  input: './global.css', 
  inlineRem: false 
});
