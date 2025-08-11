import { useForm } from 'react-hook-form';

import {
  AgeField,
  GenderField,
  InvestmentField,
  DisclaimerField,
  ContributionYearsField,
} from '../form-fields';
import { Button } from '@/ui';
import { isSubmitDisabled } from '../utils/validation';
import { useFocusFirstInvalidField } from '../utils/hooks';
import { CALCULATE_CONSTANTS, CALCULATE_TEXTS } from '../utils/constants';

import { CalculateFormProps, CalculateFormData } from '../types';
import styles from './CalculateForm.module.scss';

export const CalculateForm = ({ onSubmit }: CalculateFormProps) => {
  const {
    watch,
    trigger,
    control,
    handleSubmit,
    formState: { errors, isValid },
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

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <AgeField control={control} errors={errors} ref={ageFieldRef} />
      <GenderField control={control} errors={errors} ref={genderFieldRef} />
      <InvestmentField control={control} errors={errors} ref={investmentFieldRef} />
      <ContributionYearsField control={control} watchedValues={watchedValues} errors={errors} />
      <DisclaimerField />
      <Button
        type='submit'
        variant={isValid ? 'primary' : 'calculate'}
        height={90}
        onClick={handleButtonClick}
        text={CALCULATE_TEXTS.BUTTON.submit}
      />
    </form>
  );
};
