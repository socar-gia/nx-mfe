// import type { FederationRuntimePlugin } from '@module-federation/enhanced/runtime';
// import { Shared, ShareScopeMap } from '@module-federation/runtime/types';

// interface SimplifiedShare {
//     [pkgName: string]: {
//         version: string;
//         usedIn: string[];
//         from: string;
//     }
// }

// function simplifyShareScope(shareScope: ShareScopeMap[""]): SimplifiedShare {
//     return Object.entries(shareScope).reduce((acc, [packageName, versions]) => {
//         const [version, details] = Object.entries(versions)[0];
//         const shared = (details as unknown as Shared);
//         acc[packageName] = {
//             version,
//             usedIn: shared.useIn,
//             from: shared.from
//         };
//         return acc;
//     }, {} as SimplifiedShare);
// }

// const runtimePlugin: () => FederationRuntimePlugin = function () {
//     return {
//         name: 'dynamic-remote',
//         async beforeRequest(args) {
//             const { id, options } = args;
//             const remote = options.remotes.find(r => r.name === id);

//             if (!remote) return args;

//             //@ts-expect-error
//             remote.entry = "http://localhost:4201/mf-manifest.json";

//             return args;
//         },
//         async onLoad({ options }) {
//             const shareScope = options.host.shareScopeMap["default"];
//             const simplified = simplifyShareScope(shareScope);
//             console.log(simplified);
//         }
//     };
// };
// export default runtimePlugin;