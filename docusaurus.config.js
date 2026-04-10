// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cartilha do Radioamador',
  tagline: 'Guia completo do Serviço Radioamador no Brasil - ANATEL',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://rodrigoreeis.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/radioamador-docs/',

  // GitHub pages deployment config.
  organizationName: 'rodrigoreeis',
  projectName: 'radioamador-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Cartilha do Radioamador',
        logo: {
          alt: 'Radioamador Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'cartilhaSidebar',
            position: 'left',
            label: 'Cartilha',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tecnicaEticaSidebar',
            position: 'left',
            label: 'Técnica e Ética',
          },
          {
            type: 'docSidebar',
            sidebarId: 'legislacaoSidebar',
            position: 'left',
            label: 'Legislação',
          },
          {
            type: 'docSidebar',
            sidebarId: 'eletronicaSidebar',
            position: 'left',
            label: 'Eletrônica',
          },
          {
            href: 'https://github.com/radioamador-docs/radioamador-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Cartilha do Radioamador',
                to: '/docs/cartilha/apresentacao',
              },
              {
                label: 'Técnica e Ética Operacional',
                to: '/docs/tecnica-etica/estacao-radioamador',
              },
              {
                label: 'Legislação de Telecomunicações',
                to: '/docs/legislacao/regulamento-radio-uit',
              },
              {
                label: 'Eletrônica e Eletricidade',
                to: '/docs/eletronica/eletricidade-lei-ohm',
              },
            ],
          },
          {
            title: 'Links Oficiais ANATEL',
            items: [
              {
                label: 'ANATEL',
                href: 'https://www.gov.br/anatel/pt-br',
              },
              {
                label: 'SEC - Sistema de Exames de Certificação',
                href: 'https://sistemas.anatel.gov.br/SEC/',
              },
              {
                label: 'SEI - Sistema Eletrônico de Informações',
                href: 'https://sei.anatel.gov.br/',
              },
              {
                label: 'Consulta de Indicativos (SCRA)',
                href: 'https://sistemas.anatel.gov.br/SCRA/',
              },
            ],
          },
          {
            title: 'Documentos Oficiais',
            items: [
              {
                label: 'Resolução 772/2025',
                href: 'https://informacoes.anatel.gov.br/legislacao/resolucoes/2025/1780-resolucao-772',
              },
              {
                label: 'Lei 9.472/1997 (LGT)',
                href: 'https://www.planalto.gov.br/ccivil_03/leis/l9472.htm',
              },
              {
                label: 'LABRE',
                href: 'https://www.labre.org.br/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cartilha do Serviço Radioamador - ANATEL. Versão 2026-04. Construído com Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
