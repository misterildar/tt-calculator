import { CalculateIcon, LoadingSpinner, Button } from '@/ui';
import { InvestmentChart } from '../investment-chart';
import { CALCULATE_TEXTS } from '../utils/constants';
import { useConsultationModal } from '@/components/consultation-modal';

import { CalculateContentProps } from '../types';
import styles from './CalculateContent.module.scss';

export const CalculateContent = ({ isLoading, chartData }: CalculateContentProps) => {
  const { openModal } = useConsultationModal();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (chartData.length > 0) {
    return (
      <div className={styles.result}>
        <InvestmentChart data={chartData} />
        <Button
          variant='secondary'
          text='Request expert advise'
          className={styles.button}
          onClick={openModal}
        />
      </div>
    );
  }

  return (
    <div className={styles.initialState}>
      <CalculateIcon />
      <p className={styles.description}>{CALCULATE_TEXTS.ICON.iconText}</p>
    </div>
  );
};
