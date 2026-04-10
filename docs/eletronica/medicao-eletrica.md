---
sidebar_position: 7
title: Medição Elétrica
slug: medicao-eletrica
---

# Anexo 3, Seção 7 – Medição Elétrica

## 7.1 Multímetro: Funções Básicas

O **multímetro** (ou multiteste) é o instrumento de medição mais importante na bancada de um radioamador. Ele pode medir:

- **Tensão** (CC e CA) – em Volts
- **Corrente** (CC e CA) – em Ampères
- **Resistência** – em Ohms
- **Frequência** (em multímetros mais avançados) – em Hz
- **Continuidade** (teste de circuito fechado) – bipe sonoro
- **Capacitância**, **temperatura**, **diodos** (em modelos avançados)

A **chave seletora** rotativa no multímetro seleciona a função e, em modelos não-automáticos, também a escala de medição.

**Tipos:**
- **Analógico**: ponteiro em escala graduada. Raro, mas ainda usado
- **Digital** (DMM – Digital Multimeter): display numérico. Mais preciso e comum

## 7.2 Medição de Corrente

**Princípio:** O amperímetro (função de corrente do multímetro) deve ser conectado em **série** com o circuito.

**Procedimento:**
1. Desligue o circuito antes de conectar
2. Selecione a função de corrente (DC A ou AC A)
3. Selecione a escala adequada (maior que a corrente esperada) em modelos manuais
4. Abra o circuito no ponto de medição
5. Conecte o multímetro no ponto aberto (em série)
6. Ligue o circuito e leia o valor

:::danger Cuidado crítico
**NUNCA conecte o multímetro na função de corrente diretamente aos terminais de uma fonte de tensão** (em paralelo). O multímetro em modo corrente tem resistência muito baixa e será destruído instantaneamente pelo curto-circuito resultante. Sempre conecte em série!
:::

## 7.3 Medição de Tensão

**Princípio:** O voltímetro (função de tensão) deve ser conectado em **paralelo** com o ponto de medição.

**Procedimento:**
1. Selecione a função de tensão (DC V ou AC V)
2. Selecione a escala adequada em modelos manuais
3. Com o circuito energizado, toque as pontas de prova nos dois pontos de medição
4. Leia o valor no display

**Características do voltímetro:**
- Alta impedância de entrada (geralmente 10 MΩ) para não perturbar o circuito medido
- Polaridade importa em CC: ponta vermelha (+) no ponto mais positivo

:::warning
Ao medir tensão em capacitores eletrolíticos, respeite a polaridade. Um capacitor eletrolítico invertido pode explodir (literalmente). Antes de medir, certifique-se de que o capacitor está descarregado se o circuito estiver desligado.
:::

## 7.4 Medição de Resistência e Continuidade

**Princípio:** O ohmímetro injeta uma pequena corrente pelo componente e mede a queda de tensão resultante.

**Procedimento para resistência:**
1. **Circuito deve estar completamente desligado e descarregado**
2. Desconecte pelo menos um terminal do componente a medir (para não medir resistências paralelas do circuito)
3. Selecione a função de resistência (Ω)
4. Conecte as pontas de prova nos terminais do componente
5. Leia o valor

**Continuidade:**
A função de **continuidade** (ícone de buzina/bipe) emite um som quando a resistência entre os pontos é menor que ~30–50 Ω. Usa-se para:
- Verificar se um fio está íntegro (sem rompimento)
- Confirmar conexões soldadas
- Testar fusíveis
- Rastrear trilhas em PCBs

## 7.5 Medição de Frequência e Segurança

**Medição de frequência:**
Alguns multímetros têm função de frequencímetro (Hz). Conecta-se em paralelo com o sinal e lê a frequência.

**Regras de segurança gerais:**
- Respeite sempre os **limites de tensão e corrente** especificados pelo fabricante para cada função
- **Nunca mude o seletor** com as pontas de prova conectadas ao circuito (especialmente perigoso com funções de corrente)
- Inspecione cabos e pontas de prova antes de usar – isolamento danificado é risco de choque
- Use a **categoria de medição (CAT)** correta para o ambiente (CAT III para painéis elétricos, CAT II para tomadas, etc.)
- Em dúvida, sempre comece pela escala mais alta

## 7.6 Wattímetro

O **wattímetro** mede a **potência** em Watts. No radioamadorismo, é essencial para verificar a potência de saída do transmissor.

**Características:**
- Instalado em série na linha de RF, entre o transmissor e a antena (ou carga fantasma)
- Pode ser **bidirecional** (mede potência direta e refletida separadamente) ou **inline** (mede potência na linha)
- A impedância padrão é **50 Ω** (mesmo do coaxial)
- Disponível em diferentes faixas de potência (0–100W, 0–500W, 0–2000W)

**Funcionamento:**
O wattímetro direcional usa um acoplador direcional que separa o sinal que vai para a antena (direto) do sinal que volta (refletido). Medindo ambos, calcula:
- Potência direta (forward power): saída do transmissor
- Potência refletida (reflected power): retorno da antena
- ROE/SWR: calculado a partir das potências direta e refletida

## 7.7 Medidor de Ondas Estacionárias (ROE/SWR)

O **medidor de ROE** (Razão de Ondas Estacionárias) ou **SWR meter** (Standing Wave Ratio) verifica o casamento de impedância entre o transmissor e a antena.

**Funcionamento:**
Instalado entre o transceptor e a antena, o medidor detecta:
- O sinal que vai para a antena (onda direta)
- O sinal que retorna da antena (onda refletida, causada por descasamento)

A razão entre os dois determina a ROE:

| ROE | Condição | Ação recomendada |
|-----|----------|-----------------|
| **1:1** | Casamento perfeito | Excelente, não precisa de ajuste |
| **1,5:1** | Muito bom | Aceitável |
| **2:1** | Razoável | Considere ajustar a antena |
| **3:1** | Ruim | Ajuste necessário |
| **5:1 ou mais** | Muito ruim | Não transmita; investigue a causa |

**Quando a ROE está alta:**
- Frequência muito diferente da ressonância da antena
- Cabo coaxial danificado ou mal conectado
- Conector defeituoso
- Antena com elemento quebrado ou mal ajustado

:::tip
Um medidor de ROE é o segundo instrumento mais importante numa estação de radioamador (depois do multímetro). Nunca opere sem saber sua ROE – uma ROE alta pode danificar o estágio final de potência do transceptor.
:::
