import { create } from 'zustand';

interface ExpenseState {
  monthlyIncome: number;
  setMonthlyIncome: (value: number) => void;

  marketExpenditure: number;
  setMarketExpenditure: (value: number) => void;

  // Bills
  billsOption: 'approximate' | 'individual';
  setBillsOption: (option: 'approximate' | 'individual') => void;

  billsApproximateTotal: number;
  setBillsApproximateTotal: (value: number) => void;

  electricityBill: number;
  setElectricityBill: (value: number) => void;

  internetBill: number;
  setInternetBill: (value: number) => void;

  waterBill: number;
  setWaterBill: (value: number) => void;

  // Car Financing
  carFinancing: boolean;
  setCarFinancing: (value: boolean) => void;

  carFullValue: number;
  setCarFullValue: (value: number) => void;

  carMonthlyDebt: number;
  setCarMonthlyDebt: (value: number) => void;

  carStartingAmount: number;
  setCarStartingAmount: (value: number) => void;

  // House Financing
  houseFinancing: boolean;
  setHouseFinancing: (value: boolean) => void;
  
  // New state variable
  useSelicRate: boolean;
  setUseSelicRate: (value: boolean) => void;

  houseValue: number;
  setHouseValue: (value: number) => void;

  initialPayment: number;
  setInitialPayment: (value: number) => void;

  interestRate: number;
  setInterestRate: (value: number) => void;

  loanTermMonths: number;
  setLoanTermMonths: (value: number) => void;

  monthlyPayment: number;
  setMonthlyPayment: (value: number) => void;

  totalFinanced: number;
  setTotalFinanced: (value: number) => void;

  totalInterestPaid: number;
  setTotalInterestPaid: (value: number) => void;

  totalCost: number;
  setTotalCost: (value: number) => void;

  // Results
  totalExpenses: number;
  setTotalExpenses: (value: number) => void;

  totalTaxes: number;
  setTotalTaxes: (value: number) => void;

  taxPercentageOfIncome: number;
  setTaxPercentageOfIncome: (value: number) => void;
}

const useExpenseStore = create<ExpenseState>((set) => ({
  monthlyIncome: 0,
  setMonthlyIncome: (value) => set({ monthlyIncome: value }),

  marketExpenditure: 0,
  setMarketExpenditure: (value) => set({ marketExpenditure: value }),

  billsOption: 'approximate',
  setBillsOption: (option) => set({ billsOption: option }),

  billsApproximateTotal: 0,
  setBillsApproximateTotal: (value) => set({ billsApproximateTotal: value }),

  electricityBill: 0,
  setElectricityBill: (value) => set({ electricityBill: value }),

  internetBill: 0,
  setInternetBill: (value) => set({ internetBill: value }),

  waterBill: 0,
  setWaterBill: (value) => set({ waterBill: value }),

  carFinancing: false,
  setCarFinancing: (value) => set({ carFinancing: value }),

  carFullValue: 0,
  setCarFullValue: (value) => set({ carFullValue: value }),

  carMonthlyDebt: 0,
  setCarMonthlyDebt: (value) => set({ carMonthlyDebt: value }),

  carStartingAmount: 0,
  setCarStartingAmount: (value) => set({ carStartingAmount: value }),

  // House Financing
  houseFinancing: false,
  setHouseFinancing: (value) => set({ houseFinancing: value }),

  useSelicRate: true, // Default to true
  setUseSelicRate: (value) => set({ useSelicRate: value }),
  
  houseValue: 0,
  setHouseValue: (value) => set({ houseValue: value }),

  initialPayment: 0,
  setInitialPayment: (value) => set({ initialPayment: value }),

  interestRate: 0,
  setInterestRate: (value) => set({ interestRate: value }),

  loanTermMonths: 0,
  setLoanTermMonths: (value) => set({ loanTermMonths: value }),

  monthlyPayment: 0,
  setMonthlyPayment: (value) => set({ monthlyPayment: value }),

  totalFinanced: 0,
  setTotalFinanced: (value) => set({ totalFinanced: value }),

  totalInterestPaid: 0,
  setTotalInterestPaid: (value) => set({ totalInterestPaid: value }),

  totalCost: 0,
  setTotalCost: (value) => set({ totalCost: value }),

  totalExpenses: 0,
  setTotalExpenses: (value) => set({ totalExpenses: value }),

  totalTaxes: 0,
  setTotalTaxes: (value) => set({ totalTaxes: value }),

  taxPercentageOfIncome: 0,
  setTaxPercentageOfIncome: (value) => set({ taxPercentageOfIncome: value }),
}));

export default useExpenseStore;
