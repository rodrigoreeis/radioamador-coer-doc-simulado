import React from 'react';
import Layout from '@theme/Layout';
import styles from './sobre.module.css';

export default function Sobre() {
  return (
    <Layout
      title="Quem somos"
      description="Saiba mais sobre a Cartilha Digital do Radioamador e quem está por trás deste projeto."
    >
      <main className={styles.page}>
        <h1>Quem somos</h1>

        <p>
          Esta cartilha digital foi organizada por{' '}
          <a href="https://github.com/rodrigoreeis" target="_blank" rel="noopener noreferrer">
            Rodrigo Reis
          </a>
          , com o objetivo de democratizar o
          acesso ao conteúdo e facilitar os estudos de quem está se preparando para a prova do COER (Classe C).
        </p>
        <p>
          A proposta aqui é simples: tornar o aprendizado mais intuitivo. Diferente de um PDF tradicional com dezenas
          de páginas, o conteúdo foi estruturado em formato navegável, permitindo consultas rápidas onde você encontra exatamente o que precisa, quando precisa.
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
          . <strong>Este site não é oficial e não possui qualquer vínculo com a ANATEL.</strong>
        </p>
        <p>
          O conteúdo será atualizado sempre que novas versões da cartilha oficial forem disponibilizadas. Além disso,
          o site conta com uma seção de <strong>simulados</strong>, gerados com auxílio de IA, baseados integralmente
          no conteúdo da cartilha — uma forma prática de testar seus conhecimentos antes da prova.
        </p>

        <h2>Sobre mim</h2>
        <div className={styles.profile}>
          <img
            src="/radioamador-docs/img/rodrigo.jpeg"
            alt="Rodrigo Reis"
            className={styles.avatar}
          />
          <div>
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
          </div>
        </div>

        <p>
          Se este material te ajudou de alguma forma, considere <strong>compartilhar com outras pessoas</strong> que
          também estão nessa jornada.
        </p>
        <p>
          Este projeto é <strong>100% gratuito</strong>, apenas com o objetivo de
          contribuir com a comunidade e facilitar o acesso ao conhecimento.
        </p>

        <h2>Contato</h2>
        <p>
          <a href="mailto:br.rodrigoreis@gmail.com">br.rodrigoreis@gmail.com</a>
        </p>
      </main>
    </Layout>
  );
}
