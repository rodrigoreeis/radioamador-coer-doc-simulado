---
sidebar_position: 11
title: Limites de Potência
slug: limites-potencia
---

# Limites de Potência

## 10. Limites de Potência

### 10.1 Potência Média na Saída do Transmissor (por classe)

Os limites máximos de potência de saída do transmissor para cada classe de radioamador no Brasil são:

| Classe | Potência Máxima (saída do transmissor) |
|--------|----------------------------------------|
| **A** | **1.500 W** |
| **B** | **1.000 W** |
| **C** | **100 W** |

**Observações importantes:**
- Esses são os **limites máximos**. O bom operador usa a **menor potência necessária** para o contato.
- A potência de saída é medida na saída do transmissor (antes da linha de transmissão e da antena).
- Perdas no cabo coaxial e na antena reduzem a potência efetivamente irradiada.
- Em modos de pico (como SSB), a medição é feita como **PEP** (Peak Envelope Power – Potência de Pico do Envelope).

### 10.2 Limites de e.i.r.p. em Faixas Específicas

Para algumas faixas, o limite não é a potência de saída do transmissor, mas a **e.i.r.p.** (Effective Isotropic Radiated Power – Potência Radiada Isotrópica Equivalente). A e.i.r.p. considera o ganho da antena:

`e.i.r.p. = P_(TX) × G_(antena)`

(em Watts e ganho linear, ou em dBW + dBi em logarítmico)

| Faixa | Limite de e.i.r.p. | Observação |
|-------|-------------------|-----------|
| **135,7–137,8 kHz** | **1 W** | LF – faixa experimental |
| **472–479 kHz** | **5 W** | MF – faixa de 630 metros |
| **5.351,5–5.366,5 kHz** | **25 W** | HF – 60 metros; apenas Classe A |
| **2.300–2.450 MHz** | Conforme regulamento | Micro-ondas compartilhada |
| **3.400–3.500 MHz** | Conforme regulamento | Micro-ondas compartilhada |
| **47–47,2 GHz** | **100 W** | Micro-ondas de alta frequência |

### 10.3 Condição Especial: 472 a 479 kHz

A faixa de 472 a 479 kHz (também chamada de faixa de 630 metros) tem uma condição especial importante:

**Não pode causar interferência ao Serviço de Radionavegação Aeronáutica.**

Isso significa que, mesmo dentro do limite de 5W de e.i.r.p., se a operação na faixa de 630m estiver causando interferência a equipamentos de radionavegação aeronáutica (como NDPs – Non-Directional Beacons – usados na aviação), o radioamador deve parar a operação imediatamente.

**Por que essa restrição existe:**
A faixa de LF/MF é usada pela aviação para radionavegação. A segurança aérea tem prioridade sobre o radioamadorismo. O uso da faixa de 630m por radioamadores é uma alocação secundária, condicionada à não-interferência.

:::info
As faixas de micro-ondas (acima de 1 GHz) têm regras específicas que podem incluir limites de e.i.r.p. distintos por subfaixa. Consulte a tabela completa no Ato 3.448/2026 antes de operar nessas faixas.
:::

:::tip
Mesmo onde o regulamento permite potências muito altas (como 1.500W para a Classe A em HF), a boa prática operacional é usar somente o necessário. Um amplificador de 1.500W para falar com alguém a 200 km de distância é desproporcional e gera mais riscos de interferência.
:::
