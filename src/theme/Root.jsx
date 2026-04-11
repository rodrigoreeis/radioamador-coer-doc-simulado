import React from 'react';
import Head from '@docusaurus/Head';
// import AskAI from '@site/src/components/AskAI';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Cartilha do Radioamador',
  url: 'https://rodrigoreeis.github.io/radioamador-docs/',
  description: 'Material de estudo gratuito para a prova COER de radioamador Classe C no Brasil, baseado na cartilha oficial da ANATEL.',
  inLanguage: 'pt-BR',
  author: {
    '@type': 'Person',
    name: 'Rodrigo Reis',
    email: 'br.rodrigoreis@gmail.com',
  },
  keywords: 'radioamador, COER, exame radioamador, prova radioamador, cartilha radioamador, ANATEL, licença radioamador, radioamador classe C',
};

export default function Root({ children }) {
  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      {children}
      {/* <AskAI /> */}
    </>
  );
}
