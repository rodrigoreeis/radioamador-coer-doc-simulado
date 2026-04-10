---
sidebar_position: 4
title: Propagação
slug: propagacao
---

# Anexo 1, Seção 4 – Propagação

## 4.1 Meios de transmissão

Os sinais de rádio podem se propagar por diferentes meios:

- **Condutores elétricos**: cabos, fios – usado para transmitir o sinal até a antena
- **Espaço livre**: o ar e o vácuo – onde as ondas eletromagnéticas se propagam
- **Condutores ópticos**: fibra óptica – não usado em radioamadorismo convencional, mas em links de backhaul

No contexto do radioamadorismo, nos interessa principalmente a **propagação no espaço livre** e suas interações com a atmosfera e a superfície terrestre.

## 4.2 Ondas terrestres x ondas espaciais

### Ondas Terrestres (Surface Waves)
Se propagam rente à superfície da Terra, "abraçando" a curvatura terrestre. São absorvidas progressivamente. Úteis para comunicações de curto a médio alcance em LF e MF.

**Subtipos:**
- Onda de solo (ground wave): segue a superfície, atenuação depende da condutividade do terreno
- Onda direta (direct/space wave): linha de visada direta entre antenas

### Ondas Espaciais (Sky Waves)
São lançadas em ângulo para o céu e refletidas (ou refratadas) pela **ionosfera** de volta à superfície. Permitem comunicações de longa distância em HF (propagação DX).

## 4.3 Regiões da atmosfera relevantes

| Camada | Altitude | Relevância para RF |
|--------|----------|-------------------|
| **Troposfera** | 0–10/15 km | Propaga VHF/UHF/SHF por ductos troposféricos e tropodifusão |
| **Estratosfera** | 10–50 km | Pouco relevante para propagação de RF |
| **Ionosfera** | ~60–400 km | Fundamental para propagação de HF (DX); reflete ondas de 3–30 MHz |

### Camadas da Ionosfera

A ionosfera não é homogênea. Divide-se em camadas com características distintas:

| Camada | Altitude | Características |
|--------|----------|-----------------|
| **D** | 60–90 km | Existe durante o dia. Absorve ondas MF e parte de HF. Desaparece à noite. |
| **E** | 90–140 km | Presente durante o dia. Reflete ondas de 1–20 MHz. Propagação E esporádica (Es). |
| **F1** | 140–200 km | Presente durante o dia, se funde com F2 à noite. |
| **F2** | 200–400 km | A mais importante para DX em HF. Presente o dia todo, mais intensa de dia. |

## 4.4 Faixa de frequência x mecanismo predominante

| Faixa | Frequência | Mecanismo predominante |
|-------|-----------|------------------------|
| **LF/MF** | 30 kHz–3 MHz | Onda de terra (curto alcance), onda de céu à noite via camada E |
| **HF** | 3–30 MHz | Onda ionosférica (DX) – reflete principalmente na camada F2 |
| **VHF** | 30–300 MHz | Onda direta (visibilidade), ductos troposféricos, Es esporádico, aurora |
| **UHF** | 300 MHz–3 GHz | Onda direta (visibilidade), troposfera, satélites |
| **SHF** | 3–30 GHz | Micro-ondas, visibilidade direta, satélites |

## 4.5 Visibilidade direta e tropodifusão

### Visibilidade Direta (Line of Sight – LOS)
Em VHF e acima, a comunicação normalmente requer que as antenas estejam em "visibilidade direta" (sem obstáculos entre elas). O alcance máximo é limitado pelo horizonte de rádio:

**Fórmula aproximada:**
`d_(max)(km) ≈ 4,12 × (sqrt(h_1) + sqrt(h_2))`

Onde h₁ e h₂ são as alturas das antenas em metros.

Exemplo: antenas a 10 metros de altura cada → d_max ≈ 4,12 × (3,16 + 3,16) ≈ 26 km

### Tropodifusão
Fenômeno em que o sinal VHF/UHF é difundido por irregularidades na troposfera, permitindo comunicação além do horizonte (até algumas centenas de km). É imprevisível, mas regular o suficiente para ser explorado por radioamadores.

## 4.6 Propagação em HF (3–30 MHz): ionosfera

A propagação HF é fascinante e variável. Depende de:

- **Frequência**: há uma MUF (Maximum Usable Frequency) para cada rota e camada. Acima da MUF, o sinal "atravessa" a ionosfera sem refletir.
- **Hora do dia**: a camada D absorve HF durante o dia. À noite, desaparece e as faixas "baixas" (160m, 80m, 40m) abrem para comunicações mais longas.
- **Estação do ano**: varia com a posição da Terra em relação ao Sol.
- **Ciclo solar**: o Sol tem ciclos de atividade de ~11 anos. Mais manchas solares = ionosfera mais intensa = melhores condições DX em HF.

**Regra geral simplificada:**
- **Dia**: 40m, 30m, 20m, 17m, 15m, 12m, 10m são as faixas mais abertas
- **Noite**: 160m, 80m, 40m permitem comunicações mais longas
- **Pico do ciclo solar**: 10m, 12m, 15m com propagação global excelente

## 4.7 Relação sinal-ruído (SNR): como melhorar

A **SNR** (Signal-to-Noise Ratio) é a relação entre o nível do sinal desejado e o nível de ruído de fundo. Quanto maior a SNR, mais fácil é decodificar o sinal.

**Como melhorar a SNR:**
- Aumentar a potência do transmissor (aumenta o sinal)
- Usar antenas mais direcionais e com mais ganho
- Reduzir interferências locais (fontes de ruído elétrico)
- Usar modos de emissão mais eficientes (CW, modos digitais de banda estreita)
- Escolher a faixa certa para a distância e hora do dia

:::tip
Em condições de propagação ruim, modos digitais como FT8 podem fechar um contato com sinais 20–30 dB abaixo do que seria necessário em fonia SSB. É por isso que se tornaram tão populares.
:::
