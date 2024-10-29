import { applyCustomFees } from '@/constants/functions';
import useExpenseStore from '../store/useExpenseStore';

const useCarFinancing = () => {
  const carFinancing = useExpenseStore((state) => state.carFinancing);
  const setCarFinancing = useExpenseStore((state) => state.setCarFinancing);

  const carFullValue = useExpenseStore((state) => state.carFullValue);
  const setCarFullValue = useExpenseStore((state) => state.setCarFullValue);

  const carStartingAmount = useExpenseStore((state) => state.carStartingAmount);
  const setCarStartingAmount = useExpenseStore((state) => state.setCarStartingAmount);

  const carMonthlyDebt = useExpenseStore((state) => state.carMonthlyDebt);
  const setCarMonthlyDebt = useExpenseStore((state) => state.setCarMonthlyDebt);

  const calculateVehicleValue = () => {
    // Ensure carNoteValue is provided
    if (carFullValue > 0) {
      const vehicleValue = carFullValue / 1.154;
      return vehicleValue;
    }
    return 0;
  };

  const calculateFullTax = () => {
    // Tax rates
    const icmsRate = 0.18; // 18%
    const ipiRate = 0.10; // 10%
    const mvaRate = 0.054; // 5.4% upon vehicle value%
    const iofRate = 0.0338; // 3.38%

    const vehicleValue = calculateVehicleValue();
    // Calculations
    const usualFees = applyCustomFees(vehicleValue, icmsRate, 0.021, 0.103);
    const ipi = vehicleValue * ipiRate; // Added to vehicle value
    const mva = vehicleValue * mvaRate;
    const iof = (carFullValue - carStartingAmount) * iofRate;
    // Return total taxes including IOF
    return usualFees + ipi + mva + iof;
  }

  const calculateTax = () => {
    if (!carFinancing) {
      return 0;
    }

    return carMonthlyDebt * (calculateFullTax()/calculateVehicleValue());
  };

  return {
    carFinancing,
    setCarFinancing,
    carFullValue,
    setCarFullValue,
    carStartingAmount,
    setCarStartingAmount,
    carMonthlyDebt,
    setCarMonthlyDebt,
    calculateTax,
  };
};

export default useCarFinancing;
