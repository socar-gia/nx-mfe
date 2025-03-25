import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { resolve } from 'path';

type ModuleFederationConfig = ConstructorParameters<typeof ModuleFederationPlugin>[0];

const config: ModuleFederationConfig = {
    name: 'host',
    filename: 'remoteEntry.js',
    experiments: {
        federationRuntime: 'hoisted',
        provideExternalRuntime: true
    },
    remotes: {
        "products": `products@${process.env.NX_PRODUCTS_URL || "http://localhost:4201/mf-manifest.json"}`
    },
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
    },
    //runtimePlugins: [resolve(__dirname, "./dynamic-remote.ts")]
};
export default config;