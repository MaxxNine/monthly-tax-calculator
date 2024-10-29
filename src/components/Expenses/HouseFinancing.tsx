import React, { useEffect } from 'react';
import useHouseFinancing from '../../hooks/useHouseFinancing';

const HouseFinancing: React.FC = () => {
    const {
        houseFinancing,
        setHouseFinancing,
        useSelicRate,
        setUseSelicRate,
        houseValue,
        setHouseValue,
        initialPayment,
        setInitialPayment,
        interestRate,
        setInterestRate,
        loanTermMonths,
        setLoanTermMonths,
        monthlyPayment,
        calculateLoanDetails,
    } = useHouseFinancing();

    useEffect(() => {
        if (houseFinancing) {
            calculateLoanDetails();
        }
    }, [houseFinancing, houseValue, initialPayment, interestRate, loanTermMonths, useSelicRate]);

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={houseFinancing}
                    onChange={(e) => setHouseFinancing(e.target.checked)}
                />
                Financiamento de Casa
            </label>
            {houseFinancing && (
                <div>
                    <label>Valor do Imóvel:</label>
                    <input
                        type="number"
                        value={houseValue}
                        onChange={(e) => setHouseValue(parseFloat(e.target.value))}
                    />
                    <label>Pagamento Inicial:</label>
                    <input
                        type="number"
                        value={initialPayment}
                        onChange={(e) => setInitialPayment(parseFloat(e.target.value))}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={useSelicRate}
                            onChange={(e) => setUseSelicRate(e.target.checked)}
                        />
                        Usar taxa Selic de hoje
                    </label>
                    {!useSelicRate && (
                        <div>
                            <label>Taxa de Juros Mensais (%):</label>
                            <input
                                type="number"
                                value={interestRate}
                                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                            />
                        </div>
                    )}
                    <label>Prazo em Meses:</label>
                    <input
                        type="number"
                        value={loanTermMonths}
                        onChange={(e) => setLoanTermMonths(parseInt(e.target.value))}
                    />
                    {monthlyPayment > 0 && (
                        <div>
                            <h4>Valor das Parcelas Mensais: R$ {monthlyPayment.toFixed(2)}</h4>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default HouseFinancing;
