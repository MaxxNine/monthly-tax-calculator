import React from 'react';
import useBills from '../../hooks/useBills';

const Bills: React.FC = () => {
    const {
        billsOption,
        setBillsOption,
        billsApproximateTotal,
        setBillsApproximateTotal,
        electricityBill,
        setElectricityBill,
        internetBill,
        setInternetBill,
        waterBill,
        setWaterBill,
    } = useBills();

    return (
        <div>
            <h3>Contas Mensais Médias</h3>
            <label>
                <input
                    type="radio"
                    value="approximate"
                    checked={billsOption === 'approximate'}
                    onChange={() => setBillsOption('approximate')}
                />
                Valor Aproximado Total
            </label>
            <label>
                <input
                    type="radio"
                    value="individual"
                    checked={billsOption === 'individual'}
                    onChange={() => setBillsOption('individual')}
                />
                Valores Individuais
            </label>

            {billsOption === 'approximate' ? (
                <div>
                    <label>Total Aproximado das Contas:</label>
                    <input
                        type="number"
                        value={billsApproximateTotal}
                        onChange={(e) => setBillsApproximateTotal(parseFloat(e.target.value))}
                    />
                </div>
            ) : (
                <div>
                    <div>
                        <label>Conta de Luz:</label>
                        <input
                            type="number"
                            value={electricityBill}
                            onChange={(e) => setElectricityBill(parseFloat(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Conta de Internet:</label>
                        <input
                            type="number"
                            value={internetBill}
                            onChange={(e) => setInternetBill(parseFloat(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Conta de Água:</label>
                        <input
                            type="number"
                            value={waterBill}
                            onChange={(e) => setWaterBill(parseFloat(e.target.value))}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Bills;
