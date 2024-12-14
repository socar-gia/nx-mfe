import { composePlugins, withNx, withReact } from '@nx/rspack';
import { withModuleFederation } from '@nx/rspack/module-federation';
import mfConfig from './module-federation.config';

module.exports = composePlugins(withNx(), withReact(), withModuleFederation(mfConfig), (config) => {
  return config;
});
