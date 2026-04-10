---
sidebar_position: 11
title: Comunicações, Redes e Tecnologias Digitais
slug: comunicacoes-digitais
---

# Anexo 3, Seção 11 – Comunicações, Redes e Tecnologias Digitais

## 11.1 Conceitos Gerais

O radioamadorismo digital vai muito além do simples uso de um transceptor. Envolve um ecossistema de equipamentos e tecnologias:

- **Rádios**: o transceptor convencional (HF, VHF, UHF)
- **Modems**: convertem dados digitais em sinais de áudio para transmissão por rádio (e vice-versa)
- **TNCs (Terminal Node Controllers)**: hardware dedicado para packet radio, com modem embutido
- **Softwares**: programas que substituem o hardware do TNC ou processam os sinais digitais recebidos pelo som do computador (soundcard modes)

**Conceitos de redes:**
- **Pacotes**: unidades de dados com cabeçalho (endereço de origem e destino, número de sequência) e payload (dados)
- **Telemetria**: transmissão de dados de sensores via rádio (temperatura, posição GPS, etc.)
- **Gateways**: estações que interligam redes de rádio com a internet
- **Nodes (nós)**: estações intermediárias que retransmitem dados em redes de pacotes

## 11.2 Modulação Digital

### ASK – Amplitude Shift Keying
Modula a **amplitude** da portadora para representar bits:
- OOK (On-Off Keying): a forma mais simples – portadora ligada = 1, desligada = 0

**Usos:**
- Telemetria básica
- Beacons meteorológicos
- Alguns sistemas de controle remoto

### FSK – Frequency Shift Keying
Modula a **frequência** da portadora para representar bits. Cada símbolo corresponde a uma frequência diferente.

**AFSK (Audio Frequency Shift Keying)**: a comutação de frequência é feita no áudio antes de modular a portadora. O transceptor usa seu modo FM ou SSB normal.

**Usos:**
- **RTTY** (Radio Teletype): o modo digital mais antigo. Marca = 2125 Hz, Espaço = 2295 Hz (em AFSK)
- **APRS**: usa AFSK 1200 baud (1200 Hz e 2200 Hz) em FM
- **Packet Radio (AX.25)**: protocolo de pacotes, usa AFSK 1200 baud em VHF
- **MFSK16**: múltiplas frequências (16 tons), mais robusto em HF

### PSK – Phase Shift Keying
Modula a **fase** da portadora para representar bits. A frequência e amplitude permanecem constantes.

**PSK31 e PSK63:**
- PSK31: 31,25 baud – velocidade de digitação humana, largura de banda mínima (~31 Hz)
- PSK63: 62,5 baud – mais rápido, ainda muito eficiente

**Usos:**
- **PSK31/PSK63**: comunicação por teclado em HF, muito popular
- **Winlink/PACTOR**: e-mail via rádio HF, usa PSK e variantes robustas
- **Olivia**: modo robusto para condições difíceis de propagação

## 11.3 Redes e Tecnologias Digitais

### APRS – Automatic Packet Reporting System

O APRS é um sistema de comunicação de dados em tempo real baseado no protocolo **AX.25** (adaptação do X.25 para radioamadores).

**Funções principais:**
- Rastreamento de posição GPS em tempo real
- Envio de mensagens curtas entre estações
- Telemetria de sensores (temperatura, umidade, vento)
- Rastreamento de veículos, aeronaves (balões), expedições

**Componentes da rede APRS:**
- **Digipeaters**: repetidoras digitais que retransmitem pacotes APRS para ampliar o alcance
- **iGates**: gateways que conectam a rede APRS de rádio com a internet (aprs.fi, aprs.is)

**Frequência padrão:**
- 144,390 MHz (América do Norte) / frequência varia por região

---

### Estações ACDS – Automatic Controlled Data Stations

As ACDS são estações de radioamador operadas automaticamente em modos digitais. Formam a infraestrutura de redes de comunicação digital de radioamadores.

**Usos:**
- Redes de emergência (Winlink, NBEMS)
- APRS (nós e iGates)
- AMTOR (Amatuer Teleprinting Over Radio)
- PACTOR (versões I a IV)
- ALE (Automatic Link Establishment)
- WSPR (beacons de propagação)

---

### IVG – Internet Voice Gateway

Sistemas que conectam comunicações de voz por rádio à internet, permitindo comunicações globais de radioamador com qualidade de áudio digital.

**Exemplos:**

**Echolink:**
- Criado por Jonathan Taylor K1RFD
- Usa VoIP (Voice over IP) para conectar radioamadores via internet
- Acesso via software (PC ou smartphone) ou via rádio (usando repetidoras com nó Echolink)
- Requer **licença de radioamador válida** para criar conta
- Permite acessar repetidoras de todo o mundo via internet

**WIRES-X (Yaesu):**
- Sistema proprietário da Yaesu
- Conecta repetidoras e usuários via internet
- Popular com rádios digitais Yaesu (System Fusion)

