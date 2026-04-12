import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './apoio.module.css';

export default function Apoio() {
  const [copied, setCopied] = useState(false);
  const pix = 'br.rodrigoreis@gmail.com';

  function copyPix() {
    navigator.clipboard.writeText(pix).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <Layout
      title="Apoie o Projeto"
      description="Ajude a manter a Cartilha Digital do Radioamador gratuita e sempre atualizada."
    >
      <main className={styles.page}>

        <section className={styles.section}>
          <h2>Por que apoiar?</h2>
          <p>
            Este site foi criado por mim, de forma totalmente gratuita, para ajudar todos que gostariam de conquistar o certificado COER. Tudo começou a partir de uma necessidade pessoal: eu precisava organizar meus próprios estudos sem depender de um PDF gigantesco que era difícil de navegar.
          </p>
          <p>
            Aqui você consegue fazer buscas, navegar por temas e encontrar exatamente o que precisa — e isso facilitou muito o meu aprendizado. A partir dessa necessidade pessoal nasceu este site, e levou um bom tempo para criar e organizar tudo isso.
          </p>
          <p>
            Se este material te ajudou de alguma maneira e você se sentiu à vontade para retribuir, apoie! Qualquer valor é muito bem-vindo. Obrigado!
          </p>
        </section>


        <section className={`${styles.section} ${styles.pixSection}`}>
          <h2>Faça uma contribuição via PIX</h2>
          <p>Qualquer valor é bem-vindo e faz diferença. Rápido, seguro e sem taxas.</p>

          <div className={styles.pixCard}>
            <div className={styles.qrPlaceholder}>
              <div className={styles.qrBox}>
                <span className={styles.qrLabel}>
                  <img src='img/pix.png'/>
                </span>
              </div>
            </div>

            <div className={styles.pixInfo}>
              <p className={styles.pixInstructions}>
                Abra o app do seu banco, escolha <strong>PIX</strong> e use a chave abaixo ou escaneie o QR Code:
              </p>
              <div className={styles.pixKeyRow}>
                <span className={styles.pixKey}>{pix}</span>
                <button className={styles.copyBtn} onClick={copyPix}>
                  {copied ? '✓ Copiado!' : 'Copiar chave'}
                </button>
              </div>
              <p className={styles.pixMeta}>
                <strong>Tipo:</strong> E-mail &nbsp;·&nbsp; <strong>Titular:</strong> Rodrigo Reis
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Outras formas de apoiar</h2>
          <p>
            Não pode contribuir financeiramente agora? Sem problemas — você já ajuda muito de outras formas:
          </p>
          <ul className={styles.list}>
            <li>Compartilhe o site com outros estudantes do COER</li>
            <li>Reporte erros ou sugestões pelo e-mail <a href="mailto:br.rodrigoreis@gmail.com">br.rodrigoreis@gmail.com</a></li>
          </ul>
        </section>

        <div className={styles.thanks}>
          <p>Muito obrigado pelo apoio</p>
        </div>
      </main>
    </Layout>
  );
}
