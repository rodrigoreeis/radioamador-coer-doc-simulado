import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './quiz.module.css';
import { QUESTION_BANK } from '../data/quiz-questions';

const TOTAL_TIME = 3600;

const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E'];

const ALL_LEGISLACAO  = QUESTION_BANK.filter(q => q.category === 'Legislação de Telecomunicações');
const ALL_TECNICA     = QUESTION_BANK.filter(q => q.category === 'Técnica e Ética Operacional');
const ALL_ELETRONICA  = QUESTION_BANK.filter(q => q.category === 'Eletrônica e Eletricidade');

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

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
  const [shuffled, setShuffled] = useState([]);
  const [answers, setAnswers] = useState(Array(60).fill(null));
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
    const selected = [
      ...shuffle(ALL_LEGISLACAO).slice(0, 20),  // questões 1-20: Legislação de Telecomunicações
      ...shuffle(ALL_TECNICA).slice(0, 20),     // questões 21-40: Técnica e Ética Operacional
      ...shuffle(ALL_ELETRONICA).slice(0, 20),  // questões 41-60: Eletrônica e Eletricidade
    ];
    setShuffled(selected);
    setAnswers(Array(60).fill(null));
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
  const q = shuffled[currentIndex];

  // Compute results (guard against empty shuffled during SSR)
  const total = shuffled.length || 60;
  const score = shuffled.length === 0 ? 0 : answers.reduce(
    (acc, ans, i) => (i < shuffled.length && ans === shuffled[i].correct ? acc + 1 : acc), 0
  );
  const legScore = shuffled.length === 0 ? 0 : answers.reduce(
    (acc, ans, i) => i < shuffled.length && shuffled[i].category === 'Legislação de Telecomunicações' && ans === shuffled[i].correct ? acc + 1 : acc, 0
  );
  const tecScore = shuffled.length === 0 ? 0 : answers.reduce(
    (acc, ans, i) => i < shuffled.length && shuffled[i].category === 'Técnica e Ética Operacional' && ans === shuffled[i].correct ? acc + 1 : acc, 0
  );
  const eletScore = shuffled.length === 0 ? 0 : answers.reduce(
    (acc, ans, i) => i < shuffled.length && shuffled[i].category === 'Eletrônica e Eletricidade' && ans === shuffled[i].correct ? acc + 1 : acc, 0
  );
  const pct = Math.round((score / total) * 100);

  // ─── START SCREEN ────────────────────────────────────────────────────────────
  if (phase === 'start') {
    return (
      <Layout title="Simulado COER" description="Simulado para o exame COER de radioamador">
        <div className={styles.page}>
          <div className={styles.startScreen}>
            <h1 className={styles.startTitle}>Simulado COER</h1>
            <p className={styles.startSubtitle}>
              Teste seus conhecimentos para o exame de certificação de operador de estação de radioamador — Classe C.
            </p>

            <div className={styles.startCards}>
              <div className={styles.startCard}>
                <div className={styles.startCardValue}>60</div>
                <div className={styles.startCardLabel}>questões</div>
              </div>
              <div className={styles.startCard}>
                <div className={styles.startCardValue}>60<span className={styles.startCardUnit}>min</span></div>
                <div className={styles.startCardLabel}>tempo total</div>
              </div>
              <div className={styles.startCard}>
                <div className={styles.startCardValue}>3</div>
                <div className={styles.startCardLabel}>temas</div>
              </div>
            </div>

            <div className={styles.startTopics}>
              <div className={`${styles.startTopic} ${styles.startTopicLeg}`}>
                <span className={styles.startTopicCount}>20</span>
                <span className={styles.startTopicName}>Legislação de Telecomunicações</span>
              </div>
              <div className={`${styles.startTopic} ${styles.startTopicTec}`}>
                <span className={styles.startTopicCount}>20</span>
                <span className={styles.startTopicName}>Técnica e Ética Operacional</span>
              </div>
              <div className={`${styles.startTopic} ${styles.startTopicElet}`}>
                <span className={styles.startTopicCount}>20</span>
                <span className={styles.startTopicName}>Eletrônica e Eletricidade</span>
              </div>
            </div>

            <ul className={styles.startInfo}>
              <li>Navegue livremente entre as questões antes de encerrar</li>
              <li>Gabarito comentado disponível ao finalizar</li>
            </ul>

            <button className={styles.startBtn} onClick={startQuiz}>
              Iniciar Simulado
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
              Refazer Simulado
            </button>
            <h2 className={styles.resultsTitle}>Resultado do Simulado</h2>
            <div className={styles.scoreBig}>
              <span className={styles.scoreNumber}>{score}</span>
              <span className={styles.scoreTotal}> / 60</span>
              <span className={styles.scorePct}>{pct}%</span>
            </div>
            <div className={styles.categoryScores}>
              <div className={styles.categoryScore}>
                <div className={styles.categoryScoreLabel}>Legislação de Telecomunicações</div>
                <div className={styles.categoryScoreValue}>{legScore} / 20</div>
                <div className={styles.categoryScorePct}>
                  {Math.round((legScore / 20) * 100)}%
                </div>
              </div>
              <div className={styles.categoryScore}>
                <div className={styles.categoryScoreLabel}>Técnica e Ética Operacional</div>
                <div className={styles.categoryScoreValue}>{tecScore} / 20</div>
                <div className={styles.categoryScorePct}>
                  {Math.round((tecScore / 20) * 100)}%
                </div>
              </div>
              <div className={styles.categoryScore}>
                <div className={styles.categoryScoreLabel}>Eletrônica e Eletricidade</div>
                <div className={styles.categoryScoreValue}>{eletScore} / 20</div>
                <div className={styles.categoryScorePct}>
                  {Math.round((eletScore / 20) * 100)}%
                </div>
              </div>
            </div>
            <p className={styles.performanceMsg}>{getPerformanceMessage(pct)}</p>
          </div>

          {/* Question review */}
          <h3 className={styles.reviewSectionTitle}>Gabarito Comentado</h3>
          {shuffled.map((question, i) => {
            const userAnswer = answers[i];
            const isCorrect = userAnswer === question.correct;
            const isUnanswered = userAnswer === null;
            const reviewCardClass = `${styles.questionReview} ${
              isUnanswered ? '' : isCorrect ? styles.questionReviewCorrect : styles.questionReviewWrong
            }`;
            return (
              <div key={i} className={reviewCardClass}>
                <div className={styles.reviewHeader}>
                  <span className={styles.reviewQuestionNum}>Questão {i + 1}</span>
                  <span
                    className={`${styles.categoryBadge} ${
                      question.category === 'Legislação de Telecomunicações' ? styles.categoryBadgeLeg
                      : question.category === 'Técnica e Ética Operacional' ? styles.categoryBadgeTec
                      : styles.categoryBadgeElet
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
              Refazer Simulado
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  // ─── QUIZ SCREEN ─────────────────────────────────────────────────────────────
  const isWarning = timeLeft < 300; // < 5 minutes

  return (
    <Layout title="Simulado COER" description="Simulado COER em andamento">
      <div className={styles.page}>
        {/* Top bar */}
        <div className={styles.quizHeader}>
          <div className={isWarning ? `${styles.timer} ${styles.timerWarning}` : styles.timer}>
            ⏱ {formatTime(timeLeft)}
          </div>
          <div className={styles.quizProgress}>
            Questão {currentIndex + 1} de {shuffled.length}
          </div>
          <div className={styles.answeredCount}>
            {answeredCount} / {shuffled.length} respondidas
          </div>
        </div>

        {/* Progress bar */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${(answeredCount / shuffled.length) * 100}%` }}
          />
        </div>

        {/* Question card */}
        <div className={styles.questionCard}>
          <span
            className={`${styles.categoryBadge} ${
              q.category === 'Legislação de Telecomunicações' ? styles.categoryBadgeLeg
              : q.category === 'Técnica e Ética Operacional' ? styles.categoryBadgeTec
              : styles.categoryBadgeElet
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
            Anterior
          </button>
          {answeredCount === shuffled.length ? (
            <button
              className={styles.deliverBtn}
              onClick={() => setPhase('results')}
            >
              Entregar Simulado
            </button>
          ) : (
            <button
              className={styles.navBtn}
              onClick={() => goTo(currentIndex + 1)}
              disabled={currentIndex === shuffled.length - 1 || answers[currentIndex] === null}
            >
              Próxima
            </button>
          )}
        </div>

        {/* Question dots */}
        <div className={styles.dots}>
          {shuffled.map((q, i) => {
            const answered = answers[i] !== null;
            const isCurrent = i === currentIndex;
            let dotClass = styles.dot;
            if (q.category === 'Legislação de Telecomunicações') dotClass += ' ' + styles.dotLeg;
            else if (q.category === 'Técnica e Ética Operacional') dotClass += ' ' + styles.dotTec;
            else dotClass += ' ' + styles.dotElet;
            if (answered) dotClass += ' ' + styles.dotAnswered;
            if (isCurrent) dotClass += ' ' + styles.dotCurrent;
            return (
              <button
                key={i}
                className={dotClass}
                onClick={() => goTo(i)}
                title={`Questão ${i + 1} — ${q.category}${answered ? ' (respondida)' : ''}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        <div className={styles.dotsLegend}>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotLeg}`} /> Legislação de Telecomunicações
          </span>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotTec}`} /> Técnica e Ética Operacional
          </span>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotElet}`} /> Eletrônica e Eletricidade
          </span>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotFaded}`} /> Não respondida (opaca)
          </span>
        </div>
      </div>
    </Layout>
  );
}
