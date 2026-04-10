// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cartilha do Radioamador',
  tagline: 'Guia completo do Serviço Radioamador no Brasil - ANATEL',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://rodrigoreeis.github.io',
  baseUrl: '/radioamador-docs/',

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

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['pt', 'en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Serve docs direto na raiz: / em vez de /docs/
          routeBasePath: '/',
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
        title: '📡 Cartilha do Radioamador',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {
            href: 'https://sistemas.anatel.gov.br/anexar-api/publico/anexos/download/6067372ab14ee1c9702eb7ff93f11323',
            label: 'PDF Oficial',
            position: 'right',
          },
          {
            href: 'https://github.com/rodrigoreeis/radioamador-docs',
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
                to: '/cartilha/apresentacao',
              },
              {
                label: 'Técnica e Ética Operacional',
                to: '/tecnica-etica/estacao-radioamador',
              },
              {
                label: 'Legislação de Telecomunicações',
                to: '/legislacao/regulamento-radio-uit',
              },
              {
                label: 'Eletrônica e Eletricidade',
                to: '/eletronica/eletricidade-lei-ohm',
              },
            ],
          },
          {
            title: 'Links Oficiais ANATEL',
            items: [
              {
                label: 'PDF Oficial da Cartilha',
                href: 'https://sistemas.anatel.gov.br/anexar-api/publico/anexos/download/6067372ab14ee1c9702eb7ff93f11323',
              },
              {
                label: 'SEC – Sistema de Exames de Certificação',
                href: 'https://sistemas.anatel.gov.br/SEC/',
              },
              {
                label: 'SEI – Sistema Eletrônico de Informações',
                href: 'https://sei.anatel.gov.br/',
              },
              {
                label: 'SCRA – Consulta de Indicativos',
                href: 'https://sistemas.anatel.gov.br/SCRA/',
              },
            ],
          },
          {
            title: 'Documentos Oficiais',
            items: [
              {
                label: 'Ato nº 926/2024 (Requisitos Técnicos)',
                href: 'https://informacoes.anatel.gov.br/legislacao/atos-de-requisitos-tecnicos-de-gestao-do-espectro/2024/1919-ato-926',
              },
              {
                label: 'Resolução 777/2025 (RGST)',
                href: 'https://informacoes.anatel.gov.br/legislacao/resolucoes/2025/2022-resolucao-777',
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
        copyright: `Copyright © ${new Date().getFullYear()} Cartilha do Serviço Radioamador — ANATEL v2026-04. Construído com Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
