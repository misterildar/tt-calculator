import { CALCULATE_TEXTS } from '../utils/constants';
import { CalculateIcon, LoadingSpinner, Button } from '@/ui';
import { useConsultationModal } from '@/components/consultation-modal';
import { MultipleInvestmentCharts } from '../investment-chart/MultipleInvestmentCharts';

import { CalculateContentProps } from '../types';
import styles from './CalculateContent.module.scss';

export const CalculateContent = ({ isLoading, serverResponse, error }: CalculateContentProps) => {
  const { openModal } = useConsultationModal();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className={styles.initialState}>
        <CalculateIcon />
        <p className={styles.description} style={{ color: '#ff4444' }}>
          Error: {error}
        </p>
      </div>
    );
  }

  if (serverResponse && serverResponse.results.length > 0) {
    return (
      <div className={styles.result}>
        <MultipleInvestmentCharts data={serverResponse.results} summary={serverResponse.summary} />
        <Button
          variant='transparent'
          text='Request expert advice'
          width={621}
          height={90}
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
