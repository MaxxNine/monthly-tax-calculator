## Regras de Cálculo

Esta página descreve como os cálculos de impostos são realizados na Calculadora de Impostos Mensais.

--- 

### Impostos sobre a Renda Mensal

Os impostos sobre sua renda mensal incluem:

    INSS (Instituto Nacional do Seguro Social)
    IRRF (Imposto de Renda Retido na Fonte)
    FGTS (Fundo de Garantia do Tempo de Serviço)

#### Cálculo do INSS

As alíquotas do INSS são progressivas, dependendo da faixa salarial:

    Até R$ 1.412,00: 7,5%
    De R$ 1.412,01 a R$ 2.666,68: 9% (com dedução de R$ 21,18)
    De R$ 2.666,69 a R$ 4.000,03: 12% (com dedução de R$ 101,18)
    De R$ 4.000,04 a R$ 7.786,02: 14% (com dedução de R$ 181,18)
    Acima de R$ 7.786,02: Teto máximo (14% sobre R$ 7.786,02, com dedução de R$ 181,18)

**Fórmula:**

INSS = (Salário Bruto × Alíquota) – Dedução

#### Cálculo do IRRF

As alíquotas do IRRF também são progressivas:

    Até R$ 2.259,20: Isento
    De R$ 2.259,21 a R$ 2.826,65: 7,5% (com dedução de R$ 169,44)
    De R$ 2.826,66 a R$ 3.751,05: 15% (com dedução de R$ 381,44)
    De R$ 3.751,06 a R$ 4.664,68: 22,5% (com dedução de R$ 662,77)
    Acima de R$ 4.664,68: 27,5% (com dedução de R$ 896,00)

**Fórmula:**

IRRF = (Salário Bruto × Alíquota) – Dedução

#### Cálculo do FGTS

FGTS: 8% do salário bruto

**Fórmula:**

FGTS = Salário Bruto × 8%

#### Total de Impostos sobre a Renda

Total de Impostos sobre a Renda = INSS + IRRF + FGTS


--- 

### Impostos sobre Gastos com Mercado

Os impostos sobre gastos com mercado incluem (sujeito a leves flutuações dependendo do produto):

ICMS (Imposto sobre Circulação de Mercadorias e Serviços): 18%

PIS (Programa de Integração Social): 1,65%
    
COFINS (Contribuição para o Financiamento da Seguridade Social): 7,6%

**Cálculo:**

ICMS = Valor dos Gastos × 18%

Base de Cálculo para PIS e COFINS:

Base = Valor dos Gastos – ICMS

PIS = Base × 1,65%

COFINS = Base × 7,6%

#### Total de Impostos sobre Gastos com Mercado:

Total de Impostos = ICMS + PIS + COFINS


---

### Impostos sobre Contas (Luz, Internet, Água)
#### Opção: Valor Aproximado Total

    Aplica-se a mesma metodologia dos gastos com mercado.

#### Opção: Valores Individuais

Conta de Luz e Água

    Mesma metodologia dos gastos com mercado.

Conta de Internet

ICMS: 25%

PIS: 0,65%

COFINS: 3%

**Cálculo:**

ICMS = Valor da Conta × 25%

Base de Cálculo para PIS e COFINS:

Base = Valor da Conta – ICMS

PIS = Base × 0,65%

COFINS = Base × 3%

#### Total de Impostos sobre Contas:

Total de Impostos = Soma dos impostos de cada conta


--- 

### Impostos sobre Financiamento de Carro

#### Os impostos sobre o financiamento de carro incluem:

ICMS: 18%

PIS: 2,1%

COFINS: 10,3%

IPI (Imposto sobre Produtos Industrializados): 10%

ICMS ST MVA (Margem de Valor Agregado): 5,4% sobre o valor do veículo (Com Margem de Valor Agregado é de 30%)

IOF (Imposto sobre Operações Financeiras): 3,38% sobre o valor financiado (para fins de praticidade, não levamos em consideração o IOF sobre o juros)


**Cálculo:**

Valor do Veículo sem Impostos:

Valor Base = Valor Total do Veículo ÷ 1,154

ICMS = Valor Base × 18%

PIS = (Valor Base – ICMS) × 2,1%

COFINS = (Valor Base – ICMS) × 10,3%

IPI = Valor Base × 10%

MVA = Valor Base × 5,4%

IOF = (Valor Total do Veículo – Pagamento Inicial) × 3,38%

#### Total de Impostos sobre o Veículo:

Total de Impostos = ICMS + PIS + COFINS + IPI + MVA + IOF

#### Imposto Mensal:

Imposto Mensal = Parcela Mensal × (Total de Impostos ÷ Valor Base)


--- 

### Impostos sobre Financiamento de Casa

Os impostos sobre o financiamento de casa incluem:

IOF: 3,38% sobre transação financeira

ITBI (Imposto sobre Transmissão de Bens Imóveis): 4% sobre o valor do imóvel

#### Cálculo do Financiamento:

Valor Financiado:

Valor Financiado = Valor do Imóvel – Pagamento Inicial

#### Taxa de Juros Mensal:

##### Com Taxa Selic Atual:

Taxa Mensal = (10,75% ÷ 12) ÷ 100

Com Taxa Personalizada:

Taxa Mensal = Taxa Informada ÷ 100

#### Parcela Mensal:

Parcela Mensal = [Valor Financiado × Taxa Mensal] ÷ [1 – (1 + Taxa Mensal)^(–Prazo em Meses)]

Custo Total do Imóvel:

Custo Total = (Parcela Mensal × Prazo em Meses) + Pagamento Inicial

#### Total de Juros Pagos:

Total de Juros = Custo Total – Valor do Imóvel

#### Cálculo dos Impostos:

IOF = Custo Total × 3,38%

ITBI = Valor do Imóvel × 4%

#### Total de Impostos:

Total de Impostos = IOF + ITBI

#### Imposto Mensal:

Imposto Mensal = Parcela Mensal × (Total de Impostos ÷ Custo Total)

### Total de Impostos

Total de Impostos = Impostos sobre a Renda + Impostos sobre Gastos com Mercado + Impostos sobre Contas + Impostos sobre Financiamento de Carro + Impostos sobre Financiamento de Casa

#### Impostos como Percentual da Renda

Percentual de Impostos sobre a Renda = (Total de Impostos ÷ Salário Bruto) × 100%

Nota: Estes cálculos são baseados em alíquotas vigentes e têm como objetivo fornecer uma estimativa dos impostos pagos. Para informações mais detalhadas ou casos específicos, consulte um profissional especializado ou as legislações oficiais.