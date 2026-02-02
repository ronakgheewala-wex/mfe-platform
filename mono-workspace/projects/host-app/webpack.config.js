const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { shareAll, withModuleFederationPlugin, SharedMappings } = require('@angular-architects/module-federation/webpack');
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "hostApp",
    publicPath: "auto",
    scriptType: 'text/javascript'
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

        // For remotes (please adjust)
        name: "hostapp",
        // For hosts (please adjust)
        remotes: {
           "remoteapp": "http://localhost:4201/remoteEntry.js",
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