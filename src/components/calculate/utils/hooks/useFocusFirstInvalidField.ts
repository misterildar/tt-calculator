import { useRef } from 'react';
import { UseFormTrigger } from 'react-hook-form';
import { CalculateFormData } from '../../types';
import { CALCULATE_CONSTANTS } from '../constants';

export const useFocusFirstInvalidField = (
  watchedValues: CalculateFormData,
  trigger: UseFormTrigger<CalculateFormData>
) => {
  const ageFieldRef = useRef<HTMLInputElement>(null);
  const genderFieldRef = useRef<HTMLDivElement>(null);
  const investmentFieldRef = useRef<HTMLInputElement>(null);

  const focusFirstInvalidField = () => {
    if (
      !watchedValues.currentAge ||
      typeof watchedValues.currentAge === 'string' ||
      watchedValues.currentAge < CALCULATE_CONSTANTS.VALIDATION.MIN_AGE ||
      watchedValues.currentAge > CALCULATE_CONSTANTS.VALIDATION.MAX_AGE
    ) {
      ageFieldRef.current?.focus();
      return;
    }

    if (!watchedValues.gender) {
      const dropdownButton = genderFieldRef.current?.querySelector('button');
      if (dropdownButton) {
        dropdownButton.focus();
      }
      return;
    }

    if (
      !watchedValues.initialInvestment ||
      typeof watchedValues.initialInvestment === 'string' ||
      watchedValues.initialInvestment < CALCULATE_CONSTANTS.VALIDATION.MIN_INVESTMENT
    ) {
      investmentFieldRef.current?.focus();
      return;
    }

    if (watchedValues.contributionYears < CALCULATE_CONSTANTS.VALIDATION.MIN_CONTRIBUTION_YEARS) {
      trigger('contributionYears');
      return;
    }
  };

  return {
    focusFirstInvalidField,
    refs: {
      ageFieldRef,
      genderFieldRef,
      investmentFieldRef,
    },
  };
};
