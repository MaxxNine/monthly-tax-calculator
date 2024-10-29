import useExpenseStore from '../store/useExpenseStore';
import { applyUsualFees } from '@/constants/functions';

const useMarketExpenditure = () => {
  const marketExpenditure = useExpenseStore((state) => state.marketExpenditure);
  const setMarketExpenditure = useExpenseStore((state) => state.setMarketExpenditure);

  const calculateTax = () => {
    return applyUsualFees(marketExpenditure);
  };

  return {
    marketExpenditure,
    setMarketExpenditure,
    calculateTax,
  };
};

export default useMarketExpenditure;
