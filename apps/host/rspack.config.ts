import { composePlugins, withNx, withReact } from '@nx/rspack';
import mfConfig from './module-federation.config';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import * as path from 'path';

export default composePlugins(withNx(), withReact(), (config, ctx) => {
  config.plugins?.push(new ModuleFederationPlugin(mfConfig));

  config.resolve = {
    ...(config.resolve ?? {}),
    alias: {
      ...(config.resolve?.alias ?? {}),
      '@custom-mfe/logger': path.resolve(ctx.context.root, 'dist/packages/logger')
    }
  }

  return config;
});
