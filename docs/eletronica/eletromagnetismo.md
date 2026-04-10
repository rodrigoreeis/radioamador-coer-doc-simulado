---
sidebar_position: 3
title: Eletromagnetismo
slug: eletromagnetismo
---

# Anexo 3, Seção 3 – Eletromagnetismo

## 3.1 Cargas Elétricas e Campo Elétrico

### Cargas Elétricas
A matéria é composta de átomos, que contêm:
- **Prótons**: carga positiva (+)
- **Elétrons**: carga negativa (–)
- **Nêutrons**: sem carga

A carga elétrica é medida em **Coulombs (C)**.

**Interação entre cargas:**
- Cargas de mesmo sinal se **repelem**
- Cargas de sinais opostos se **atraem**

Essa força de atração/repulsão é a base de toda a eletricidade e eletrônica.

### Campo Elétrico
O campo elétrico (E) é a perturbação do espaço criada por uma carga elétrica, que exerce força sobre outras cargas próximas.

**Intensidade do campo:** inversamente proporcional ao quadrado da distância:

`E ∝ (1)/(d^2)`

Isso significa que ao dobrar a distância de uma carga, a força elétrica cai para 1/4 do valor original. Esse comportamento é descrito pela **Lei de Coulomb**.

## 3.2 Campo Magnético: Origem e Características

O campo magnético surge de duas fontes:

1. **Ímãs permanentes**: materiais com domínios magnéticos alinhados (ferro, níquel, cobalto)
2. **Correntes elétricas**: qualquer corrente elétrica em movimento cria um campo magnético ao seu redor

**Características:**
- O campo magnético forma linhas fechadas (linhas de campo)
- O campo é mais intenso perto do condutor ou do ímã
- A direção do campo magnético criado por uma corrente segue a **regra da mão direita**: aponte o polegar na direção da corrente; os dedos curvados indicam o sentido das linhas de campo

## 3.3 Relação entre Corrente Elétrica e Campo Magnético

Essa relação é o coração do eletromagnetismo e a base de transformadores, motores e geradores elétricos:

### Corrente → Campo Magnético
Uma corrente elétrica em um fio (ou bobina) cria um campo magnético ao seu redor. Quanto maior a corrente, mais intenso o campo.

### Variação de Campo → Tensão Induzida (Lei de Faraday)
Quando o campo magnético **varia** (aumenta ou diminui), ele induz uma **força eletromotriz (fem)** em um condutor próximo. Essa é a **indução eletromagnética**.

**Aplicação prática – Transformador:**
- Um transformador tem duas bobinas: primária e secundária
- A corrente alternada no primário cria um campo magnético variável
- O campo variável induz tensão no secundário
- A relação de tensões é proporcional à relação de espiras:

`(V_1)/(V_2) = (N_1)/(N_2)`

Onde N₁ e N₂ são o número de espiras das bobinas.

**No radioamadorismo:** transformadores são usados em fontes de alimentação, casadores de impedância (baluns) e transformadores de RF.

## 3.4 Indutância e Sua Importância

### Autoindutância
Quando a corrente em uma bobina muda, o campo magnético criado por ela também muda. Esse campo variável induz uma tensão na **própria bobina**, que se opõe à variação de corrente. Essa propriedade é a **autoindutância (L)**.

A tensão induzida é:
`V_L = L × (dI)/(dt)`

Onde dI/dt é a taxa de variação da corrente.

Isso explica por que os indutores se opõem a variações rápidas de corrente (e, portanto, a sinais de alta frequência).

### Indutância Mútua
Quando duas bobinas estão próximas, o campo magnético de uma pode induzir tensão na outra. Essa é a **indutância mútua (M)**.

O **coeficiente de acoplamento (k)** varia de 0 (sem acoplamento) a 1 (acoplamento perfeito). Na prática, k < 1 sempre, pois nem todo o fluxo magnético de uma bobina atravessa a outra.

`M = k × sqrt(L_1 × L_2)`

**Aplicação:** O coeficiente de acoplamento é importante no design de transformadores de RF e filtros acoplados. Um k alto proporciona mais transferência de energia; um k baixo proporciona mais seletividade.
