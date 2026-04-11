---
sidebar_position: 2
title: Antenas
slug: antenas
description: >-
  Guia completo sobre antenas para radioamador: dipolo, yagi, vertical, ganho, polarização e dicas de instalação segura.
---
# Anexo 1, Seção 2 – Antenas

## 2.1 Função da antena e da linha

A antena é o componente que realiza a conversão de energia elétrica em ondas eletromagnéticas (durante a transmissão) e de ondas eletromagnéticas em energia elétrica (durante a recepção).

A **linha de transmissão** (geralmente cabo coaxial) transporta a energia entre o transceptor e a antena com o mínimo de perda possível. Uma antena eficiente com uma linha ruim resulta em desempenho ruim.

**Princípio da reciprocidade:** uma antena que irradia bem em determinada direção também recebe bem dessa direção. O projeto de antena para transmissão e recepção é o mesmo.

## 2.2 Comprimento de onda e tamanho da antena

O tamanho físico de uma antena está diretamente relacionado ao comprimento de onda da frequência de operação:

**Fórmula fundamental:**
`λ ≈ (300)/(f)`

Onde:
- λ = comprimento de onda em metros
- f = frequência em MHz

**Exemplos:**
- 7 MHz (40 metros): λ ≈ 300/7 ≈ 42,8 m
- 144 MHz (2 metros): λ ≈ 300/144 ≈ 2,08 m
- 435 MHz (70 cm): λ ≈ 300/435 ≈ 0,69 m

**Tipos de antena por comprimento:**

| Tipo | Comprimento | Características |
|------|-------------|-----------------|
| Dipolo de meia onda (λ/2) | λ/2 | Antena de referência, omnidirecional no plano horizontal, impedância ≈ 73 Ω |
| Monopolo de quarto de onda (λ/4) | λ/4 | Requer plano de terra, omnidirecional, impedância ≈ 36 Ω |
| Yagi | Varia | Direcional, com elementos parasitas (refletor + diretores) |
| Loop magnética | ≈ λ/10 | Compacta, menor eficiência, útil em espaços limitados |

## 2.3 Ganho e diretividade

O **ganho** de uma antena é a capacidade de concentrar energia em determinada direção, comparado a uma antena de referência (geralmente um dipolo ou um isotrópico).

O ganho é expresso em **dBd** (relativo ao dipolo) ou **dBi** (relativo ao isotrópico). A conversão é: dBi = dBd + 2,15.

### Antenas Omnidirecionais
Irradiam de forma aproximadamente uniforme em todas as direções (no plano horizontal). Úteis quando você não sabe de onde virão as estações ou quando quer alcance em múltiplas direções.

Exemplos: dipolo horizontal, vertical λ/4 com plano de terra.

### Antenas Direcionais
Concentram a energia em uma ou poucas direções, aumentando o alcance naquela direção específica. A desvantagem é a necessidade de apontar a antena para a estação desejada.

A antena **Yagi-Uda** é o exemplo mais comum: tem um elemento ativo (dipolo), um refletor (atrás) e um ou mais diretores (à frente). O ganho típico de uma Yagi de 3 elementos é 7–8 dBd.

## 2.4 Onda estacionária e casamento de impedância (ROE/SWR)

Quando a impedância da antena não é igual à impedância da linha de transmissão, parte da energia transmitida é **refletida** de volta ao transmissor. Isso cria um padrão de **ondas estacionárias** na linha.

A **ROE** (Razão de Ondas Estacionárias) ou **SWR** (Standing Wave Ratio) mede esse descasamento:

| ROE | Significado | Potência refletida |
|-----|-------------|-------------------|
| 1:1 | Casamento perfeito | 0% |
| 1,5:1 | Bom (aceitável) | ≈ 4% |
| 2:1 | Limite razoável | ≈ 11% |
| 3:1 | Problemático | ≈ 25% |
| 5:1 ou mais | Muito ruim | Pode danificar o transmissor |

**Como melhorar a ROE:**
- Ajustar o comprimento da antena para a frequência de trabalho
- Usar um casador de impedância (tuner ou ATU)
- Verificar conexões e cabo coaxial (fissuras, umidade)

:::warning
Um transmissor moderno geralmente tem proteção automática que reduz a potência quando a ROE é alta. Isso protege o transceptor mas reduz a eficiência da estação.
:::

## 2.5 Antena artificial ou fantasma (carga fictícia)

A **antena fantasma** (dummy load ou carga fictícia) é uma resistência não indutiva de 50 Ω capaz de dissipar toda a potência do transmissor como calor, sem irradiar sinal algum.

**Para que serve:**
- Testar e ajustar o transmissor sem causar interferência
- Medir a potência de saída do transmissor
- Aquecimento do transmissor durante testes prolongados

**Quando usar:**
- Durante ajustes de potência e modulação
- Ao verificar o funcionamento do transmissor após manutenção
- Quando precisar transmitir para testar sem a antena conectada

**Construção:** pode ser fabricada com resistores de potência em paralelo (para atingir 50 Ω e a potência desejada) montados em recipiente metálico com dissipação de calor adequada.

:::tip
A carga fantasma é um acessório essencial para qualquer radioamador que queira fazer testes responsáveis. Use-a sempre que for ajustar seu transmissor.
:::
