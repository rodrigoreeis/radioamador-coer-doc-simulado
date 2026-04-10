---
sidebar_position: 10
title: Eletrônica de RF Aplicada
slug: eletronica-rf
---

# Anexo 3, Seção 10 – Eletrônica de RF Aplicada

## 10.1 Diodos em RF

Os diodos têm aplicações específicas em circuitos de radiofrequência, aproveitando suas características de condução unidirecional e não-linearidade.

### Retificadores em Estágios de Detecção

O circuito mais clássico de aplicação de diodo em RF é o **detector de AM (detector de envoltória)**:

1. O sinal AM modulado chega ao detector
2. O diodo retifica o sinal (deixa passar apenas o semiciclo positivo)
3. Um circuito RC (capacitor + resistor) filtra a frequência de portadora, deixando apenas o sinal de áudio
4. O sinal de áudio recuperado vai para o amplificador de áudio

**Diodo de germânio vs. silício:**
Para detecção de AM, o diodo de germânio (queda de tensão ~0,2V) é preferível ao de silício (0,6V) em circuitos com sinais muito fracos, pois não precisa de tanta tensão para começar a conduzir.

### Diodo Varicap (Varactor)
Diodo projetado para funcionar como capacitor variável. Quando polarizado reversamente, a capacitância da junção varia com a tensão aplicada. Usado em:
- Osciladores controlados por tensão (VCO)
- Circuitos de sintonia eletrônica em rádios modernos
- Multiplicadores de frequência

### Diodo PIN
Diodo com camada intrínseca (undoped) entre o P e o N. Em RF, comporta-se como resistência variável controlada pela corrente CC. Usado em:
- Atenuadores eletrônicos
- Chaves de RF de alta velocidade
- Comutação de antenas

### Diodo Schottky
Diodo de barreira de metal com tempo de comutação extremamente rápido. Queda de tensão ~0,15–0,35V. Usado em:
- Mixers de RF (misturadores)
- Detectores de micro-ondas
- Circuitos de alta velocidade

## 10.2 Transistores em RF

O transistor é o componente central dos amplificadores de RF, osciladores e mixers.

### Amplificadores Fundamentais

Um amplificador de RF usa o transistor (bipolar BJT ou de efeito de campo FET/MOSFET) para aumentar a amplitude do sinal de RF sem (idealmente) alterar sua frequência ou forma.

**Estágios típicos em um transmissor:**
1. **Oscilador**: gera a frequência de RF com amplitude pequena
2. **Buffer/driver**: isola o oscilador dos estágios seguintes, impedindo que variações de carga alterem a frequência
3. **Amplificador intermediário**: aumenta a potência para excitar o estágio final
4. **Estágio final de potência (PA – Power Amplifier)**: aumenta a potência para o nível de saída desejado

### Ponto Q (Ponto de Operação)

O **ponto Q** (ponto quiescente) é o ponto de operação do transistor com sinal zero na entrada, definido pelos componentes de polarização DC.

O ponto Q determina:
- A **classe** do amplificador (A, B, AB, C)
- A distorção do sinal amplificado
- A eficiência do amplificador

**Classes de amplificação:**

| Classe | Condução | Eficiência | Distorção | Uso típico |
|--------|----------|-----------|-----------|-----------|
| **A** | 360° (ciclo completo) | ~25-30% | Baixa | Amplificadores de baixo ruído, áudio |
| **B** | 180° (meio ciclo) | ~50-60% | Média (crossover) | Estágios finais em push-pull |
| **AB** | Entre A e B | ~50-55% | Baixa a média | Amplificadores de áudio de alta fidelidade |
| **C** | < 180° | ~70-80% | Alta | Amplificadores de RF com filtros ressonantes |

Na **Classe C**, o transistor conduz por menos de meio ciclo, resultando em alta eficiência mas alta distorção. Porém, como o circuito de saída é um **circuito tanque ressonante** (LC na frequência de trabalho), ele reconstrói a senoide a partir dos pulsos distorcidos. Essa é a classe mais usada em amplificadores de RF de potência.

### Polarização DC

A polarização DC estabelece o ponto Q e garante que o transistor opere na região ativa (linear):

- Para BJT: a corrente de base (IB) define a corrente de coletor (IC = β × IB)
- Para FET/MOSFET: a tensão de gate-source (VGS) define a corrente de dreno (ID)

Uma polarização incorreta resulta em:
- Saturação: o transistor fica "ligado demais", perdendo ganho e gerando harmônicas
- Corte: o transistor fica "desligado", sem amplificação
- Ponto Q instável: varia com temperatura, danificando o circuito

:::info
Em amplificadores de potência de radioamador, a estabilização térmica é importante: o transistor esquenta, muda suas características e pode entrar em "runaway" (fuga térmica) se a polarização não for devidamente estabilizada com resistores de emissor ou circuitos de compensação.
:::
