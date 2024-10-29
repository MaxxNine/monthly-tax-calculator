import useExpenseStore from '../store/useExpenseStore';

const useMonthlyIncome = () => {
    const monthlyIncome = useExpenseStore((state) => state.monthlyIncome);
    const setMonthlyIncome = useExpenseStore((state) => state.setMonthlyIncome);

    const calculateINSS = () => {
        if (monthlyIncome <= 1412.00) {
            return monthlyIncome * 0.075;
        } else if (monthlyIncome <= 2666.68) {
            return (monthlyIncome * 0.09) - 21.18;
        } else if (monthlyIncome <= 4000.03) {
            return (monthlyIncome * 0.12) - 101.18;
        } else if (monthlyIncome <= 7786.02) {
            return (monthlyIncome * 0.14) - 181.18;
        } else {
            return 7786.02 * 0.14 - 181.18;
        }
    };

    const calculateIR = () => {
        if (monthlyIncome <= 2259.20) {
            return 0;
        } else if (monthlyIncome <= 2826.65) {
            return (monthlyIncome * 0.075) - 169.44;
        } else if (monthlyIncome <= 3751.05) {
            return (monthlyIncome * 0.15) - 381.44;
        } else if (monthlyIncome <= 4664.68) {
            return (monthlyIncome * 0.225) - 662.77;
        } else {
            return (monthlyIncome * 0.275) - 896.00;
        }
    };

    const calculateFGTS = () => {
        return monthlyIncome * 0.08; // 8% of monthly income
    };

    const calculateTax = () => {
        // Assume income tax is 15% of monthly income
        const inss = calculateINSS();
        const ir = calculateIR();
        const fgts = calculateFGTS();
        return inss + ir + fgts;
    };

    return {
        monthlyIncome,
        setMonthlyIncome,
        calculateTax,
    };
};

export default useMonthlyIncome;
