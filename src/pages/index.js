import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const sections = [
  {
    title: 'Cartilha do Radioamador',
    description:
      'Guia rápido para quem quer entender o caminho para se tornar Radioamador no Brasil: o que é o serviço, como obter a habilitação, licenciar a estação e operar corretamente.',
    link: '/docs/cartilha/apresentacao',
    linkLabel: 'Ler a Cartilha',
    icon: '📻',
  },
  {
    title: 'Técnica e Ética Operacional',
    description:
      'Conteúdo técnico para o exame: estação, antenas, propagação, modulação, interferências, comunicados, código Q, alfabeto fonético e ética operacional no ar.',
    link: '/docs/tecnica-etica/estacao-radioamador',
    linkLabel: 'Estudar Técnica',
    icon: '📡',
  },
  {
    title: 'Legislação de Telecomunicações',
    description:
      'Todo o arcabouço regulatório: regulamento de rádio da UIT, IARU, legislação brasileira, habilitação COER, indicativos, IARP, equipamentos, repetidoras e limites de potência.',
    link: '/docs/legislacao/regulamento-radio-uit',
    linkLabel: 'Ver Legislação',
    icon: '⚖️',
  },
  {
    title: 'Eletrônica e Eletricidade',
    description:
      'Fundamentos de eletricidade, componentes eletrônicos, eletromagnetismo, circuitos CA, proteção, medição elétrica, antenas, propagação e comunicações digitais.',
    link: '/docs/eletronica/eletricidade-lei-ohm',
    linkLabel: 'Estudar Eletrônica',
    icon: '⚡',
  },
];

function SectionCard({ title, description, link, linkLabel, icon }) {
  return (
    <div className={clsx('col col--6', styles.sectionCard)}>
      <div className={styles.cardInner}>
        <div className={styles.cardIcon}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--primary button--md" to={link}>
          {linkLabel}
        </Link>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          Documentação completa baseada na Cartilha do Serviço Radioamador da ANATEL (versão 2026-04).
          Tudo que você precisa saber para obter sua habilitação e operar legalmente no Brasil.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Começar agora
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/cartilha/preparando-exame"
            style={{ marginLeft: '1rem' }}>
            Preparar para o exame
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentação completa do Serviço Radioamador no Brasil - Cartilha ANATEL 2026-04">
      <HomepageHeader />
      <main>
        <section className={styles.sectionsContainer}>
          <div className="container">
            <div className="row">
              {sections.map((props, idx) => (
                <SectionCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.infoSection}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <Heading as="h2">Sobre este projeto</Heading>
                <p>
                  Esta documentação é baseada na <strong>Cartilha do Serviço Radioamador da ANATEL</strong>,
                  versão 2026-04, e foi criada para facilitar o estudo e a consulta das informações
                  necessárias para obter a habilitação de radioamador no Brasil.
                </p>
                <p>
                  O conteúdo está organizado em quatro grandes áreas: a cartilha introdutória com
                  o passo a passo para se tornar radioamador, o material de técnica e ética operacional,
                  a legislação de telecomunicações aplicável ao serviço, e os fundamentos de eletrônica
                  e eletricidade cobrados no exame.
                </p>
                <p>
                  <strong>Nota:</strong> Este material é para fins educativos. Sempre consulte os
                  documentos oficiais da ANATEL para informações atualizadas.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <Link
                    className="button button--primary button--md"
                    href="https://www.gov.br/anatel/pt-br"
                    target="_blank">
                    Site Oficial da ANATEL
                  </Link>
                  <Link
                    className="button button--secondary button--md"
                    href="https://sistemas.anatel.gov.br/SEC/"
                    target="_blank"
                    style={{ marginLeft: '1rem' }}>
                    Sistema de Exames (SEC)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
