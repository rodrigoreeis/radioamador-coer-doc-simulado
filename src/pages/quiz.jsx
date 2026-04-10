import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './quiz.module.css';

const TOTAL_TIME = 3600;

const QUESTIONS = [
  // --- LEGISLAÇÃO (20 questions) ---
  {
    category: 'Legislação',
    question: 'Qual resolução da ANATEL regulamenta o Serviço de Radioamador no Brasil?',
    options: ['Resolução nº 772/2025', 'Resolução nº 777/2025', 'Resolução nº 780/2025', 'Resolução nº 926/2024'],
    correct: 0,
    explanation: 'A Resolução ANATEL nº 772/2025 aprova o Regulamento do Serviço de Radioamador (RSR). A 777/2025 trata do licenciamento de estações e a 780/2025 da certificação e homologação de produtos.',
  },
  {
    category: 'Legislação',
    question: 'O que significa a sigla COER?',
    options: ['Certificado de Operador de Estação de Radioamador', 'Controle de Operações de Emissões de Rádio', 'Código Oficial de Emissões de Radiofrequência', 'Cadastro de Operadores de Estações de Rádio'],
    correct: 0,
    explanation: 'O COER é o documento que habilita o radioamador a operar uma estação no Brasil, emitido pela ANATEL após aprovação em exame de certificação.',
  },
  {
    category: 'Legislação',
    question: 'Qual é o prefixo de indicativos de chamada reservado ao Brasil pela UIT?',
    options: ['PP a PY', 'ZZ a ZY', 'BR a BZ', 'AR a AZ'],
    correct: 0,
    explanation: 'O Brasil recebeu da UIT a alocação dos prefixos PP, PQ, PR, PS, PT, PU, PV, PW e PY para suas estações de radiocomunicação.',
  },
  {
    category: 'Legislação',
    question: 'Quantas classes de habilitação existem para radioamador no Brasil?',
    options: ['3 (A, B e C)', '2 (A e B)', '4 (A, B, C e D)', '5 (A, B, C, D e E)'],
    correct: 0,
    explanation: 'O regulamento brasileiro prevê três classes: Classe C (iniciante), Classe B (intermediária) e Classe A (avançada), com privilégios crescentes de faixas e potência.',
  },
  {
    category: 'Legislação',
    question: 'Qual é a potência máxima de pico do envelope (PEP) permitida para a Classe A?',
    options: ['1000 W', '500 W', '750 W', '1500 W'],
    correct: 0,
    explanation: 'A Classe A, mais alta habilitação do radioamador brasileiro, permite até 1000 W PEP nas faixas autorizadas.',
  },
  {
    category: 'Legislação',
    question: 'Qual é a potência máxima permitida para a Classe C?',
    options: ['100 W', '500 W', '50 W', '200 W'],
    correct: 0,
    explanation: 'A Classe C, habilitação de entrada, tem limite de 100 W PEP, permitindo ao iniciante operar com segurança enquanto desenvolve suas habilidades.',
  },
  {
    category: 'Legislação',
    question: 'Qual artigo do Regulamento de Rádio da UIT trata especificamente do Serviço de Radioamador?',
    options: ['Artigo 25', 'Artigo 10', 'Artigo 15', 'Artigo 30'],
    correct: 0,
    explanation: 'O Artigo 25 do Regulamento de Rádio da UIT (Radio Regulations) é dedicado ao Serviço de Radioamador e ao Serviço de Radioamador via Satélite.',
  },
  {
    category: 'Legislação',
    question: 'O que estabelece a Recomendação ITU-R M.1544?',
    options: ['Qualificações mínimas para operadores de radioamador', 'Plano de faixas para a Região 2', 'Normas de homologação de equipamentos', 'Regras de licenciamento de estações'],
    correct: 0,
    explanation: 'A Recomendação ITU-R M.1544-1 define as qualificações mínimas que devem ser exigidas dos operadores de estações de radioamador.',
  },
  {
    category: 'Legislação',
    question: 'O Brasil pertence a qual Região da UIT para fins de atribuição de faixas de frequência?',
    options: ['Região 2', 'Região 1', 'Região 3', 'Região 4'],
    correct: 0,
    explanation: 'A UIT divide o mundo em 3 regiões. A Região 2 compreende as Américas. O Brasil segue o plano de faixas da IARU para a Região 2.',
  },
  {
    category: 'Legislação',
    question: 'O que é a LABRE?',
    options: ['Liga de Amadores Brasileiros de Rádio Emissão', 'Laboratório Brasileiro de Radiocomunicações', 'Liga Anatel de Broadcast e Radiodifusão Especial', 'Laboratório Avançado Brasileiro de Radiofrequência'],
    correct: 0,
    explanation: 'A LABRE é a entidade representativa dos radioamadores brasileiros, filiada à IARU (International Amateur Radio Union).',
  },
  {
    category: 'Legislação',
    question: 'Qual documento oficial define as faixas de frequência destinadas ao radioamador no Brasil?',
    options: ['Plano de Atribuição, Destinação e Distribuição de Faixas de Frequência (PADFF)', 'Regulamento de Rádio da UIT', 'Plano IARU Região 2', 'Resolução 772/2025'],
    correct: 0,
    explanation: 'O PADFF é o documento nacional que define quais faixas são atribuídas a cada serviço no Brasil, incluindo o radioamador.',
  },
  {
    category: 'Legislação',
    question: 'O que caracteriza uma estação de radioamador como "repetidora"?',
    options: ['Estação que retransmite automaticamente sinais de outras estações', 'Estação com potência acima de 500 W', 'Estação operada por duas ou mais pessoas', 'Estação com antena direcional'],
    correct: 0,
    explanation: 'Uma repetidora recebe e retransmite automaticamente os sinais de outras estações de radioamador, geralmente em VHF/UHF, ampliando o alcance das comunicações.',
  },
  {
    category: 'Legislação',
    question: 'O radioamador pode comunicar-se com estações de outros serviços de radiocomunicação em condições normais?',
    options: ['Não, exceto em casos de emergência', 'Sim, sem restrições', 'Sim, com autorização prévia da ANATEL', 'Não, em nenhuma hipótese'],
    correct: 0,
    explanation: 'Em condições normais, o radioamador deve se comunicar apenas com outras estações de radioamador. A exceção é em situações de emergência, quando pode usar qualquer meio para prestar socorro.',
  },
  {
    category: 'Legislação',
    question: 'O que significa a operação em caráter "secundário" em uma faixa de frequência?',
    options: ['Não pode causar interferência às estações primárias e deve aceitar interferências delas', 'Tem prioridade sobre as estações primárias', 'Pode transmitir com metade da potência máxima', 'Necessita de licença especial'],
    correct: 0,
    explanation: 'Quando opera em caráter secundário, a estação não pode causar interferência prejudicial a serviços primários e não pode exigir proteção contra interferências desses serviços.',
  },
  {
    category: 'Legislação',
    question: 'Qual é a finalidade do Serviço de Radioamador segundo a regulamentação?',
    options: ['Autoformação, intercomunicação e investigações técnicas', 'Comunicação comercial entre operadores', 'Retransmissão de programas de radiodifusão', 'Comunicação de dados entre empresas'],
    correct: 0,
    explanation: 'O Serviço de Radioamador tem como finalidade a autoformação (aprendizado pessoal), a intercomunicação (contato entre radioamadores) e as investigações técnicas (experimentação em radiocomunicação).',
  },
  {
    category: 'Legislação',
    question: 'O uso de linguagem cifrada nas transmissões de radioamador é:',
    options: ['Proibido, exceto para controle de estações de radioamador via satélite', 'Permitido livremente', 'Permitido apenas em emergências', 'Proibido em qualquer circunstância, sem exceção'],
    correct: 0,
    explanation: 'O radioamador deve transmitir em linguagem clara. O uso de cifras é vedado, exceto para o controle de comandos de estações espaciais de radioamador.',
  },
  {
    category: 'Legislação',
    question: 'A homologação de equipamentos de radiofrequência no Brasil é regulamentada pela:',
    options: ['Resolução ANATEL nº 780/2025', 'Resolução ANATEL nº 772/2025', 'Lei nº 9.472/1997', 'Resolução ANATEL nº 777/2025'],
    correct: 0,
    explanation: 'A Resolução 780/2025 trata da certificação e homologação de produtos para telecomunicações, incluindo os equipamentos de radiofrequência utilizados no radioamadorismo.',
  },
  {
    category: 'Legislação',
    question: 'O que é o "sufixo" de um indicativo de chamada como PY2ABC?',
    options: ['A parte "ABC" que identifica individualmente a estação', 'O prefixo "PY" que identifica o país', 'O dígito "2" que identifica a região', 'A junção do prefixo com o dígito regional'],
    correct: 0,
    explanation: 'O indicativo é composto por prefixo (PY), dígito regional (2) e sufixo (ABC). O sufixo identifica individualmente a estação dentro daquela região.',
  },
  {
    category: 'Legislação',
    question: 'Qual é a Lei que estabelece as bases do serviço de telecomunicações no Brasil?',
    options: ['Lei nº 9.472/1997 (Lei Geral de Telecomunicações)', 'Lei nº 8.666/1993', 'Lei nº 12.965/2014', 'Lei nº 9.295/1996'],
    correct: 0,
    explanation: 'A Lei Geral de Telecomunicações (LGT), Lei nº 9.472/1997, é o marco legal das telecomunicações no Brasil, estabelecendo os princípios para todos os serviços, incluindo o radioamador.',
  },
  {
    category: 'Legislação',
    question: 'Qual das alternativas descreve corretamente uma infração administrativa no radioamadorismo?',
    options: ['Operar sem habilitação (COER) ou fora das condições autorizadas', 'Usar equipamento importado sem nota fiscal', 'Operar em horário noturno sem autorização', 'Transmitir em idioma estrangeiro sem tradução'],
    correct: 0,
    explanation: 'Operar sem habilitação ou fora das condições autorizadas constitui infração administrativa e pode resultar em advertência, multa, suspensão ou cassação da habilitação e apreensão de equipamentos.',
  },

  // --- TÉCNICA E ÉTICA (20 questions) ---
  {
    category: 'Técnica e Ética',
    question: 'O que é modulação AM?',
    options: ['Variação da amplitude da portadora em função do sinal modulante', 'Variação da frequência da portadora em função do sinal modulante', 'Variação da fase da portadora em função do sinal modulante', 'Variação da potência total irradiada'],
    correct: 0,
    explanation: 'Na modulação AM (Amplitude Modulation), a amplitude (intensidade) da onda portadora varia proporcionalmente ao sinal de áudio ou dados que se deseja transmitir.',
  },
  {
    category: 'Técnica e Ética',
    question: 'O modo SSB (Single Sideband) é amplamente usado no radioamadorismo HF. O que o diferencia do AM convencional?',
    options: ['Transmite apenas uma banda lateral, sem a portadora, usando menos banda e potência', 'Transmite as duas bandas laterais sem a portadora', 'Transmite apenas a portadora, sem as bandas laterais', 'Usa o dobro da largura de banda do AM convencional'],
    correct: 0,
    explanation: 'O AM convencional transmite portadora + duas bandas laterais. O SSB elimina a portadora e uma das bandas laterais, concentrando toda a potência no sinal útil — muito mais eficiente para HF.',
  },
  {
    category: 'Técnica e Ética',
    question: 'Qual é a velocidade de propagação das ondas de rádio no espaço livre?',
    options: ['Aproximadamente 300.000 km/s (velocidade da luz)', 'Aproximadamente 150.000 km/s', 'Aproximadamente 340 m/s (velocidade do som)', 'Aproximadamente 200.000 km/s'],
    correct: 0,
    explanation: 'As ondas eletromagnéticas se propagam no vácuo à velocidade da luz: aproximadamente 3 × 10⁸ m/s ou 300.000 km/s.',
  },
  {
    category: 'Técnica e Ética',
    question: 'O que é a ionosfera e qual sua importância para o radioamadorismo em HF?',
    options: ['Camada atmosférica ionizada que reflete ondas de HF, permitindo comunicações de longa distância', 'Camada da estratosfera que absorve ondas de UHF', 'Região entre a Terra e a Lua que atenua sinais de VHF', 'Camada de gases que bloqueia sinais acima de 30 MHz'],
    correct: 0,
    explanation: 'A ionosfera é uma camada da atmosfera ionizada pela radiação solar. Ela reflete ondas de rádio em HF de volta à Terra, possibilitando comunicações além do horizonte — o chamado "salto ionosférico".',
  },
  {
    category: 'Técnica e Ética',
    question: 'O que é ROE (Relação de Ondas Estacionárias) ou SWR?',
    options: ['Relação que indica o grau de casamento entre linha de transmissão e antena', 'Relação entre ganho e perda de uma antena', 'Medida de eficiência de um amplificador de RF', 'Relação entre frequência de operação e frequência de ressonância'],
    correct: 0,
    explanation: 'A ROE (ou SWR) indica o grau de casamento entre a linha de transmissão e a antena. Uma ROE de 1:1 é perfeita. Valores altos indicam descasamento, causando perda de potência e possível dano ao transmissor.',
  },
  {
    category: 'Técnica e Ética',
    question: 'Qual é o comprimento de onda aproximado de um sinal de 14 MHz?',
    options: ['21 metros', '10 metros', '42 metros', '7 metros'],
    correct: 0,
    explanation: 'λ = 300 / f(MHz) = 300 / 14 ≈ 21 metros. A fórmula é: comprimento de onda (m) = 300 dividido pela frequência em MHz.',
  },
  {
    category: 'Técnica e Ética',
    question: 'O que é uma antena dipolo de meia onda?',
    options: ['Antena com comprimento total igual à metade do comprimento de onda da frequência de operação', 'Antena com comprimento total igual ao comprimento de onda completo', 'Antena com dois elementos diretores e um refletor', 'Antena com ganho de 6 dBi'],
    correct: 0,
    explanation: 'O dipolo de meia onda (λ/2) é a antena mais básica do radioamadorismo. Seu comprimento total é metade do comprimento de onda, com cada braço medindo λ/4.',
  },
  {
    category: 'Técnica e Ética',
    question: 'Qual é a prática correta ao encontrar uma frequência aparentemente livre?',
    options: ['Perguntar "QRL?" para verificar se está em uso antes de transmitir', 'Transmitir imediatamente, pois pode ser sinal fraco de estação distante', 'Usar potência máxima para verificar se há resposta', 'Mudar para outra faixa automaticamente'],
    correct: 0,
    explanation: '"QRL?" significa "Esta frequência está sendo usada?" É boa prática perguntar antes de transmitir, evitando interferência em QSOs em andamento que podem não estar sendo ouvidos claramente.',
  },
  {
    category: 'Técnica e Ética',
    question: 'O que é DX no radioamadorismo?',
    options: ['Comunicação com estações distantes, geralmente em outros países', 'Comunicação digital por pacote de dados', 'Duplex — comunicação simultânea em duas frequências', 'Transmissão direcional de alta potência'],
    correct: 0,
    explanation: 'DX (do inglês "distance") refere-se a contatos de longa distância, geralmente internacionais. "Fazer DX" é um dos objetivos mais populares entre radioamadores.',
  },
  {
    category: 'Técnica e Ética',
    question: 'O que é o modo CW no radioamadorismo?',
    options: ['Código Morse — transmissão por pulsos de portadora contínua', 'Comunicação por voz em FM', 'Comunicação digital por computador', 'Transmissão de imagens por televisão amadora'],
    correct: 0,
    explanation: 'CW (Continuous Wave) é o modo usando código Morse. Apesar de ser o modo mais antigo, ainda é muito popular por sua eficiência em condições de sinal fraco.',
  },
  {
    category: 'Técnica e Ética',
    question: 'O que deve ser feito ao constatar que está causando interferência a outro serviço?',
    options: ['Cessar imediatamente a transmissão e resolver o problema antes de retornar', 'Reduzir a potência à metade e continuar operando', 'Mudar de modo de emissão', 'Contatar a ANATEL e aguardar autorização para continuar'],
    correct: 0,
    explanation: 'Causar interferência prejudicial é uma infração. A conduta ética e legal é cessar a operação, identificar e corrigir a causa antes de retomar.',
  },
  {
    category: 'Técnica e Ética',
    question: 'O que são harmônicas em uma transmissão de rádio?',
    options: ['Emissões indesejadas em múltiplos inteiros da frequência fundamental', 'Sinais de controle enviados junto com a transmissão principal', 'Reflexões do sinal na ionosfera', 'Ruídos gerados pelo receptor'],
    correct: 0,
    explanation: 'Harmônicas são componentes de frequência indesejadas em múltiplos da frequência de transmissão (2ª = 2×, 3ª = 3×, etc.). Podem causar interferência em outros serviços e são limitadas por regulamentação.',
  },
  {
    category: 'Técnica e Ética',
    question: 'Qual é a conduta correta em uma rede (net) de emergência ativada?',
    options: ['Manter disciplina, transmitir apenas quando solicitado pelo controle de rede', 'Transmitir livremente para maximizar as comunicações', 'Usar potência máxima para garantir cobertura', 'Alternar entre frequências para ampliar a cobertura'],
    correct: 0,
    explanation: 'Em redes de emergência, a disciplina é essencial. O controle de rede coordena as comunicações. Transmissões não autorizadas podem causar interferência e comprometer operações de socorro.',
  },
  {
    category: 'Técnica e Ética',
    question: 'O que significa ganho de antena expresso em dBd?',
    options: ['Ganho em decibéis em relação a um dipolo de referência', 'Ganho em decibéis em relação a uma antena isotrópica', 'Ganho medido em decibéis de potência absoluta', 'Perda de retorno na entrada da antena'],
    correct: 0,
    explanation: 'dBd = decibéis em relação ao dipolo. dBi = decibéis em relação ao isotrópico. A relação entre eles é: dBi = dBd + 2,15.',
  },
  {
    category: 'Técnica e Ética',
    question: 'O que é propagação por onda ionosférica (sky wave)?',
    options: ['Propagação via refração na ionosfera, permitindo alcances além do horizonte', 'Propagação em linha reta entre duas antenas em visibilidade', 'Propagação ao longo da superfície terrestre', 'Propagação via satélite em órbita geoestacionária'],
    correct: 0,
    explanation: 'A onda ionosférica (sky wave) é refratada pelas camadas ionosféricas de volta à Terra. É o principal modo de propagação em HF para comunicações de longa distância.',
  },
  {
    category: 'Técnica e Ética',
    question: 'Qual é a faixa de frequência conhecida como "40 metros" no radioamadorismo?',
    options: ['7,0 a 7,2 MHz', '14,0 a 14,35 MHz', '3,5 a 4,0 MHz', '21,0 a 21,45 MHz'],
    correct: 0,
    explanation: 'A faixa dos "40 metros" vai de 7,0 a 7,2 MHz na Região 2 (Américas). É popular para comunicações domésticas de médio alcance e DX noturno.',
  },
  {
    category: 'Técnica e Ética',
    question: 'O que é modulação FM?',
    options: ['Variação da frequência da portadora em função do sinal modulante', 'Variação da amplitude da portadora em função do sinal modulante', 'Variação da fase da portadora em função do sinal modulante', 'Variação da largura do pulso em função do sinal modulante'],
    correct: 0,
    explanation: 'Na modulação FM (Frequency Modulation), é a frequência da onda portadora que varia conforme o sinal modulante. O FM é menos suscetível a ruídos que o AM, por isso é mais usado em VHF/UHF.',
  },
  {
    category: 'Técnica e Ética',
    question: 'Ao encerrar um QSO, qual é o procedimento correto de identificação?',
    options: ['Transmitir o próprio indicativo de chamada antes de encerrar', 'Transmitir apenas "73" (abraços) e desligar', 'Registrar o QSO no log sem identificação final', 'Aguardar a outra estação encerrar primeiro'],
    correct: 0,
    explanation: 'A identificação pelo indicativo de chamada é obrigatória ao início, durante e ao encerramento das transmissões. Permite que qualquer pessoa saiba quem está operando.',
  },
  {
    category: 'Técnica e Ética',
    question: 'O que é o modo digital FT8?',
    options: ['Modo digital de alta sensibilidade popular para DX em condições de sinal fraco', 'Protocolo de transmissão de fax pelo rádio', 'Modo de voz digital usado em repetidoras DMR', 'Sistema de transmissão de televisão amadora em HF'],
    correct: 0,
    explanation: 'FT8 é um modo digital muito popular que funciona com sinais muito fracos (até -20 dB abaixo do ruído), revolucionando o DX com baixa potência. Desenvolvido por Joe Taylor (K1JT).',
  },
  {
    category: 'Técnica e Ética',
    question: 'O que caracteriza a propagação por "onda de superfície" (ground wave)?',
    options: ['Propagação ao longo da superfície terrestre, usada principalmente em MF e HF baixo', 'Propagação refletida pela ionosfera', 'Propagação em visada direta entre antenas', 'Propagação via tropodifusão'],
    correct: 0,
    explanation: 'A onda de superfície (ground wave) se propaga acompanhando a curvatura da Terra. É o principal modo em MF (médias frequências) e nas faixas mais baixas de HF, com alcance limitado.',
  },
];

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function getPerformanceMessage(pct) {
  if (pct >= 90) return 'Excelente! Você está muito bem preparado para o exame COER.';
  if (pct >= 70) return 'Bom resultado! Revise os erros e você estará pronto.';
  if (pct >= 50) return 'Resultado razoável. Dedique mais tempo ao estudo das áreas com erros.';
  return 'Continue estudando! Revise o material e tente novamente.';
}

