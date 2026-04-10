// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  cartilhaSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Cartilha do Radioamador',
      link: {
        type: 'generated-index',
        description: 'Guia rápido para quem quer entender o caminho para se tornar Radioamador no Brasil e operar de forma correta.',
      },
      items: [
        'cartilha/apresentacao',
        'cartilha/o-que-e-radioamador',
        'cartilha/passo-a-passo',
        'cartilha/licenciamento',
        'cartilha/classes-faixas-potencias',
        'cartilha/como-operar',
        'cartilha/obrigacoes-regulatorias',
        'cartilha/glossario',
        'cartilha/guia-rapido',
        'cartilha/preparando-exame',
      ],
    },
  ],

  tecnicaEticaSidebar: [
    {
      type: 'category',
      label: 'Técnica e Ética Operacional',
      link: {
        type: 'generated-index',
        description: 'Material de apoio ao candidato na preparação do exame de radioamador - Técnica e Ética Operacional.',
      },
      items: [
        'tecnica-etica/estacao-radioamador',
        'tecnica-etica/antenas',
        'tecnica-etica/frequencia-modulacao',
        'tecnica-etica/propagacao',
        'tecnica-etica/interferencias',
        'tecnica-etica/comunicados',
        'tecnica-etica/etica-operacional',
        'tecnica-etica/emergencias',
      ],
    },
  ],

  legislacaoSidebar: [
    {
      type: 'category',
      label: 'Legislação de Telecomunicações',
      link: {
        type: 'generated-index',
        description: 'Material de apoio ao candidato na preparação do exame de radioamador - Legislação de Telecomunicações.',
      },
      items: [
        'legislacao/regulamento-radio-uit',
        'legislacao/recomendacao-itu',
        'legislacao/plano-faixas-iaru',
        'legislacao/legislacao-brasil',
        'legislacao/habilitacao-coer',
        'legislacao/indicativos',
        'legislacao/iarp',
        'legislacao/equipamentos',
        'legislacao/repetidoras',
        'legislacao/faixas-restricoes',
        'legislacao/limites-potencia',
        'legislacao/certificacao-homologacao',
      ],
    },
  ],

  eletronicaSidebar: [
    {
      type: 'category',
      label: 'Eletrônica e Eletricidade',
      link: {
        type: 'generated-index',
        description: 'Material de apoio ao candidato na preparação do exame de radioamador - Conhecimentos de Eletrônica e Eletricidade.',
      },
      items: [
        'eletronica/eletricidade-lei-ohm',
        'eletronica/componentes-eletronicos',
        'eletronica/eletromagnetismo',
        'eletronica/ondulatoria',
        'eletronica/corrente-alternada',
        'eletronica/protecao-eletrica',
        'eletronica/medicao-eletrica',
        'eletronica/antenas-teoria-ondas',
        'eletronica/propagacao-fenomenos',
        'eletronica/eletronica-rf',
        'eletronica/comunicacoes-digitais',
      ],
    },
  ],
};

export default sidebars;
