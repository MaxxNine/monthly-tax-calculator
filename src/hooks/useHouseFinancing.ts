import { SELIC_HOJE } from '@/constants/taxes';
import useExpenseStore from '../store/useExpenseStore';

const useHouseFinancing = () => {
  const houseFinancing = useExpenseStore((state) => state.houseFinancing);
  const setHouseFinancing = useExpenseStore((state) => state.setHouseFinancing);

  const useSelicRate = useExpenseStore((state) => state.useSelicRate);
  const setUseSelicRate = useExpenseStore((state) => state.setUseSelicRate);


  const houseValue = useExpenseStore((state) => state.houseValue);
  const setHouseValue = useExpenseStore((state) => state.setHouseValue);

  const initialPayment = useExpenseStore((state) => state.initialPayment);
  const setInitialPayment = useExpenseStore((state) => state.setInitialPayment);

  const interestRate = useExpenseStore((state) => state.interestRate);
  const setInterestRate = useExpenseStore((state) => state.setInterestRate);

  const loanTermMonths = useExpenseStore((state) => state.loanTermMonths);
  const setLoanTermMonths = useExpenseStore((state) => state.setLoanTermMonths);

  const monthlyPayment = useExpenseStore((state) => state.monthlyPayment);
  const setMonthlyPayment = useExpenseStore((state) => state.setMonthlyPayment);

  const totalFinanced = useExpenseStore((state) => state.totalFinanced);
  const setTotalFinanced = useExpenseStore((state) => state.setTotalFinanced);

  const totalInterestPaid = useExpenseStore((state) => state.totalInterestPaid);
  const setTotalInterestPaid = useExpenseStore((state) => state.setTotalInterestPaid);

  const totalCost = useExpenseStore((state) => state.totalCost);
  const setTotalCost = useExpenseStore((state) => state.setTotalCost);

  const calculateLoanDetails = () => {
    if (houseValue > 0 && loanTermMonths > 0) {
      const financedAmount = houseValue - initialPayment;
      setTotalFinanced(financedAmount);

      // Use Selic rate if useSelicRate is true
      const rate = useSelicRate ? (SELIC_HOJE / 12) / 100 : interestRate / 100;
      console.log(rate);

      if (useSelicRate) {
        setInterestRate(SELIC_HOJE / 12);
      }

      const payment =
        (financedAmount * rate) /
        (1 - Math.pow(1 + rate, -loanTermMonths));

      setMonthlyPayment(payment);

      const totalPayment = payment * loanTermMonths;
      const totalInterest = totalPayment - financedAmount;
      setTotalInterestPaid(totalInterest);
      setTotalCost(totalPayment + initialPayment);
    }
  };

  const calculateTotalTaxes = () => {
    // IOF is 3.38% upon the total financed amount
    const IOF = totalCost * 0.0338;

    // ITBI is 4% upon house value
    const ITBI = houseValue * 0.04;

    const totalTaxes = IOF + ITBI;
    return totalTaxes;
  }
  const calculateTax = () => {
    if(!houseFinancing)
      return 0;
    const fullTaxes = calculateTotalTaxes();
    const taxesRate = fullTaxes/totalCost;
    return monthlyPayment*taxesRate;

  };

  return {
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
    calculateTax,
    totalCost,
    totalFinanced,
    totalInterestPaid,
  };
};

export default useHouseFinancing;
