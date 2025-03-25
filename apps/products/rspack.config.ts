import { composePlugins, withNx, withReact } from '@nx/rspack';
import mfConfig from './module-federation.config';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

module.exports = composePlugins(withNx(), withReact(), (config, ctx) => {
  config.plugins?.push(new ModuleFederationPlugin(mfConfig));

  config.output = {
    ...config.output,
    publicPath: 'auto',
    clean: true
  }

  config.devServer = {
    ...config.devServer,
    host: '127.0.0.1',
    hot: true,
    liveReload: true,
    static: false
  }

  return config;
});
