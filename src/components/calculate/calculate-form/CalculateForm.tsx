import { useForm } from 'react-hook-form';

import { isSubmitDisabled } from '../utils/validation';
import { CALCULATE_CONSTANTS, CALCULATE_TEXTS } from '../utils/constants';
import { useFocusFirstInvalidField } from '../utils/hooks/useFocusFirstInvalidField';
import {
  AgeField,
  GenderField,
  InvestmentField,
  DisclaimerField,
  ContributionYearsField,
} from '../form-fields';
import { Button } from '@/ui';

import { CalculateFormProps, CalculateFormData } from '../types';
import styles from './CalculateForm.module.scss';

export const CalculateForm = ({ onSubmit }: CalculateFormProps) => {
  const {
    reset,
    watch,
    trigger,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CalculateFormData>({
    defaultValues: CALCULATE_CONSTANTS.DEFAULT_VALUES,
    mode: 'all',
  });

  const watchedValues = watch();

  const { focusFirstInvalidField, refs } = useFocusFirstInvalidField(watchedValues, trigger);

  const { ageFieldRef, genderFieldRef, investmentFieldRef } = refs;

  const handleButtonClick = (e: React.MouseEvent) => {
    if (isSubmitDisabled(watchedValues)) {
      e.preventDefault();
      focusFirstInvalidField();
    }
  };

  const handleFormSubmit = (data: CalculateFormData) => {
    onSubmit(data);
    reset(CALCULATE_CONSTANTS.DEFAULT_VALUES);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <AgeField control={control} errors={errors} ref={ageFieldRef} />
      <GenderField control={control} errors={errors} ref={genderFieldRef} />
      <InvestmentField control={control} errors={errors} ref={investmentFieldRef} />
      <ContributionYearsField control={control} watchedValues={watchedValues} errors={errors} />
      <DisclaimerField />
      <Button
        type='submit'
        variant='calculate'
        onClick={handleButtonClick}
        text={CALCULATE_TEXTS.BUTTON.submit}
      />
    </form>
  );
};