export default function Quiz() {
  const [phase, setPhase] = useState('start'); // 'start' | 'quiz' | 'results'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(40).fill(null));
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  useEffect(() => {
    if (phase !== 'quiz') return;
    if (timeLeft <= 0) {
      setPhase('results');
      return;
    }
    const t = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, timeLeft]);

  function startQuiz() {
    setAnswers(Array(40).fill(null));
    setTimeLeft(TOTAL_TIME);
    setCurrentIndex(0);
    setPhase('quiz');
  }

  function selectAnswer(optionIndex) {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  }

  function goTo(index) {
    setCurrentIndex(index);
  }

  const answeredCount = answers.filter((a) => a !== null).length;
  const q = QUESTIONS[currentIndex];

  // Compute results
  const score = answers.reduce(
    (acc, ans, i) => (ans === QUESTIONS[i].correct ? acc + 1 : acc),
    0
  );
  const legScore = answers.reduce(
    (acc, ans, i) =>
      QUESTIONS[i].category === 'Legislação' && ans === QUESTIONS[i].correct
        ? acc + 1
        : acc,
    0
  );
  const tecScore = answers.reduce(
    (acc, ans, i) =>
      QUESTIONS[i].category === 'Técnica e Ética' && ans === QUESTIONS[i].correct
        ? acc + 1
        : acc,
    0
  );
  const pct = Math.round((score / 40) * 100);

  // ─── START SCREEN ────────────────────────────────────────────────────────────
  if (phase === 'start') {
    return (
      <Layout title="Quiz — Simulado COER" description="Simulado para o exame COER de radioamador">
        <div className={styles.page}>
          <div className={styles.startScreen}>
            <div className={styles.startIcon}>📻</div>
            <h1 className={styles.startTitle}>Quiz — Simulado COER</h1>
            <p className={styles.startSubtitle}>
              Teste seus conhecimentos para o exame de certificação de operador de
              estação de radioamador.
            </p>
            <ul className={styles.startMeta}>
              <li>
                <span className={styles.metaIcon}>📋</span>
                <strong>40 questões</strong> — 20 de Legislação + 20 de Técnica e Ética
              </li>
              <li>
                <span className={styles.metaIcon}>⏱️</span>
                <strong>Tempo total:</strong> 1 hora (60 minutos)
              </li>
              <li>
                <span className={styles.metaIcon}>✅</span>
                Ao final, veja o gabarito completo com explicações
              </li>
              <li>
                <span className={styles.metaIcon}>🔀</span>
                Navegue livremente entre as questões antes de encerrar
              </li>
            </ul>
            <button className={styles.startBtn} onClick={startQuiz}>
              Iniciar Quiz
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  // ─── RESULTS SCREEN ──────────────────────────────────────────────────────────
  if (phase === 'results') {
    return (
      <Layout title="Resultado — Simulado COER" description="Resultado do simulado COER">
        <div className={styles.page}>
          {/* Header */}
          <div className={styles.resultsHeader}>
            <button className={styles.retryBtn} onClick={startQuiz}>
              ↺ Refazer Quiz
            </button>
            <h2 className={styles.resultsTitle}>Resultado do Simulado</h2>
            <div className={styles.scoreBig}>
              <span className={styles.scoreNumber}>{score}</span>
              <span className={styles.scoreTotal}> / 40</span>
              <span className={styles.scorePct}>{pct}%</span>
            </div>
            <div className={styles.categoryScores}>
              <div className={styles.categoryScore}>
                <div className={styles.categoryScoreLabel}>Legislação</div>
                <div className={styles.categoryScoreValue}>{legScore} / 20</div>
                <div className={styles.categoryScorePct}>
                  {Math.round((legScore / 20) * 100)}%
                </div>
              </div>
              <div className={styles.categoryScore}>
                <div className={styles.categoryScoreLabel}>Técnica e Ética</div>
                <div className={styles.categoryScoreValue}>{tecScore} / 20</div>
                <div className={styles.categoryScorePct}>
                  {Math.round((tecScore / 20) * 100)}%
                </div>
              </div>
            </div>
            <p className={styles.performanceMsg}>{getPerformanceMessage(pct)}</p>
          </div>

          {/* Question review */}
          <h3 className={styles.reviewSectionTitle}>Gabarito Comentado</h3>
          {QUESTIONS.map((question, i) => {
            const userAnswer = answers[i];
            const isCorrect = userAnswer === question.correct;
            const isUnanswered = userAnswer === null;
            return (
              <div key={i} className={styles.questionReview}>
                <div className={styles.reviewHeader}>
                  <span
                    className={
                      isUnanswered
                        ? styles.reviewStatusUnanswered
                        : isCorrect
                        ? styles.reviewStatusCorrect
                        : styles.reviewStatusWrong
                    }
                  >
                    {isUnanswered ? '—' : isCorrect ? '✓' : '✗'}
                  </span>
                  <span className={styles.reviewQuestionNum}>Questão {i + 1}</span>
                  <span
                    className={`${styles.categoryBadge} ${
                      question.category === 'Legislação'
                        ? styles.categoryBadgeLeg
                        : styles.categoryBadgeTec
                    }`}
                  >
                    {question.category}
                  </span>
                </div>
                <p className={styles.reviewQuestion}>{question.question}</p>
                <div className={styles.reviewOptions}>
                  {question.options.map((opt, j) => {
                    const isThisCorrect = j === question.correct;
                    const isThisUserWrong =
                      j === userAnswer && userAnswer !== question.correct;
                    let optClass = styles.reviewOption;
                    if (isThisCorrect) optClass = `${optClass} ${styles.reviewOptionCorrect}`;
                    if (isThisUserWrong) optClass = `${optClass} ${styles.reviewOptionWrong}`;
                    return (
                      <div key={j} className={optClass}>
                        <span className={styles.optionLabel}>{OPTION_LABELS[j]}</span>
                        <span>{opt}</span>
                        {isThisCorrect && (
                          <span className={styles.reviewTag}>Correta</span>
                        )}
                        {isThisUserWrong && (
                          <span className={styles.reviewTagWrong}>Sua resposta</span>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className={styles.explanation}>
                  <strong>Explicação:</strong> {question.explanation}
                </div>
              </div>
            );
          })}

          <div className={styles.retryRow}>
            <button className={styles.retryBtn} onClick={startQuiz}>
              ↺ Refazer Quiz
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  // ─── QUIZ SCREEN ─────────────────────────────────────────────────────────────
  const isWarning = timeLeft < 300; // < 5 minutes

  return (
    <Layout title="Quiz — Simulado COER" description="Simulado COER em andamento">
      <div className={styles.page}>
        {/* Top bar */}
        <div className={styles.quizHeader}>
          <div className={isWarning ? `${styles.timer} ${styles.timerWarning}` : styles.timer}>
            ⏱ {formatTime(timeLeft)}
          </div>
          <div className={styles.quizProgress}>
            Questão {currentIndex + 1} de {QUESTIONS.length}
          </div>
          <div className={styles.answeredCount}>
            {answeredCount} / {QUESTIONS.length} respondidas
          </div>
        </div>

        {/* Progress bar */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
          />
        </div>

        {/* Question card */}
        <div className={styles.questionCard}>
          <span
            className={`${styles.categoryBadge} ${
              q.category === 'Legislação'
                ? styles.categoryBadgeLeg
                : styles.categoryBadgeTec
            }`}
          >
            {q.category}
          </span>
          <p className={styles.questionText}>{q.question}</p>

          <div className={styles.options}>
            {q.options.map((opt, j) => {
              const isSelected = answers[currentIndex] === j;
              return (
                <button
                  key={j}
                  className={
                    isSelected
                      ? `${styles.option} ${styles.optionSelected}`
                      : styles.option
                  }
                  onClick={() => selectAnswer(j)}
                >
                  <span className={styles.optionLabel}>{OPTION_LABELS[j]}</span>
                  <span className={styles.optionText}>{opt}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navButtons}>
          <button
            className={styles.navBtn}
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
          >
            ← Anterior
          </button>
          <button
            className={styles.finishBtn}
            onClick={() => setPhase('results')}
          >
            Encerrar e ver resultado
          </button>
          <button
            className={styles.navBtn}
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === QUESTIONS.length - 1}
          >
            Próxima →
          </button>
        </div>

        {/* Question dots */}
        <div className={styles.dots}>
          {QUESTIONS.map((_, i) => {
            let dotClass = styles.dot;
            if (i === currentIndex) dotClass = `${dotClass} ${styles.dotCurrent}`;
            else if (answers[i] !== null) dotClass = `${dotClass} ${styles.dotAnswered}`;
            return (
              <button
                key={i}
                className={dotClass}
                onClick={() => goTo(i)}
                title={`Questão ${i + 1}${answers[i] !== null ? ' (respondida)' : ''}`}
              />
            );
          })}
        </div>
        <div className={styles.dotsLegend}>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotGray}`} /> Não respondida
          </span>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotBlue}`} /> Respondida
          </span>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotCurrent}`} /> Atual
          </span>
        </div>
      </div>
    </Layout>
  );
}
