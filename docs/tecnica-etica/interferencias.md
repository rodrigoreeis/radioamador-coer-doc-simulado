---
sidebar_position: 5
title: Interferências
slug: interferencias
---

# Anexo 1, Seção 5 – Interferências

## 5.1 Princípio básico

A principal obrigação do radioamador é não causar **interferência prejudicial**. Isso é especialmente crítico quando a interferência afeta:

- Comunicações de rotina de outros radioamadores
- Serviços essenciais (aviação, marinha, emergências médicas, segurança pública)
- **Tráfego de emergência**: qualquer comunicação de socorro tem prioridade absoluta e deve ser protegida de interferências

O radioamador que identificar que está causando interferência deve **parar imediatamente** e investigar a causa, antes de retomar a operação.

## 5.2 Tipos comuns de interferência

### Interferência Irradiada
O sinal do transmissor (ou suas harmônicas) interfere diretamente em outros receptores próximos. Causas comuns:

- **Harmônicas**: múltiplos inteiros da frequência fundamental que "vazam" do transmissor. Exemplo: um transmissor em 14 MHz pode gerar harmônicas em 28 MHz, 42 MHz, etc.
- **Produtos de intermodulação**: sinais espúrios gerados pela não-linearidade do transmissor
- **Potência excessiva**: usar potência muito acima do necessário aumenta o risco de interferência
- **Antena mal projetada**: pode irradiar em frequências indesejadas

### Interferência Conduzida
O sinal de RF "entra" nos equipamentos do vizinho pelos cabos elétricos ou de sinal (TV, telefone, etc.), sem passar pelo ar.

**Dica da bateria (isolação galvânica):**
Uma técnica clássica para diagnosticar se a interferência é conduzida ou irradiada: alimente o transmissor com bateria (desconectando-o da rede elétrica). Se a interferência desaparecer ou diminuir muito, a fonte é conduzida pela rede elétrica. Se persistir, é irradiada.

## 5.3 Boas práticas para reduzir interferências

### Use a menor potência necessária
A potência excessiva é a principal causa de interferência. Use apenas o necessário para estabelecer o contato. Em muitos casos, 10W ou 50W são suficientes onde 100W seriam desnecessários.

### Aterramento adequado
Um bom aterramento elétrico e de RF é fundamental:
- Aterramento de segurança: proteção contra choque elétrico
- Aterramento de RF: reduz correntes de RF na estrutura dos equipamentos, prevenindo interferências

### Filtros passa-baixas (LPF)
Instalados na saída do transmissor, atenuam as harmônicas e emissões espúrias acima da frequência de trabalho. São especialmente importantes em HF para não interferir em serviços de VHF/UHF.

### Baluns e choques de RF
- **Balun** (BALanced-UNbalanced): converte entre linha simétrica e assimétrica. Evita correntes de RF no cabo coaxial (RF "viajando" pelo lado externo do cabo).
- **Choke de RF** (ferrite choke): anel de ferrite ao redor do cabo coaxial. Suprime correntes de modo comum no cabo, reduzindo interferência conduzida.

:::info
Muitos problemas de interferência em televisores, sistemas de som e equipamentos eletrônicos vizinhos são causados por correntes de RF no cabo coaxial (falta de balun ou choke). Resolver isso elimina a interferência sem reduzir a potência da estação.
:::

:::warning
Se você receber uma notificação da ANATEL sobre interferência causada pela sua estação, coopere totalmente com a investigação. Negatória e falta de cooperação agravam a situação regulatória.
:::