**DMR BrandMeister:**
- Rede global DMR (Digital Mobile Radio)
- Talkgroups (grupos de conversa) globais e regionais
- Acesso via rádio DMR ou via hotspot pessoal

**AllStarLink:**
- Sistema open-source baseado em Asterisk (PBX IP)
- Conecta repetidoras e simplex nodes via internet
- Popular com a comunidade técnica

---

### IDG – Internet Data Gateway

Sistemas que conectam dados de radioamador com a internet:

**HSMM-Mesh (Broadband Hamnet):**
- Rede mesh de alta velocidade usando hardware Wi-Fi modificado (geralmente roteadores Ubiquiti, Mikrotik)
- Opera nas faixas de 2,4 GHz, 5,8 GHz e outras (frequências de radioamador equivalentes)
- Fornece conectividade IP de alta velocidade para estações de radioamador
- Usado em emergências e eventos

**Winlink:**
- Sistema global de e-mail via rádio
- Permite enviar e receber e-mails sem internet
- Crucial em emergências quando a infraestrutura de telecomunicações falha
- Modos de propagação: HF (PACTOR, VARA HF), VHF/UHF (Packet, VARA FM)

**Direwolf TNC Gateways:**
- Software TNC (Terminal Node Controller) que usa a placa de som do computador
- Substitui o hardware TNC dedicado
- Usado como iGate APRS, node de packet radio

**Rede 44NET (AMPRNet):**
- Bloco de endereços IP (44.0.0.0/8) alocado à comunidade de radioamadores
- Criada em 1981, antes da internet comercial
- Usada para experimentação com redes IP sobre rádio
- Gestão: AMPR.org

---

### SDR – Software Defined Radio

O SDR é uma arquitetura de rádio onde a maioria das funções (demodulação, filtros, decoding) é realizada em software, em vez de hardware dedicado.

**Hardware popular:**
- **Dongles USB RTL-SDR**: baseados em chips de TV digital (RTL2832U), custo baixíssimo (~R$50-100)
- **HackRF, LimeSDR, PlutoSDR**: SDRs de nível superior com capacidade de transmissão

**Usos no radioamadorismo:**
- Monitoramento de faixas de frequência (escutar e visualizar o espectro)
- Decodificação de sinais digitais (APRS, ADS-B de aviões, satélites meteorológicos)
- Transmissão quando o hardware permite e a classe autoriza
- Desenvolvimento e aprendizado de técnicas de modulação e demodulação

---

### WSPR – Weak Signal Propagation Reporter

O WSPR (pronunciado "whisper") é um modo digital desenvolvido por Joe Taylor K1JT, projetado para sondagem de propagação usando sinais extremamente fracos.

**Características:**
- Codificação eficiente: transmite indicativo, localizador Maidenhead e potência em apenas 4 minutos
- Sensibilidade: pode decodificar sinais 30 dB abaixo do que seria necessário em CW
- Muito baixa potência: eficaz com 200 mW ou menos
- Rede global: todos os dados são enviados ao wspr.rocks para análise

**Uso:** Verificar a propagação de HF em tempo real, identificar as faixas abertas, estudar o ciclo solar.

---

### ALE – Automatic Link Establishment

O ALE é um sistema que seleciona automaticamente a melhor frequência disponível para uma comunicação em HF, em tempo real.

**Funcionamento:**
1. As estações transmitem sondas em várias frequências
2. Cada estação avalia a qualidade das frequências recebidas
3. Ao estabelecer um link, o sistema escolhe automaticamente a frequência com melhor qualidade
4. A comunicação inicia na frequência selecionada

**Uso:** Redes de emergência, comunicações militares e governamentais adaptadas para uso por radioamadores.

---

### AMTOR e PACTOR

Modos digitais desenvolvidos especificamente para HF, com **correção de erros**:

**AMTOR (AMateur Teleprinting Over Radio):**
- Evolução do RTTY com detecção de erros (ARQ – Automatic Repeat reQuest)
- Solicita retransmissão de pacotes corrompidos
- Praticamente substituído pelo PACTOR

**PACTOR (I, II, III, IV):**
- Sistema robusto para comunicação de dados em HF
- PACTOR I: baseado em AMTOR, open standard
- PACTOR II/III/IV: proprietário (SCS Grp. GmbH)
- Correção de erros e adaptação automática às condições do canal
- Usado pelo Winlink para e-mail via rádio HF

---

:::info[Nota regulatória importante]
A ANATEL regula o **uso do espectro** de radiofrequências, não a tecnologia em si. Isso significa que:

- O radioamador pode usar qualquer tecnologia digital que não viole as regras de uso do espectro (faixas, potências, identificação, não-codificação)
- Novas tecnologias não precisam de aprovação específica para ser usadas, desde que respeitem o regulamento
- A proibição de codificação se refere a **ocultar o conteúdo das transmissões** (criptografia), não ao uso de codificação para eficiência (como PSK31 ou FT8, que são totalmente decifráveis por qualquer um com o software adequado)
:::
