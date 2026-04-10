import React from 'react';
import Layout from '@theme/Layout';
import styles from './sobre.module.css';

export default function Sobre() {
  return (
    <Layout
      title="Sobre este projeto"
      description="Saiba mais sobre a Cartilha Digital do Radioamador e quem está por trás deste projeto."
    >
      <main className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.heroEmoji}>📡</span>
          <h1>Sobre este projeto</h1>
          <p className={styles.heroSub}>Uma cartilha digital para quem quer aprender radioamadorismo do jeito certo.</p>
        </header>

        <section className={styles.card}>
          <h2>O que é este site?</h2>
          <p>
            Esta cartilha digital foi organizada por <strong>Rodrigo Reis</strong>, com o objetivo de democratizar o
            acesso ao conteúdo e facilitar os estudos de quem está se preparando para a prova do COER (Classe C).
          </p>
          <p>
            A proposta aqui é simples: tornar o aprendizado mais intuitivo. Diferente de um PDF tradicional com dezenas
            de páginas, o conteúdo foi estruturado em formato navegável, permitindo consultas rápidas — quase um{' '}
            <em>QTH do conhecimento</em>, onde você encontra exatamente o que precisa, quando precisa.
          </p>
          <p>
            Todo o material apresentado foi extraído da{' '}
            <a
              href="https://sistemas.anatel.gov.br/anexar-api/publico/anexos/download/6067372ab14ee1c9702eb7ff93f11323"
              target="_blank"
              rel="noopener noreferrer"
            >
              cartilha oficial da ANATEL
            </a>
            .
          </p>
          <div className={styles.disclaimer}>
            <strong>⚠️ Importante:</strong> este site não é oficial e não possui qualquer vínculo com a ANATEL.
          </div>
          <p className={styles.qsl}>
            👉 Em outras palavras: <strong>QSL?</strong> Se fizer sentido pra você, utilize como apoio nos seus
            estudos — assim como fez para mim.
          </p>
          <p>
            O conteúdo será atualizado sempre que novas versões da cartilha oficial forem disponibilizadas.
          </p>
          <p>
            Além disso, o site conta com uma seção de <strong>simulados</strong>, gerados com auxílio de IA, baseados
            integralmente no conteúdo da cartilha — uma forma prática de testar seus conhecimentos antes da prova.
          </p>
        </section>

        <section className={styles.card}>
          <h2>👨‍💻 Sobre mim</h2>
          <p>
            Sou <strong>engenheiro de software</strong>, com mais de 10 anos de experiência no mercado de tecnologia.
            Este projeto foi desenvolvido com apoio de inteligência artificial, revisado manualmente por mim e validado
            com base na cartilha oficial.
          </p>
          <p>
            Também sou praticante de <strong>montanhismo</strong>, e foi justamente nas montanhas que surgiu meu
            interesse pelo radioamadorismo. A necessidade de comunicação em locais remotos — muitas vezes sem sinal
            convencional — despertou minha curiosidade e, desde então, venho me aprofundando cada vez mais nesse
            universo.
          </p>
        </section>

        <section className={styles.card}>
          <h2>🤝 Finalizando</h2>
          <p>
            Se este material te ajudou de alguma forma, considere{' '}
            <strong>compartilhar com outras pessoas</strong> que também estão nessa jornada.
          </p>
          <p>
            Este projeto é <strong>100% gratuito</strong> — sem <em>QRK</em> comercial, apenas com o objetivo de
            contribuir com a comunidade e facilitar o acesso ao conhecimento.
          </p>
        </section>

        <section className={`${styles.card} ${styles.contactCard}`}>
          <h2>📬 Contato</h2>
          <a className={styles.email} href="mailto:br.rodrigoreis@gmail.com">
            br.rodrigoreis@gmail.com
          </a>
        </section>
      </main>
    </Layout>
  );
}
