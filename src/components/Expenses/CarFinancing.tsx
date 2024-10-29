import React from 'react';
import useCarFinancing from '../../hooks/useCarFinancing';

const CarFinancing: React.FC = () => {
    const {
        carFinancing,
        setCarFinancing,
        carFullValue,
        setCarFullValue,
        carMonthlyDebt,
        setCarMonthlyDebt,
        carStartingAmount,
        setCarStartingAmount,
    } = useCarFinancing();

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={carFinancing}
                    onChange={(e) => setCarFinancing(e.target.checked)}
                />
                Financiamento de Carro
            </label>
            {carFinancing && (
                <div>
                    <label>Valor Total do Carro:</label>
                    <input
                        type="number"
                        value={carFullValue}
                        onChange={(e) => setCarFullValue(parseFloat(e.target.value))}
                    />
                    <label>Valor de entrada:</label>
                    <input
                        type="number"
                        value={carStartingAmount}
                        onChange={(e) => setCarStartingAmount(parseFloat(e.target.value))}
                    />
                    <label>Dívida Mensal:</label>
                    <input
                        type="number"
                        value={carMonthlyDebt}
                        onChange={(e) => setCarMonthlyDebt(parseFloat(e.target.value))}
                    />
                </div>
            )}
        </div>
    );
};

export default CarFinancing;
