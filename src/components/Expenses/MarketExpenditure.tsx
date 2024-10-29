import React from 'react';
import useMarketExpenditure from '../../hooks/useMarketExpenditure';

const MarketExpenditure: React.FC = () => {
    const { marketExpenditure, setMarketExpenditure } = useMarketExpenditure();

    return (
        <div>
            <label>Gastos Mensais com Mercado:</label>
            <input
                type="number"
                value={marketExpenditure}
                onChange={(e) => setMarketExpenditure(parseFloat(e.target.value))}
                required
            />
        </div>
    );
};

export default MarketExpenditure;
