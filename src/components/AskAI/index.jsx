import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

const PREFIX = 'Sou estudante para prova de radioamador (COER Classe C). Explique de forma simples: ';

function isFromDocContent(node) {
  let el = node?.nodeType === 3 ? node.parentElement : node;
  while (el && el !== document.body) {
    if (el.classList?.contains('theme-doc-markdown')) return true;
    el = el.parentElement;
  }
  return false;
}

function openChat(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  window.open('https://chat.openai.com/?q=' + encodeURIComponent(PREFIX + trimmed), '_blank');
}

export default function AskAI() {
  const { pathname } = useLocation();
  const [isDocPage, setIsDocPage] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [selection, setSelection] = useState('');
  const [selectionHint, setSelectionHint] = useState(false);
  const inputRef = useRef(null);
  const rootRef = useRef(null);

  // Detecta se é página de doc após cada navegação
  useEffect(() => {
    setIsDocPage(!!document.querySelector('.theme-doc-markdown'));
    setOpen(false);
    setSelection('');
    setSelectionHint(false);
  }, [pathname]);

  // Listener de seleção — re-registra quando isDocPage muda
  useEffect(() => {
    if (!isDocPage) return;

    function handleSelection(e) {
      if (rootRef.current?.contains(e.target)) return;
      const sel = window.getSelection();
      const text = sel?.toString().trim() ?? '';
      if (!text) return;
      if (!isFromDocContent(sel.anchorNode)) return;
      setSelection(text);
      setSelectionHint(true);
    }

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', handleSelection);
    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('touchend', handleSelection);
    };
  }, [isDocPage]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    if (!open) setSelectionHint(false);
  }, [open]);

  function handleSend() {
    openChat(input.trim() || selection);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSend();
    if (e.key === 'Escape') setOpen(false);
  }

  function applySelection() {
    setInput(selection);
    setSelectionHint(false);
    inputRef.current?.focus();
  }

  if (!isDocPage) return null;

  return (
    <>
      {/* Painel separado do FAB para evitar problemas de stacking context */}
      {open && (
        <div className={styles.panel} ref={rootRef}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.avatar}>IA</div>
              <div>
                <div className={styles.headerTitle}>Assistente COER</div>
                <div className={styles.headerSub}>Abre no ChatGPT</div>
              </div>
            </div>
            <button className={styles.closeBtn} onClick={() => setOpen(false)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div className={styles.body}>
            <div className={styles.bubble}>
              Olá! Selecione um trecho do conteúdo ou digite sua dúvida sobre radioamadorismo.
            </div>

            {selectionHint && selection && (
              <div className={styles.selectionHint}>
                <span className={styles.selectionPreview}>
                  "{selection.length > 100 ? selection.slice(0, 100) + '…' : selection}"
                </span>
                <button className={styles.useSelectionBtn} onClick={applySelection}>
                  Usar texto selecionado
                </button>
              </div>
            )}
          </div>

          <div className={styles.footer}>
            <input
              ref={inputRef}
              className={styles.input}
              type="text"
              placeholder="Digite sua dúvida..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className={styles.sendBtn}
              onClick={handleSend}
              disabled={!input.trim() && !selection}
              title="Enviar"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* FAB sempre visível */}
      <button
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => setOpen(v => !v)}
        title="Perguntar na IA"
        aria-label="Abrir assistente IA"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>
    </>
  );
}
