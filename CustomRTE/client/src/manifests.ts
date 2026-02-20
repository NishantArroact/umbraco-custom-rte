import type { ManifestTiptapExtension } from '@umbraco-cms/backoffice/tiptap';

export const manifests: Array<ManifestTiptapExtension> = [
    {
        type: 'tiptapExtension',
        alias: 'ArroactU17.CustomRTE.DivPreserver',
        name: 'Custom Div Preserver',
        api: () => import('./custom-div-api.ts'),
        meta: {
            icon: 'icon-code',
            label: 'Custom Div Preserver',
            group: '#tiptap_extGroup_formatting',
        },
    },
];

export default manifests;