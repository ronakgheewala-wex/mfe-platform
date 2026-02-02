const { shareAll, withModuleFederationPlugin, SharedMappings } = require('@angular-architects/module-federation/webpack');

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: 'remoteapp',
    publicPath: "http://localhost:4201/",
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false 
  },
  resolve: {
    alias: {
     ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        name: "remoteapp",
        filename: "remoteEntry.js",
        exposes: {
            './HomeListModule': './projects/remote-app/src/app/home-list/home-list-module.ts',
        }, 
        shared: {
          ...shareAll({ 
            singleton: true, 
            strictVersion: true, 
            requiredVersion: 'auto' 
          }),
          ...sharedMappings.getDescriptors()
        }
    }),
    sharedMappings.getPlugin()
  ],
};

