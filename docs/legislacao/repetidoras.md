---
sidebar_position: 9
title: Repetidoras, Canalização e Modos Digitais
slug: repetidoras
---

# Repetidoras, Canalização e Modos Digitais

## 8. Repetidoras, Canalização e Modos Digitais

### 8.1 Estações Repetidoras

As repetidoras são estações de radioamador que operam automaticamente, recebendo e retransmitindo o sinal de outros radioamadores para ampliar o alcance das comunicações.

**Requisitos obrigatórios para repetidoras:**

#### Canalizações Específicas
As repetidoras operam em canalizações (pares de frequência) específicas, definidas pelo plano de faixas. Por exemplo, em VHF (2 metros), as repetidoras normalmente usam o desvio de -600 kHz.

#### Identificação Automática
A repetidora deve ter um **dispositivo de identificação automática** que transmite o indicativo de chamada da estação **a cada hora** (preferencialmente nos 10 minutos anteriores ou posteriores à hora cheia). Essa identificação pode ser em código Morse (CW) ou voz.

#### Desligamento Automático por Tempo
A repetidora deve desligar automaticamente após **10 minutos de uso contínuo** (transmissão ininterrupta). Isso evita que uma estação monopolize a repetidora e protege o equipamento.

#### Desligamento por Perda do Sinal de Entrada
A repetidora deve cessar a transmissão **5 segundos após o sinal de entrada desaparecer**. Esse pequeno atraso evita que cortes momentâneos (como o operador soltando o PTT brevemente) causem reinicializações desnecessárias.

**Transmissão unilateral sem restrição de tempo:**
Algumas situações permitem transmissão mais longa sem o limite de 10 minutos:
- **Emergências**: comunicações de socorro têm prioridade e não estão sujeitas ao limite de tempo
- **Experimentos técnicos**: transmissões contínuas para fins de teste (com identificação)
- **Boletins**: boletins de radioamador transmitidos periodicamente
- **Aulas e palestras**: transmissões educativas organizadas

**Abertura:**
As repetidoras são **abertas a todos os radioamadores habilitados**, salvo indicação contrária explícita do responsável pela repetidora. Restricions de acesso (por exemplo, apenas membros de um clube) devem ser claramente indicadas.

### 8.2 Banda Cruzada e Combinação de Frequências

A operação em **banda cruzada** (cross-band) consiste em receber em uma faixa de frequência e retransmitir em outra faixa diferente. Exemplo: receber em UHF (70cm) e retransmitir em VHF (2m), ou vice-versa.

Essa técnica permite:
- Combinar alcances diferentes de diferentes faixas
- Criar links entre redes de repetidoras em faixas diferentes
- Aumentar a cobertura geográfica de sistemas de comunicação

A operação em banda cruzada requer equipamento específico (rádio dual-band com capacidade de cross-band repeat) e observância das regras de ambas as faixas envolvidas.

### 8.3 Estações de Operação Automática em Modos Digitais (ACDS)

As **ACDS** (Automatic Controlled Data Stations – Estações de Controle Automático de Dados) são estações que operam automaticamente em modos digitais, sem a presença imediata de um operador.

**Usos típicos de ACDS:**
- Nós de redes de dados (packet radio, APRS)
- Gateways de e-mail via rádio (Winlink)
- Estações APRS (rastreamento e mensagens)
- Sistemas de telemetria
- Redes de emergência automáticas

**Requisitos para ACDS:**
- Devem estar licenciadas como estação de radioamador
- Devem se identificar automaticamente
- Devem cumprir os limites de potência e faixa da classe do titular
- Devem ser configuradas para não causar interferência

As ACDS são frequentemente instaladas em pontos altos (morros, torres) para maximizar o alcance de redes digitais de radioamador.
