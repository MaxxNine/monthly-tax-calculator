import { applyCustomFees, applyUsualFees } from '@/constants/functions';
import useExpenseStore from '../store/useExpenseStore';

const useBills = () => {
  const billsOption = useExpenseStore((state) => state.billsOption);
  const setBillsOption = useExpenseStore((state) => state.setBillsOption);

  const billsApproximateTotal = useExpenseStore((state) => state.billsApproximateTotal);
  const setBillsApproximateTotal = useExpenseStore((state) => state.setBillsApproximateTotal);

  const electricityBill = useExpenseStore((state) => state.electricityBill);
  const setElectricityBill = useExpenseStore((state) => state.setElectricityBill);

  const internetBill = useExpenseStore((state) => state.internetBill);
  const setInternetBill = useExpenseStore((state) => state.setInternetBill);

  const waterBill = useExpenseStore((state) => state.waterBill);
  const setWaterBill = useExpenseStore((state) => state.setWaterBill);

  const calculateTax = () => {
    let electricityTax = 0;
    let internetTax = 0;
    let waterTax = 0;

    if (billsOption === 'approximate') {
      // Applying an overall approximate tax rate
      return applyUsualFees(billsApproximateTotal)
    } else {
      // Calculate specific tax based on each type of bill
      electricityTax = applyUsualFees(electricityBill);
      internetTax = applyCustomFees(internetBill, 0.25, 0.0065, 0.03);
      waterTax = applyUsualFees(waterBill);
      return electricityTax + internetTax + waterTax;
    }
  };

  return {
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
    calculateTax,
  };
};

export default useBills;
