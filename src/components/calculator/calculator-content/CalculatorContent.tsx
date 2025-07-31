import { CalculatorIcon, LoadingSpinner, Button } from '@/ui';
import { InvestmentChart } from '../investment-chart';
import { CALCULATOR_TEXTS } from '../utils/constants';

import { CalculatorContentProps } from '../types';
import styles from './CalculatorContent.module.scss';

export const CalculatorContent = ({ isLoading, chartData }: CalculatorContentProps) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (chartData.length > 0) {
    return (
      <div className={styles.result}>
        <InvestmentChart data={chartData} />
        <Button variant='secondary' text='Request expert advise' className={styles.button} />
      </div>
    );
  }

  return (
    <div className={styles.initialState}>
      <CalculatorIcon />
      <p className={styles.description}>{CALCULATOR_TEXTS.ICON.iconText}</p>
    </div>
  );
};
