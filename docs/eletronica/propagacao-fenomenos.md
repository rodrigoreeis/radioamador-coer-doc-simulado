---
sidebar_position: 9
title: Propagação de Ondas e Fenômenos
slug: propagacao-fenomenos
---

# Anexo 3, Seção 9 – Propagação de Ondas e Fenômenos

## 9.1 Ressonância

A **ressonância** ocorre em um sistema quando ele é excitado na sua **frequência natural** (ou frequência de ressonância).

Em um circuito RLC, a ressonância ocorre quando:
`X_L = X_C → f_r = (1)/(2πsqrt(LC))`

**Na frequência de ressonância:**
- A amplitude da oscilação é **máxima**
- Em circuito série: impedância mínima, corrente máxima
- Em circuito paralelo: impedância máxima, corrente da fonte mínima

**Aplicações:**
- Osciladores (geram a frequência de RF do transmissor)
- Filtros seletivos (passam apenas a frequência de ressonância)
- Antenas (ressonantes em λ/2 ou λ/4 da frequência de trabalho)
- Circuitos sintonizadores de receptores

**Fator Q (qualidade):**
O fator Q indica a seletividade do circuito ressonante:
- Q alto: banda estreita, muito seletivo
- Q baixo: banda larga, menos seletivo

## 9.2 Interferência e Superposição

A **superposição** é o princípio pelo qual, quando duas ou mais ondas se propagam no mesmo meio ao mesmo tempo, o resultado é a soma algébrica das amplitudes individuais.

### Interferência Construtiva
Quando duas ondas estão **em fase** (mesma frequência e diferença de fase = 0° ou múltiplos de 360°), suas amplitudes se somam:

`A_(resultante) = A_1 + A_2`

O sinal resultante é mais forte que qualquer um dos componentes.

**Aplicação:** Arrays de antenas (diversas antenas alimentadas em fase) para aumentar o ganho.

### Interferência Destrutiva
Quando duas ondas estão **em oposição de fase** (diferença de fase = 180°), as amplitudes se subtraem:

`A_(resultante) = |A_1 - A_2|`

Se as amplitudes forem iguais, o sinal resultante é zero (cancelamento completo).

**Aplicação:** Filtros de cancelamento de interferência, supressão de ruído.

### Importância no Radioamadorismo

O fenômeno de interferência afeta a propagação:
- Sinais que chegam por múltiplos caminhos (reflexões) podem se somar ou se cancelar (**fading** ou desvanecimento)
- O **desvanecimento seletivo** em frequência ocorre quando certas frequências são canceladas por interferência destrutiva entre os múltiplos percursos

## 9.3 Ondas Estacionárias

As **ondas estacionárias** formam-se quando uma onda incidente e uma onda refletida (de mesma frequência) se superpõem no mesmo meio.

**Formação:**
Quando a impedância da linha de transmissão não casa com a impedância da antena, parte do sinal é refletida. A superposição da onda incidente com a refletida cria um padrão estacionário:

- **Nós**: pontos de cancelamento (amplitude mínima = zero)
- **Ventres (antinós)**: pontos de soma construtiva (amplitude máxima)

**A ROE/SWR** quantifica a razão entre o máximo e o mínimo de tensão (ou corrente) na linha:

`ROE = \fracV_(max)V_(min)`

- ROE = 1: sem onda refletida, sem ondas estacionárias (casamento perfeito)
- ROE = ∞: reflexão total (circuito aberto ou curto-circuito)

**Efeito:** Ondas estacionárias aumentam as perdas na linha (o sinal "vai e volta" em vez de chegar todo à antena) e podem danificar o transmissor.

## 9.4 Polarização de Ondas Eletromagnéticas

A **polarização** é a orientação do campo elétrico da onda eletromagnética em propagação.

### Polarização Linear
O campo elétrico oscila em um único plano:
- **Horizontal**: campo elétrico no plano horizontal (dipolo horizontal)
- **Vertical**: campo elétrico no plano vertical (dipolo vertical, antena de carro)

Para melhor comunicação, as antenas devem ter a **mesma polarização**. Polarizações cruzadas (horizontal vs vertical) resultam em perda de até 20 dB.

### Polarização Circular
O vetor do campo elétrico gira continuamente (como um parafuso). Pode ser:
- **Circular à direita (RHCP)**: rotação horária
- **Circular à esquerda (LHCP)**: rotação anti-horária

**Aplicações:**
- Comunicações via satélite (a polarização da onda não muda com a rotação do satélite)
- Comunicações EME (a reflexão na lua inverte RHCP para LHCP e vice-versa)

### Polarização Elíptica
Caso geral entre linear e circular. O campo elétrico descreve uma elipse.

## 9.5 Oscilações Forçadas, Excitação e Amortecimento

### Oscilações Livres e Amortecidas
Um circuito LC (sem resistência) oscila indefinidamente na frequência de ressonância (oscilação livre). Na prática, sempre há resistência, que dissipa energia e a amplitude diminui exponencialmente (**amortecimento**).

A taxa de amortecimento depende do fator Q:
- Q alto: amortecimento lento (oscilação persiste por muitos ciclos)
- Q baixo: amortecimento rápido

### Oscilações Forçadas
Quando um sistema ressonante é excitado por uma fonte externa com frequência diferente da natural, ele oscila na frequência da fonte (não na natural). Esse é o princípio do **oscilador controlado externamente** (como um cristal de quartzo que força o oscilador a operar na frequência do cristal).

### Excitação em Ressonância
Quando a frequência da fonte coincide com a frequência natural do sistema, ocorre ressonância: a amplitude de oscilação aumenta até ser limitada pelas perdas do sistema (resistência). Em sistemas de alta Q, a amplitude pode ser muito grande.

**No radioamadorismo:**
- O oscilador do transmissor é um circuito LC (ou cristal) excitado para gerar a frequência de RF
- O circuito sintonizador do receptor é excitado pelo sinal de RF recebido e seleciona a frequência de interesse por ressonância
