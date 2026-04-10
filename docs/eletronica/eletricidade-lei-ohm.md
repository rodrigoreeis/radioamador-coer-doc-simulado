---
sidebar_position: 1
title: Conceitos Básicos de Eletricidade e Lei de Ohm
slug: eletricidade-lei-ohm
---

# Anexo 3, Seção 1 – Conceitos Básicos de Eletricidade e Lei de Ohm

## 1.1 Grandezas Elétricas Fundamentais

### Corrente Elétrica (I)
O fluxo de cargas elétricas (elétrons) por um condutor. É medida em **Ampères (A)**.

- 1 A = 1 Coulomb por segundo
- Corrente contínua (CC ou DC): flui sempre no mesmo sentido
- Corrente alternada (CA ou AC): inverte o sentido periodicamente

### Tensão Elétrica (V)
A diferença de potencial elétrico entre dois pontos. É medida em **Volts (V)**.

- Também chamada de diferença de potencial (ddp) ou força eletromotriz (fem)
- É a "pressão" que empurra os elétrons pelo circuito
- Exemplos: bateria de carro 12V, tomada residencial 127V ou 220V

### Resistência Elétrica (R)
A oposição que um material oferece à passagem de corrente. É medida em **Ohms (Ω)**.

- Condutores perfeitos: R ≈ 0 Ω
- Isolantes: R muito alta
- Resistores: valores definidos e controlados

### Potência Elétrica (P)
A taxa de transformação de energia elétrica por unidade de tempo. É medida em **Watts (W)**.

- 1 W = 1 Joule por segundo
- 1 kW = 1.000 W

## 1.2 Lei de Ohm

A Lei de Ohm relaciona tensão, corrente e resistência em um circuito resistivo:

`I = (V)/(R)`

Das outras formas:
`V = R × I     R = (V)/(I)`

**Onde:**
- I = corrente em Ampères (A)
- V = tensão em Volts (V)
- R = resistência em Ohms (Ω)

**Exemplo prático:**
Uma resistência de 100 Ω conectada a uma fonte de 12 V: qual é a corrente?

`I = (V)/(R) = (12)/(100) = 0,12  A = 120  mA`

:::tip[Truque para memorizar]
Use o triângulo VIR: cubra a grandeza que quer calcular e as outras duas mostram a operação:
- Cobrir V → V = R × I
- Cobrir I → I = V/R
- Cobrir R → R = V/I
:::

## 1.3 Potência Elétrica em Circuitos CC

`P = V × I`

Outras formas equivalentes (usando a Lei de Ohm):
`P = R × I^2     P = (V^2)/(R)`

**Exemplo 1:** Uma lâmpada conectada a 110 V consome 2,5 A de corrente:
`P = V × I = 110 × 2,5 = 275  W`

**Exemplo 2:** Um chuveiro elétrico de 2 kW conectado a 200 V. Qual é a resistência?
`P = (V^2)/(R) → R = (V^2)/(P) = (200^2)/(2000) = (40000)/(2000) = 20  Ω`

A corrente consumida:
`I = (P)/(V) = (2000)/(200) = 10  A`

## 1.4 Efeito Joule (Noções Básicas)

Quando uma corrente elétrica passa por um resistor (ou qualquer elemento resistivo), parte da energia elétrica é convertida em **calor**. Esse fenômeno é chamado **Efeito Joule**.

A energia dissipada como calor:
`E = P × t = V × I × t`

**Implicações práticas no radioamadorismo:**
- Resistores de potência esquentam durante operação – escolher resistores com potência adequada
- Cabos muito finos têm resistência significativa e dissipam calor
- Amplificadores de potência geram calor considerável – requerem dissipadores e ventilação
- A carga fantasma converte toda a potência RF em calor – use uma potente o suficiente para a potência do transmissor

## 1.5 Leis de Kirchhoff

As leis de Kirchhoff complementam a Lei de Ohm para análise de circuitos complexos:

### Lei das Malhas (LKT – Lei de Kirchhoff das Tensões)
O somatório algébrico das tensões em qualquer malha fechada de um circuito é igual a zero:

`Σ V = 0`

**Interpretação:** Em um circuito fechado, a soma das tensões de subida (fontes) é igual à soma das tensões de queda (resistores).

### Lei dos Nós (LKC – Lei de Kirchhoff das Correntes)
A soma das correntes que chegam a um nó é igual à soma das correntes que saem:

`Σ I_(entrada) = Σ I_(saída)`

**Interpretação:** A corrente não "some" em nenhum ponto do circuito. Toda corrente que entra em um nó deve sair.

**Exemplo simples (divisor de tensão):**
Dois resistores em série com uma fonte de 12 V:
- R₁ = 8 Ω, R₂ = 4 Ω
- Corrente total: I = 12/(8+4) = 1 A
- Tensão em R₁: V₁ = 1 × 8 = 8 V
- Tensão em R₂: V₂ = 1 × 4 = 4 V
- Verificação (LKT): 12 – 8 – 4 = 0 ✓
