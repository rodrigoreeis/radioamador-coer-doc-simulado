---
sidebar_position: 8
title: Antenas e Teoria de Ondas Aplicadas às Antenas
slug: antenas-teoria-ondas
---

# Anexo 3, Seção 8 – Antenas e Teoria de Ondas Aplicadas às Antenas

## 8.1 Conceitos Básicos de Antenas

Uma antena é um dispositivo que converte energia elétrica em ondas eletromagnéticas (durante a transmissão) e ondas eletromagnéticas em energia elétrica (durante a recepção).

O desempenho de uma antena depende de três fatores principais:

1. **Tipo de antena**: a geometria determina o padrão de radiação e a impedância
2. **Comprimento físico**: relacionado ao comprimento de onda da frequência de operação
3. **Polarização**: a orientação do campo elétrico da onda eletromagnética

## 8.2 Tipos Básicos e Polarização

### Dipolo

O dipolo de meia onda (λ/2) é a antena mais fundamental e é usada como referência para medir o ganho de outras antenas.

**Dipolo horizontal:**
- Polarização: **linear horizontal**
- O campo elétrico está no plano horizontal
- Padrão de radiação: figura de 8 no plano horizontal, omnidirecional no plano vertical perpendicular

**Dipolo vertical:**
- Polarização: **linear vertical**
- O campo elétrico está no plano vertical
- Padrão de radiação: omnidirecional no plano horizontal (toroidal)

**Impedância:** ~73 Ω em ressonância (λ/2)

**Aplicações:** Amplamente usado em HF. Pode ser colocado na horizontal, vertical ou inclinado. É a base para muitas outras antenas.

### Antena Yagi-Uda

A antena Yagi (ou Yagi-Uda, em homenagem aos seus inventores japoneses) é uma antena direcional composta por:

- **Elemento ativo (driven element)**: o dipolo que é alimentado pelo cabo coaxial
- **Refletor**: elemento passivo atrás do dipolo (ligeiramente maior), que reflete a energia para frente
- **Diretores**: elementos passivos à frente do dipolo (ligeiramente menores), que concentram a energia na direção de apontamento

**Polarização:** Linear. A direção da polarização é determinada pela orientação dos elementos:
- Elementos horizontais → polarização linear horizontal
- Elementos verticais → polarização linear vertical

**Ganho típico:**
- Yagi de 3 elementos: ~7–8 dBd
- Yagi de 5 elementos: ~10 dBd
- Yagi de 10 elementos: ~15 dBd

**Aplicações:** VHF/UHF para DX e satélites, EME (Earth-Moon-Earth), ligações ponto-a-ponto.

### Antenas de Quadro (Loop)

Antenas de quadro fechado que formam um contorno geométrico (quadrado, circular, losango).

**Polarização:** Linear, perpendicular ao plano do quadro.

**Tipos:**
- **Loop magnética** (pequena): perímetro menor que λ/10. Compacta, menor eficiência, mas pode ser usada em locais com pouco espaço.
- **Loop de onda completa (quad)**: perímetro igual a λ (1 comprimento de onda completo). Mais eficiente, ganho comparável ao dipolo ou maior.

**Características da loop magnética:**
- Muito seletiva em frequência (alta Q)
- Boa para recepção em ambientes ruidosos (cancela parte do ruído eletromagnético)
- Requer ajuste preciso de sintonia

## 8.3 Ganho e Diretividade (Noções)

### Ganho
O ganho de uma antena é a relação entre a intensidade de sinal irradiado em uma direção específica versus o que seria irradiado por uma antena de referência (dipolo ou isótropo) com a mesma potência de entrada.

Expresso em:
- **dBd**: decibels relativos ao dipolo
- **dBi**: decibels relativos ao isotrópico (antena teórica que irradia igualmente em todas as direções)
- Relação: dBi = dBd + 2,15

**Importante:** O ganho não "cria" energia. Ele redistribui a energia disponível, concentrando mais em certas direções e menos em outras. Uma antena com 3 dBd de ganho dobra a potência na direção de máximo (equivalente a duplicar a potência do transmissor).

### Antenas Direcionais
Concentram a energia irradiada em uma direção específica. Exemplos: Yagi, paraboloidal (dish), corner reflector.

**Vantagens:**
- Maior alcance na direção de apontamento
- Menor interferência de/para outras direções
- Melhor relação sinal-ruído

**Desvantagem:**
- Requerem apontamento (rotator mecânico para HF/VHF)
- Não recebem de outras direções

### Antenas Omnidirecionais
Irradiam de forma aproximadamente uniforme em todas as direções (no plano de interesse). Exemplos: dipolo vertical, ground plane.

**Vantagens:**
- Não requerem apontamento
- Recebem de qualquer direção

**Desvantagem:**
- Ganho menor (a energia é distribuída em todas as direções)

:::tip
No radioamadorismo, a escolha entre direcional e omnidirecional depende do uso:
- **Repetidoras e operação local**: omnidirecional (não sabe de onde virão as chamadas)
- **DX em HF**: direcional (maximiza o alcance na direção desejada)
- **EME (lua)**: Yagi de alto ganho ou array de Yagis (a lua está em uma direção específica)
:::
