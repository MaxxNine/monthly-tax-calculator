import React, { useState } from 'react';
import useExpenseStore from '../store/useExpenseStore';
import useMonthlyIncome from '../hooks/useMonthlyIncome';
import useMarketExpenditure from '../hooks/useMarketExpenditure';
import useBills from '../hooks/useBills';
import useCarFinancing from '../hooks/useCarFinancing';
import useHouseFinancing from '../hooks/useHouseFinancing';

import MonthlyIncome from './Expenses/MonthlyIncome';
import MarketExpenditure from './Expenses/MarketExpenditure';
import Bills from './Expenses/Bills';
import CarFinancing from './Expenses/CarFinancing';
import HouseFinancing from './Expenses/HouseFinancing';
import { SELIC_HOJE } from '@/constants/taxes';

// Helper function to format currency values
const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    }).format(value);
};

const CalculatorForm = () => {
    const { calculateTax: calculateIncomeTax } = useMonthlyIncome();
    const { calculateTax: calculateMarketTax } = useMarketExpenditure();
    const { calculateTax: calculateBillsTax } = useBills();
    const { calculateTax: calculateCarTax } = useCarFinancing();
    const {
        calculateTax: calculateHouseTax,
        totalCost: houseTotalCost,
        totalFinanced: houseTotalFinanced,
        totalInterestPaid: houseTotalInterestPaid,
        monthlyPayment: houseMonthlyPayment,
        interestRate: houseInterestRate,
        loanTermMonths: houseLoanTerm,
        useSelicRate,
    } = useHouseFinancing();

    const setTotalExpenses = useExpenseStore((state) => state.setTotalExpenses);
    const setTotalTaxes = useExpenseStore((state) => state.setTotalTaxes);
    const setTaxPercentageOfIncome = useExpenseStore(
        (state) => state.setTaxPercentageOfIncome
    );

    const totalExpenses = useExpenseStore((state) => state.totalExpenses);
    const totalTaxes = useExpenseStore((state) => state.totalTaxes);
    const taxPercentageOfIncome = useExpenseStore(
        (state) => state.taxPercentageOfIncome
    );

    const monthlyIncome = useExpenseStore((state) => state.monthlyIncome);

    // State variables for individual taxes
    const [incomeTaxAmount, setIncomeTaxAmount] = useState<number>(0);
    const [marketTaxAmount, setMarketTaxAmount] = useState<number>(0);
    const [billsTaxAmount, setBillsTaxAmount] = useState<number>(0);
    const [carTaxAmount, setCarTaxAmount] = useState<number>(0);
    const [houseTaxAmount, setHouseTaxAmount] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const incomeTax = calculateIncomeTax();
        const marketTax = calculateMarketTax();
        const billsTax = calculateBillsTax();
        const carTax = calculateCarTax();
        const houseTax = calculateHouseTax();

        // Update state variables with individual tax amounts
        setIncomeTaxAmount(incomeTax);
        setMarketTaxAmount(marketTax);
        setBillsTaxAmount(billsTax);
        setCarTaxAmount(carTax);
        setHouseTaxAmount(houseTax);

        const expensesTotal =
            useExpenseStore.getState().marketExpenditure +
            (useExpenseStore.getState().billsOption === 'approximate'
                ? useExpenseStore.getState().billsApproximateTotal
                : useExpenseStore.getState().electricityBill +
                useExpenseStore.getState().internetBill +
                useExpenseStore.getState().waterBill) +
            (useExpenseStore.getState().carFinancing
                ? useExpenseStore.getState().carMonthlyDebt
                : 0) +
            (useExpenseStore.getState().houseFinancing
                ? useExpenseStore.getState().monthlyPayment
                : 0);

        setTotalExpenses(expensesTotal);

        const taxesTotal = incomeTax + marketTax + billsTax + carTax + houseTax;
        setTotalTaxes(taxesTotal);

        const taxPercentIncome = monthlyIncome > 0 ? (taxesTotal / monthlyIncome) * 100 : 0;
        setTaxPercentageOfIncome(taxPercentIncome);
    };

    return (
        <form onSubmit={handleSubmit} className="calculator-form">
            {/* Monthly Income */}
            <MonthlyIncome />

            {/* Market Expenditure */}
            <MarketExpenditure />

            {/* Bills */}
            <Bills />

            {/* Car Financing */}
            <CarFinancing />

            {/* House Financing */}
            <HouseFinancing />

            {/* Submit Button */}
            <button type="submit">Calcular</button>

            {/* Display Results */}
            {totalExpenses > 0 && (
                <div className="results">
                    <h2>Resultados</h2>
                    <div className="results-section">
                        <h3>Renda</h3>
                        <ul>
                            <li>
                                <strong>Salário Bruto:</strong> {formatCurrency(monthlyIncome)}
                            </li>
                            <li>
                                <strong>Salário Líquido:</strong> {formatCurrency(monthlyIncome - incomeTaxAmount)}
                            </li>
                            <li>
                                <strong>Imposto sobre Renda:</strong> {formatCurrency(incomeTaxAmount)}
                            </li>
                        </ul>
                    </div>

                    <div className="results-section">
                        <h3>Despesas Mensais</h3>

                        <ul>
                            <li>
                                <strong>Gastos com Mercado:</strong> {formatCurrency(useExpenseStore.getState().marketExpenditure)}
                            </li>
                            <li>
                                <strong>Contas:</strong>{' '}
                                {formatCurrency(
                                    useExpenseStore.getState().billsOption === 'approximate'
                                        ? useExpenseStore.getState().billsApproximateTotal
                                        : useExpenseStore.getState().electricityBill +
                                        useExpenseStore.getState().internetBill +
                                        useExpenseStore.getState().waterBill
                                )}
                            </li>
                            {useExpenseStore.getState().carFinancing && (
                                <li>
                                    <strong>Financiamento de Carro:</strong> {formatCurrency(useExpenseStore.getState().carMonthlyDebt)}
                                </li>
                            )}
                            {useExpenseStore.getState().houseFinancing && (
                                <li>
                                    <strong>Financiamento de Casa:</strong> {formatCurrency(houseMonthlyPayment)}
                                </li>
                            )}

                            <li>
                                <strong>Total de Despesas Mensais:</strong> {formatCurrency(totalExpenses)}
                            </li>
                        </ul>
                    </div>

                    <div className="results-section">
                        <h3>Impostos sobre Consumo</h3>
                        <ul>
                            <li>
                                <strong>Imposto sobre Gastos com Mercado:</strong> {formatCurrency(marketTaxAmount)}
                            </li>
                            <li>
                                <strong>Imposto sobre Contas:</strong> {formatCurrency(billsTaxAmount)}
                            </li>
                            {carTaxAmount > 0 && (
                                <li>
                                    <strong>Imposto sobre Financiamento de Carro:</strong> {formatCurrency(carTaxAmount)}
                                </li>
                            )}
                            {houseTaxAmount > 0 && (
                                <li>
                                    <strong>Imposto sobre Financiamento de Casa:</strong> {formatCurrency(houseTaxAmount)}
                                </li>
                            )}
                            <li>
                                <strong>Total de Impostos sobre Consumo:</strong> {formatCurrency(totalTaxes - incomeTaxAmount)}
                            </li>
                        </ul>

                    </div>


                    {useExpenseStore.getState().houseFinancing && (
                        <div className="results-section">
                            <h3>Detalhes do Financiamento da Casa</h3>
                            <ul>
                                <li>
                                    <strong>Valor Financiado:</strong> {formatCurrency(houseTotalFinanced)}

                                </li>
                                <li>
                                    <strong>Valor das Parcelas Mensais:</strong> {formatCurrency(houseMonthlyPayment)}

                                </li>
                                <li>
                                    <strong>Juros Pagos:</strong> {formatCurrency(houseTotalInterestPaid)}

                                </li>
                                <li>
                                    <strong>Custo Total do Imóvel:</strong> {formatCurrency(houseTotalCost)}

                                </li>
                                <li>
                                    <strong>Imposto Total: </strong> {formatCurrency(houseTaxAmount * houseLoanTerm)}

                                </li>
                                <li>
                                    <strong>Taxa de Juros Utilizada:</strong>{' '}
                                    {useSelicRate
                                        ? `Taxa Selic atual (${(SELIC_HOJE / 12).toFixed(2)}% ao mês)`
                                        : `${houseInterestRate.toFixed(2)}% ao mês`}
                                </li>
                            </ul>
                        </div>
                    )}

                    <div className="results-section">
                        <h3>Total de Impostos</h3>
                        <ul>
                            <li>
                                <strong>Total de Impostos:</strong> {formatCurrency(totalTaxes)}
                            </li>
                            <li>
                                <strong>Impostos sobre Renda Bruta:</strong> {taxPercentageOfIncome.toFixed(2)}%
                            </li>
                        </ul>

                    </div>


                    <div className="results-link">
                        <a href="/rules">Veja como o cálculo é feito</a>
                    </div>
                </div>
            )}
        </form>
    );
};

export default CalculatorForm;
