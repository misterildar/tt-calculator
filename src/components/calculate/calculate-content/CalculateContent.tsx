import { CALCULATE_TEXTS } from '../utils/constants';
import { CalculateIcon, LoadingSpinner } from '@/ui';

import { MultipleInvestmentCharts } from '../investment-chart/MultipleInvestmentCharts';

import { CalculateContentProps } from '../types';
import styles from './CalculateContent.module.scss';

export const CalculateContent = ({
  isLoading,
  serverResponse,
  error,
  multiChart = true,
}: CalculateContentProps) => {
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
      <MultipleInvestmentCharts
        data={serverResponse.results}
        summary={serverResponse.summary}
        multiChart={multiChart}
      />
    );
  }

  return (
    <div className={styles.initialState}>
      <CalculateIcon />
      <p className={styles.description}>{CALCULATE_TEXTS.ICON.iconText}</p>
    </div>
  );
};
