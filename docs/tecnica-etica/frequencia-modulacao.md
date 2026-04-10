---
sidebar_position: 3
title: Frequência, Comprimento de Onda e Modulação
slug: frequencia-modulacao
---

# Anexo 1, Seção 3 – Frequência, Comprimento de Onda e Modulação

## 3.1 Conceitos básicos

### Frequência
A frequência (f) é o número de ciclos completos por segundo de uma onda eletromagnética. É medida em **Hertz (Hz)** e seus múltiplos:
- 1 kHz = 1.000 Hz
- 1 MHz = 1.000.000 Hz
- 1 GHz = 1.000.000.000 Hz

### Período
O período (T) é o tempo de um ciclo completo. Frequência e período são inversamente relacionados:
`T = (1)/(f)`

### Comprimento de onda
O comprimento de onda (λ) é a distância percorrida pela onda em um período. No vácuo (e, aproximadamente, no ar):
`λ(m) ≈ (300)/(f(MHz))`

## 3.2 Faixas de frequência e designações

| Designação | Sigla | Intervalo | Comprimento de onda | Tipo de onda |
|-----------|-------|-----------|---------------------|--------------|
| Frequência Muito Baixa | VLF | 3–30 kHz | 100–10 km | Onda de terra |
| Frequência Baixa | LF | 30–300 kHz | 10–1 km | Onda de terra |
| Frequência Média | MF | 300 kHz–3 MHz | 1.000–100 m | Onda de terra/ionosfera |
| Frequência Alta | HF | 3–30 MHz | 100–10 m | Onda ionosférica (céu) |
| Frequência Muito Alta | VHF | 30–300 MHz | 10–1 m | Onda direta/troposfera |
| Frequência Ultra Alta | UHF | 300 MHz–3 GHz | 1–0,1 m | Onda direta |
| Frequência Super Alta | SHF | 3–30 GHz | 10–1 cm | Micro-ondas |

**Referências de frequência do dia a dia:**
- Voz telefônica: 300–3.400 Hz (banda de áudio)
- Audição humana: 16–16.000 Hz (20 Hz–20 kHz, ampliando a faixa)

## 3.3 Mensagem, portadora e sinal modulado

Para transmitir informação (voz, dados) por rádio, usamos a analogia:

- **Mensagem**: o que você quer enviar (a carta)
- **Portadora**: a onda de rádio em uma frequência específica (o envelope)
- **Sinal modulado**: a portadora com a mensagem "inserida" nela (a carta dentro do envelope)

A **modulação** é o processo de combinar a mensagem com a portadora. A **demodulação** é o processo inverso (receptor extrai a mensagem da portadora).

## 3.4 Tipos comuns de modulação

### AM – Modulação em Amplitude

Na AM, a **amplitude** (intensidade) da onda portadora varia de acordo com o sinal de áudio.

**AM-DSB (Double Sideband):** transmite a portadora + duas bandas laterais (superior e inferior). Menos eficiente em potência.

**AM-SSB (Single Sideband):** transmite apenas uma das bandas laterais (elimina a portadora e a outra banda lateral). Muito mais eficiente:
- **USB (Upper Sideband)**: banda lateral superior. Padrão para HF acima de 10 MHz e VHF/UHF
- **LSB (Lower Sideband)**: banda lateral inferior. Padrão para HF abaixo de 10 MHz (exceto 60m)

### FM – Modulação em Frequência

Na FM, a **frequência** da onda portadora varia de acordo com o sinal de áudio (a amplitude permanece constante).

- Muito resistente a ruídos e interferências
- Muito usada em VHF (144 MHz / 2 metros) e UHF (430–440 MHz / 70 cm)
- Padrão para repetidoras de VHF/UHF
- Ocupa mais largura de banda que SSB

### CW – Telegrafia (Código Morse)

CW (Continuous Wave) é a forma mais simples: a portadora é ligada e desligada para formar os pontos e traços do código Morse. É extremamente eficiente em potência e ocupa a menor largura de banda de todos os modos.

O código Morse ainda é amplamente usado no radioamadorismo por sua eficiência e pelo prazer que muitos operadores têm em sua prática.

**Exemplo de identificação em Morse:**
- P = · – – ·
- Y = – · – –
- 2 = · · – – –
- X = – · · –
- Y = – · – –
- Z = – – · ·

## 3.5 Demodulação

O receptor usa um circuito **demodulador** para extrair a mensagem da portadora. Cada tipo de modulação requer um demodulador correspondente:

- AM: detector de envoltória (diodo retificador + filtro)
- SSB: detector de produto (misturador com oscilador de resinserção de portadora – BFO)
- FM: discriminador de frequência ou detector de razão
- CW: oscilador de batimento (BFO) para tornar audível o silêncio/sinal

## 3.6 Batimento de frequências

Quando dois sinais de frequências diferentes passam por um **circuito não linear**, resultam dois novos sinais:
- **Soma**: f₁ + f₂
- **Diferença**: f₁ – f₂ (ou |f₁ – f₂|)

Esse fenômeno é a base dos **conversores de frequência** (misturadores/mixers) usados nos receptores para converter o sinal de rádio para uma frequência intermediária mais fácil de processar.

**Exemplo:**
- Sinal: 14.250 MHz (20 metros)
- Oscilador local: 14.000 MHz
- Frequência intermediária (IF): |14.250 – 14.000| = 250 kHz

Isso também explica por que emissões fora de frequência podem criar sinais espúrios que aparecem em frequências inesperadas quando interagem com outros sinais.

## 3.7 Medição de frequência

O **frequencímetro** é o instrumento que mede com precisão a frequência de um sinal. Os transceptores modernos possuem display de frequência digital integrado, mas para calibração e medições precisas, um frequencímetro externo pode ser necessário.

Em radioamadorismo, é especialmente importante garantir que você está transmitindo exatamente na frequência correta, para não interferir em outros serviços ou usuários.
