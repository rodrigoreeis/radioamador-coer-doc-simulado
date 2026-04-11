---
sidebar_position: 2
title: Componentes Eletrônicos e Propriedades dos Materiais
slug: componentes-eletronicos
description: >-
  Conheça os principais componentes eletrônicos usados no radioamadorismo: resistores, capacitores, indutores, transistores e circuitos integrados.
---
# Anexo 3, Seção 2 – Componentes Eletrônicos e Propriedades dos Materiais

## 2.1 Resistores: Função e Utilização

Os **resistores** são componentes que oferecem resistência controlada à passagem de corrente elétrica. Suas funções principais são:

- **Limitar corrente**: evitar que correntes excessivas danifiquem outros componentes
- **Dividir tensão**: criar tensões intermediárias em divisores de tensão
- **Dissipar potência**: converter energia elétrica em calor de forma controlada
- **Polarizar circuitos**: definir o ponto de operação de transistores e outros semicondutores

**Parâmetros principais:**
- Resistência em Ω (ohms), kΩ (kilohms) ou MΩ (megaohms)
- Potência nominal em W (resistor de 1/4W, 1/2W, 1W, 5W, etc.)
- Tolerância (precisão): ±1%, ±5%, ±10%

## 2.2 Código de Cores de Resistores

Resistores de filme de carbono e filme metálico usam um **código de cores** de 4 ou mais faixas para indicar o valor:

### Código de 4 Faixas:

| Posição | Função |
|---------|--------|
| 1ª faixa | Primeiro dígito significativo |
| 2ª faixa | Segundo dígito significativo |
| 3ª faixa | Multiplicador (número de zeros) |
| 4ª faixa | Tolerância |

### Tabela de Cores:

| Cor | Dígito | Multiplicador | Tolerância |
|-----|--------|--------------|-----------|
| Preto | 0 | × 1 | — |
| Marrom | 1 | × 10 | ±1% |
| Vermelho | 2 | × 100 | ±2% |
| Laranja | 3 | × 1.000 | — |
| Amarelo | 4 | × 10.000 | — |
| Verde | 5 | × 100.000 | ±0,5% |
| Azul | 6 | × 1.000.000 | ±0,25% |
| Violeta | 7 | — | ±0,1% |
| Cinza | 8 | — | — |
| Branco | 9 | — | — |
| Dourado | — | × 0,1 | ±5% |
| Prateado | — | × 0,01 | ±10% |

**Exemplo:**
Resistor: Amarelo – Violeta – Vermelho – Dourado
= 4 – 7 – ×100 – ±5%
= 4.700 Ω = 4,7 kΩ ±5%

## 2.3 Associação de Resistores em Série e em Paralelo

### Resistores em Série
Todos os resistores ficam no mesmo caminho de corrente. A corrente é a mesma em todos; as tensões se somam.

`R_(eq) = R_1 + R_2 + R_3 + ...`

**Exemplo:** R₁ = 100 Ω, R₂ = 220 Ω, R₃ = 330 Ω em série:
`R_(eq) = 100 + 220 + 330 = 650  Ω`

### Resistores em Paralelo
Todos os resistores compartilham os mesmos terminais. A tensão é a mesma em todos; as correntes se somam.

`(1)/(R_(eq)) = (1)/(R_1) + (1)/(R_2) + (1)/(R_3) + ...`

**Propriedade:** A resistência equivalente em paralelo é sempre **menor** que a menor resistência individual.

**Caso especial – Dois resistores em paralelo:**
`R_(eq) = (R_1 × R_2)/(R_1 + R_2)`

**Caso especial – n resistores iguais em paralelo:**
`R_(eq) = (R)/(n)`

**Exemplo:** Quatro resistores de 100 Ω em paralelo:
`R_(eq) = (100)/(4) = 25  Ω`

## 2.4 Capacitores: Função, Tipos Básicos e Aplicações

O **capacitor** é um componente que armazena energia na forma de campo elétrico, entre duas placas condutoras separadas por um material isolante (dielétrico).

**Capacitância (C)**: medida em **Farads (F)**, geralmente em subunidades:
- μF (microfarad) = 10⁻⁶ F
- nF (nanofarad) = 10⁻⁹ F
- pF (picofarad) = 10⁻¹² F

`C = (Q)/(V)`

**Funções:**
- Armazenar energia temporariamente
- **Bloquear corrente contínua** (CC) enquanto deixa passar sinais alternados (CA)
- Filtrar ruídos (filtros de desacoplamento)
- Fazer parte de circuitos ressonantes (junto com indutores)
- Temporizadores (circuitos RC)

