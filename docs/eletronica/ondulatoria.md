---
sidebar_position: 4
title: Ondulatória e Sinais Senoidais
slug: ondulatoria
---

# Anexo 3, Seção 4 – Ondulatória e Sinais Senoidais

## 4.1 Conceitos de Onda: Frequência, Período, Amplitude

Uma **onda senoidal** (ou sinal senoidal) é o tipo mais fundamental de sinal periódico. Todas as outras formas de onda podem ser decompostas em senoides (Teorema de Fourier).

### Frequência (f)
O número de ciclos completos por segundo. Medida em **Hertz (Hz)**.

### Período (T)
O tempo de um ciclo completo. É o inverso da frequência:

`T = (1)/(f)     f = (1)/(T)`

**Exemplo:** Um sinal de 1 MHz tem período de T = 1/1.000.000 = 1 μs (um microssegundo).

### Amplitude
A amplitude de uma onda senoidal pode ser expressa de várias formas:

- **Valor de pico (Vp)**: o valor máximo atingido pela onda (positivo ou negativo)
- **Valor pico-a-pico (Vpp)**: a diferença entre o pico positivo e o negativo

`V_(pp) = 2 × V_p`

**Exemplo:** Uma onda senoidal com Vp = 10 V tem Vpp = 20 V.

## 4.2 Valores Eficaz, Máximo e Médio

### Valor Eficaz (RMS – Root Mean Square)
O valor eficaz (ou RMS) é o valor de CC equivalente que produziria a mesma potência dissipada em uma resistência. É o valor que os multímetros comuns mostram para sinais CA.

Para uma onda senoidal pura:

`V_(rms) ≈ 0,707 × V_p`
`V_(pico) ≈ 1,414 × V_(rms)`

**Exemplo:** A tensão da tomada doméstica de 127 V é um valor RMS. O pico real é:
`V_p = 127 × 1,414 ≈ 179,6  V`

**Atenção:** Capacitores eletrolíticos devem ser escolhidos com tensão nominal **acima do valor de pico**, não do valor RMS.

### Valor Médio Retificado
O valor médio de meia onda retificada de uma senoide:

`V_(méd) = 0,637 × V_p`

É usado em cálculos de retificadores de meia onda e onda completa.

### Resumo dos Valores

| Valor | Fórmula (a partir de Vp) |
|-------|--------------------------|
| Pico (Vp) | — |
| Pico-a-pico (Vpp) | 2 × Vp |
| Eficaz/RMS (Vrms) | 0,707 × Vp |
| Médio retificado | 0,637 × Vp |

## 4.3 Sinais Senoidais em Aplicações de Rádio

No radioamadorismo, sinais senoidais estão presentes em todas as etapas do sistema:

### Portadora
O transmissor gera uma onda senoidal pura na frequência de trabalho. Essa é a **portadora**.

### Modulação
O sinal de áudio (voz) ou dados modifica a portadora:

- **Modulação em Amplitude (AM)**: a amplitude da senoide varia com o sinal de áudio
- **Modulação em Frequência (FM)**: a frequência da senoide varia com o sinal de áudio
- **Modulação em Fase (PM)**: a fase da senoide varia com o sinal de áudio

O **SSB** (Single Sideband) é uma forma especial de AM onde apenas uma das bandas laterais é transmitida, resultando em maior eficiência de potência e menor largura de banda.

### Análise Espectral
A **análise de Fourier** permite decompor qualquer sinal periódico em uma soma de senoides:
- Uma onda quadrada, por exemplo, contém a fundamental + harmônicas ímpares (3ª, 5ª, 7ª, ...)
- Isso explica por que transmissores mal projetados geram harmônicas: sinais quadrados ou distorcidos dentro do transmissor resultam em energia em múltiplos da frequência fundamental
- O filtro passa-baixas (LPF) na saída do transmissor atenua essas harmônicas antes que cheguem à antena
