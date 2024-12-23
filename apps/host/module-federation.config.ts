import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

type ModuleFederationConfig = ConstructorParameters<typeof ModuleFederationPlugin>[0];

const config: ModuleFederationConfig = {
    name: 'host',
    filename: 'remoteEntry.js',
    shared: {
        "react": {
            singleton: true
        },
        "react-dom": {
            singleton: true
        },
        "@tanstack/react-query": {
            singleton: true
        },
        "@custom-mfe/store": {
            singleton: true
        },
        "react-router-dom": {
            singleton: true
        }
    }
};
export default config;