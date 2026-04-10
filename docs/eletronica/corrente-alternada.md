---
sidebar_position: 5
title: Teoria de Circuitos em Corrente Alternada (CA)
slug: corrente-alternada
---

# Anexo 3, Seção 5 – Teoria de Circuitos em Corrente Alternada (CA)

## 5.1 Noções de CA e Tensão Alternada

### Corrente Contínua (CC / DC)
A corrente flui sempre no mesmo sentido. A tensão é constante (ou varia lentamente). Exemplos: baterias, fontes de alimentação reguladas.

### Corrente Alternada (CA / AC)
A corrente inverte periodicamente o sentido de fluxo. A tensão varia como uma senoide. Exemplos: tomada elétrica doméstica (60 Hz no Brasil), sinal de RF de um transmissor.

**Por que CA é importante em rádio?**
Os sinais de RF são alternados, com frequências de kHz a GHz. O comportamento de capacitores e indutores com CA é radicalmente diferente de seu comportamento com CC.

## 5.2 Reatância Indutiva (XL) e Reatância Capacitiva (XC)

### Reatância Indutiva (XL)
A oposição de um indutor à corrente alternada. Aumenta com a frequência:

`X_L = 2π f L`

Onde:
- XL = reatância indutiva em Ω
- f = frequência em Hz
- L = indutância em Henrys

**Regra prática:** Quanto maior a frequência, maior a reatância do indutor → o indutor bloqueia sinais de alta frequência.

### Reatância Capacitiva (XC)
A oposição de um capacitor à corrente alternada. Diminui com a frequência:

`X_C = (1)/(2π f C)`

Onde:
- XC = reatância capacitiva em Ω
- f = frequência em Hz
- C = capacitância em Farads

**Regra prática:** Quanto maior a frequência, menor a reatância do capacitor → o capacitor deixa passar sinais de alta frequência e bloqueia CC.

**Ambas são medidas em Ohms (Ω)**, como a resistência, mas não dissipam energia (ao contrário dos resistores).

## 5.3 Impedância em Circuitos CA

A **impedância (Z)** é a oposição total de um circuito à passagem de corrente alternada. Ela combina resistência e reatâncias:

`Z = sqrt(R^2 + (X_L - X_C)^2)`

A impedância é medida em Ω e é um número complexo (tem parte real e parte imaginária).

**Casamento de impedâncias:**
Para máxima transferência de potência, a impedância da fonte deve ser igual à impedância da carga. No radioamadorismo:
- A impedância padrão de coaxial é **50 Ω**
- A impedância de um dipolo ressonante é ~73 Ω
- O casador de impedância (ATU, balun) realiza a adaptação

## 5.4 Análise de Circuitos RC e RL

### Circuito RC (Resistor + Capacitor)

**Fase:** Em um capacitor, a corrente está adiantada 90° em relação à tensão. O capacitor "deixa a corrente passar antes da tensão".

**Constante de tempo (τ):**
`τ = R × C`

Após um tempo τ, o capacitor carrega até ~63% da tensão final. Após 5τ, está praticamente completamente carregado.

**Aplicações:**
- Filtros passa-baixas e passa-altas
- Circuitos de temporização
- Desacoplamento (bypass)

### Circuito RL (Resistor + Indutor)

**Fase:** Em um indutor, a corrente está atrasada 90° em relação à tensão. O indutor "resiste à variação de corrente".

**Constante de tempo:**
`τ = (L)/(R)`

**Aplicações:**
- Filtros de RF
- Choques de RF (RF chokes) para bloquear sinais de alta frequência em linhas de CC
- Circuitos de casamento de impedância

## 5.5 Circuitos RLC e Ressonância

Quando um circuito contém resistor, indutor e capacitor, pode atingir a **ressonância**: o estado em que XL = XC.

`X_L = X_C → f_r = (1)/(2πsqrt(LC))`

Na frequência de ressonância:

| Tipo de circuito | Comportamento na ressonância |
|-----------------|------------------------------|
| **RLC Série** | Impedância **mínima** (Z = R); corrente máxima |
| **RLC Paralelo** | Impedância **máxima**; corrente mínima da fonte |

**Aplicações no radioamadorismo:**
- Circuitos tanque de osciladores (determinam a frequência)
- Filtros de faixa estreita (selectividade)
- Casadores de antena (ATU)
- Circuitos sintonizadores de receptores

## 5.6 Potência em CA

### Potência Aparente (S)
`S = V × I    (em VA – volt-ampère)`

### Potência Ativa (P)
A potência efetivamente consumida/convertida:
`P = V × I × cosφ    (em W – watts)`

Onde φ é o ângulo de fase entre tensão e corrente.

### Fator de Potência (FP)
`FP = cosφ`

- FP = 1 (circuito puramente resistivo): toda a potência aparente é ativa
- FP < 1 (circuito com reatâncias): parte da potência "vai e volta" sem ser consumida

**Relevância para radioamadorismo:**
Em RF, o fator de potência está relacionado à eficiência do casamento de impedâncias. Um casamento perfeito (Z fonte = Z carga) resulta em máxima transferência de potência ativa.
