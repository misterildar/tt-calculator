import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form';
import type { CalculateResponse } from '@/api';

export interface CalculateFormData {
  currentAge: number | '';
  gender: 'male' | 'female' | '';
  initialInvestment: number;
  contributionYears: number;
}

export interface CalculateFormProps {
  onSubmit: (data: CalculateFormData) => void;
}

export interface FormFieldsProps {
  control: Control<CalculateFormData>;
  errors: FieldErrors<CalculateFormData>;
  watchedValues: CalculateFormData;
}

type Option = { readonly label: string; readonly value: string };

export type DropdownProps<T extends FieldValues = FieldValues> = {
  control: Control<T>;
  errors: FieldErrors<T>;
  name: Path<T>;
  label: string;
  options: readonly Option[];
  rules?: object;
  placeholder?: string;
};

export interface InvestmentScenario {
  year: number;
  optimistic: number;
  conservative: number;
  expected: number;
}

export interface InvestmentChartProps {
  data: InvestmentScenario[];
}

export interface CalculatorFormData {
  currentAge: number | '';
  gender: 'male' | 'female' | '';
  initialInvestment: number;
  contributionYears: number;
}

export interface CalculateContentProps {
  isLoading: boolean;
  serverResponse: CalculateResponse | null;
  error?: string | null;
}

export interface ServerResultItem {
  year: number;
  age: number;
  payment: number;
  cumulative_payment: number;
  survivors_count: number;
  fund_size: number;
}
