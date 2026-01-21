import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from "starlight-ion-theme";

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: '/steel-docs/',
    integrations: [
        starlight({
            customCss: [
                './src/styles/global.css',
            ],
            title: {
                en: 'Steel-Docs',
                de: 'Steel-Doku',
                es: 'Documentacion de Steel',
            },
            social: [{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/MwChEHnAbh' }, { icon: 'github', label: 'GitHub', href: 'https://github.com/4lve/SteelMC' }],
            sidebar: [
                {
                    label: 'Getting started',
                    translations: {
                        // de: '',
                        es: 'Primeros pasos',
                    },
                    autogenerate: { directory: 'guides/getting-started' },
                },
                {
                    label: 'Configuration',
                    translations: {
                        // de: '',
                        es: 'Configuración',
                    },
                    autogenerate: { directory: 'guides/configuration' },
                },
                {
                    label: 'Development',
                    translations: {
                        // de: '',
                        es: 'Desarrollo',
                    },
                    items: [
                        'guides/development/decompile-minecraft',
                        {
                            label: 'Blocks',
                            translations: {
                                // de: '',
                                es: 'Bloques',
                            },
                            autogenerate: { directory: 'guides/development/blocks' }
                        },
                        {
                            label: 'Network',
                            translations: {
                                // de: '',
                                es: 'Red',
                            },
                            autogenerate: { directory: 'guides/development/network' }
                        },
                    ],
                },
                {
                    label: 'Reference',
                    translations: {
                        // de: '',
                        es: 'Referencias',
                    },
                    autogenerate: { directory: 'reference' },
                },
            ],

            defaultLocale: 'root',
            locales: {
                // English docs in `src/content/docs/`
                root: {
                    label: 'English',
                    lang: 'en'
                },
                // Sprich Deutsch, du Hurensohn :O) `src/content/docs/de/`
                de: {
                    label: 'Deutsch',
                    lang: 'de',
                },
                // Documentacion en Español en `src/content/docs/es`
                es: {
                    label: 'Spanish',
                    lang: 'es'
                }
            },
        }),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});