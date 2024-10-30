import React from 'react';
import useMonthlyIncome from '../../hooks/useMonthlyIncome';

const MonthlyIncome: React.FC = () => {
    const { monthlyIncome, setMonthlyIncome } = useMonthlyIncome();

    return (
        <div>
            <label>Salário Mensal Bruto:</label>
            <input
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(parseFloat(e.target.value))}
                required
            />
        </div>
    );
};

export default MonthlyIncome;