**Tipos comuns:**
- Cerâmico: alta frequência, valores pequenos, não polarizado
- Eletrolítico: alta capacitância, polarizado (tem + e –), baixa frequência
- Polyester/film: valores intermediários, boa estabilidade

## 2.5 Indutores: Noção de Indutância e Aplicações

O **indutor** (ou bobina) é um componente que armazena energia na forma de campo magnético quando percorrido por corrente.

**Indutância (L)**: medida em **Henrys (H)**, geralmente em subunidades:
- mH (milihenry) = 10⁻³ H
- μH (microhenry) = 10⁻⁶ H
- nH (nanohenry) = 10⁻⁹ H

**Autoindutância:** a propriedade do indutor de se opor a variações de corrente. Quando a corrente muda, o campo magnético muda e induz uma tensão contrária à variação.

**Indutância mútua:** quando dois indutores próximos compartilham parte do campo magnético, uma variação de corrente em um induz tensão no outro. Esse é o princípio do **transformador**.

**Funções no radioamadorismo:**
- Filtros de RF (junto com capacitores)
- Circuitos ressonantes (osciladores e filtros de faixa)
- Transformadores de impedância (acoplamento entre estágios)
- Baluns e choques de RF
- Antenas (bobinas de carregamento para antenas curtas)

## 2.6 Diodos: Função Retificadora e Usos Básicos

O **diodo** é um semicondutor que **conduz corrente em apenas uma direção**. É formado por uma junção PN (material tipo P e tipo N).

**Funcionamento:**
- **Polarização direta** (ânodo + e cátodo –): o diodo conduz. Queda de tensão típica: 0,6–0,7 V (silício)
- **Polarização reversa** (ânodo – e cátodo +): o diodo não conduz (bloqueia)

**Usos principais:**
- **Retificador**: converte CA em CC (em fontes de alimentação)
- **Detector de AM**: extrai o sinal de áudio de um sinal AM
- **Diodo Zener**: regulação de tensão (mantém tensão constante)
- **LED**: emite luz quando polarizado diretamente

## 2.7 Transistores: Chaveamento e Amplificação

O **transistor bipolar** (BJT) tem três terminais: **Base (B)**, **Coletor (C)** e **Emissor (E)**.

**Princípio:** A corrente de **base** controla a corrente de **coletor**. Uma pequena corrente na base permite (ou bloqueia) uma corrente muito maior no coletor.

**Ganho de corrente (β ou hFE):**
`I_C = β × I_B`

Onde β típico varia de 20 a 500.

**Modos de operação:**
- **Chaveamento**: transistor saturado (ligado) ou em corte (desligado) – usado em circuitos digitais e PWM
- **Amplificação**: transistor na região ativa, amplificando sinais analógicos

**Ponto Q (ponto de operação):** O ponto de polarização DC do transistor, escolhido pelo projetista para garantir amplificação linear sem distorção.

## 2.8 Propriedades dos Materiais

### Condutores
Materiais com muitos elétrons livres, facilitando o fluxo de corrente:
- **Cobre (Cu)**: melhor relação condutividade/custo. Usado em fios, cabos, PCBs.
- **Alumínio (Al)**: condutividade menor que o cobre, mas mais leve. Usado em elementos de antena.
- **Prata (Ag)**: melhor condutor, mas caro. Usado em contatos e revestimentos especiais.

### Isolantes
Materiais com poucos elétrons livres, que resistem ao fluxo de corrente:
- **Cerâmica**: suporta altas temperaturas e tensões. Usado em isoladores de antena e capacitores.
- **Borracha/PVC**: flexível, usado no revestimento de cabos e fios.
- **Teflon (PTFE)**: excelente isolante, estável em RF, usado em cabos coaxiais de alta performance.
- **FR4 (fibra de vidro)**: material das placas de circuito impresso (PCBs).

### Semicondutores
Materiais com condutividade intermediária, que pode ser controlada:
- **Silício (Si)**: material padrão da eletrônica moderna. Diodos, transistores, CIs.
- **Germânio (Ge)**: mais antigo, menor queda de tensão na junção (0,2V vs 0,6V do Si). Ainda usado em detectores de RF de alta sensibilidade.
- **GaAs (Arseneto de gálio)**: usado em transistores de RF de alta frequência (micro-ondas).
