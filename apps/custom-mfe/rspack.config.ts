import { composePlugins, withNx, withReact } from '@nx/rspack';
import mfConfig from './module-federation.config';
import { withModuleFederation } from '@nx/rspack/module-federation';

export default composePlugins(withNx(), withReact(), withModuleFederation(mfConfig), (config) => {
  return config;
});
