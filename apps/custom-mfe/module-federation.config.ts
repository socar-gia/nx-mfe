import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
    name: 'custom-mfe',
    remotes: ["products"]
};
export default config;