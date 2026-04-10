# Cartilha do Serviço Radioamador

![Versão](https://img.shields.io/badge/versão-2026--04-blue)
![Docusaurus](https://img.shields.io/badge/Docusaurus-3.x-green)
![Licença](https://img.shields.io/badge/licença-MIT-yellow)

Documentação completa do Serviço Radioamador no Brasil, baseada na **Cartilha do Serviço Radioamador da ANATEL** (versão 2026-04). Desenvolvida com [Docusaurus](https://docusaurus.io/), oferece navegação fácil e busca integrada por todo o conteúdo.

## Sobre o Projeto

Este site reúne, em formato de documentação navegável, o conteúdo da Cartilha do Serviço Radioamador da ANATEL, incluindo:

- **Cartilha do Radioamador**: guia prático para iniciantes, passo a passo para obter a habilitação, classes, faixas, potências e obrigações regulatórias
- **Técnica e Ética Operacional**: estação de radioamador, antenas, propagação, modulação, interferências, comunicados e ética operacional
- **Legislação de Telecomunicações**: regulamento de rádio da UIT, legislação brasileira, COER, indicativos, IARP, equipamentos, repetidoras e limites de potência
- **Eletrônica e Eletricidade**: fundamentos de eletricidade, componentes, eletromagnetismo, circuitos CA, proteção elétrica, medição e tecnologias digitais

## Pré-requisitos

- Node.js 18 ou superior
- npm (incluído com o Node.js)

## Instalação e Execução Local

```bash
git clone https://github.com/[usuario]/radioamador-docs
cd radioamador-docs
npm install
npm run start
```

O site estará disponível em `http://localhost:3000/radioamador-docs/`.

## Build

Para gerar os arquivos estáticos de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run serve
```

## Deploy no GitHub Pages

### Deploy manual:

```bash
GIT_USER=<seu-usuario-github> npm run deploy
```

### Deploy automático (GitHub Actions):

O repositório já inclui um workflow em `.github/workflows/deploy.yml` que faz o deploy automático a cada push na branch `main`.

## Estrutura de Arquivos

```
radioamador-docs/
├── docs/
│   ├── intro.md                    # Página de introdução
│   ├── cartilha/                   # Seções 1-10 da Cartilha
│   │   ├── _category_.json
│   │   ├── apresentacao.md
│   │   ├── o-que-e-radioamador.md
│   │   ├── passo-a-passo.md
│   │   ├── licenciamento.md
│   │   ├── classes-faixas-potencias.md
│   │   ├── como-operar.md
│   │   ├── obrigacoes-regulatorias.md
│   │   ├── glossario.md
│   │   ├── guia-rapido.md
│   │   └── preparando-exame.md
│   ├── tecnica-etica/              # Anexo 1 - Técnica e Ética Operacional
│   │   ├── _category_.json
│   │   ├── estacao-radioamador.md
│   │   ├── antenas.md
│   │   ├── frequencia-modulacao.md
│   │   ├── propagacao.md
│   │   ├── interferencias.md
│   │   ├── comunicados.md
│   │   ├── etica-operacional.md
│   │   └── emergencias.md
│   ├── legislacao/                 # Anexo 2 - Legislação de Telecomunicações
│   │   ├── _category_.json
│   │   ├── regulamento-radio-uit.md
│   │   ├── recomendacao-itu.md
│   │   ├── plano-faixas-iaru.md
│   │   ├── legislacao-brasil.md
│   │   ├── habilitacao-coer.md
│   │   ├── indicativos.md
│   │   ├── iarp.md
│   │   ├── equipamentos.md
│   │   ├── repetidoras.md
│   │   ├── faixas-restricoes.md
│   │   ├── limites-potencia.md
│   │   └── certificacao-homologacao.md
│   └── eletronica/                 # Anexo 3 - Eletrônica e Eletricidade
│       ├── _category_.json
│       ├── eletricidade-lei-ohm.md
│       ├── componentes-eletronicos.md
│       ├── eletromagnetismo.md
│       ├── ondulatoria.md
│       ├── corrente-alternada.md
│       ├── protecao-eletrica.md
│       ├── medicao-eletrica.md
│       ├── antenas-teoria-ondas.md
│       ├── propagacao-fenomenos.md
│       ├── eletronica-rf.md
│       └── comunicacoes-digitais.md
├── src/
│   ├── pages/
│   │   ├── index.js               # Homepage
│   │   └── index.module.css
│   └── css/
│       └── custom.css
├── static/
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions para deploy automático
├── docusaurus.config.js           # Configuração do Docusaurus
├── sidebars.js                    # Configuração das sidebars
└── package.json
```

## Fontes e Créditos

O conteúdo desta documentação é baseado nos seguintes documentos oficiais:

| Documento | Origem |
|-----------|--------|
| Cartilha do Serviço Radioamador – ANATEL (versão 2026-04) | ANATEL |
| Lei nº 9.472/1997 (LGT) | Planalto Federal |
| Resolução ANATEL nº 772/2025 (RGO) | ANATEL |
| Resolução ANATEL nº 777/2025 (RGL) | ANATEL |
| Resolução ANATEL nº 780/2025 (Certificação) | ANATEL |
| Ato nº 3.448/2026 (PPDUR) | ANATEL |
| Regulamento de Rádio da UIT (Radio Regulations) | UIT/ITU |
| Recomendação ITU-R M.1544-1 | UIT/ITU |
| Plano de Faixas IARU – Região 2 | IARU |

**Links oficiais:**
- ANATEL: [gov.br/anatel](https://www.gov.br/anatel/pt-br)
- SEC (Exames): [sistemas.anatel.gov.br/SEC/](https://sistemas.anatel.gov.br/SEC/)
- SCRA (Indicativos): [sistemas.anatel.gov.br/SCRA/](https://sistemas.anatel.gov.br/SCRA/)
- LABRE: [labre.org.br](https://www.labre.org.br/)
- IARU: [iaru.org](https://www.iaru.org/)

## Aviso Legal

Este material tem finalidade exclusivamente educativa e é baseado na Cartilha do Serviço Radioamador da ANATEL (versão 2026-04). Sempre consulte os documentos oficiais mais recentes da ANATEL para informações atualizadas sobre regulamentação.

## Licença

MIT License
