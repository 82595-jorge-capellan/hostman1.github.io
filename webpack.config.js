const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // ... rest of the resolve config
    fallback: {
      "path": require.resolve("path-browserify")
    }
  },
  plugins: [
		new NodePolyfillPlugin()
  ],
  
};