import { CalculateIcon, LoadingSpinner, Button } from '@/ui';
import { InvestmentChart } from '../investment-chart';
import { CALCULATE_TEXTS } from '../utils/constants';
<<<<<<< HEAD
import { useConsultationModal } from '@/components/consultation-modal';
=======
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93

import { CalculateContentProps } from '../types';
import styles from './CalculateContent.module.scss';

export const CalculateContent = ({ isLoading, chartData }: CalculateContentProps) => {
<<<<<<< HEAD
  const { openModal } = useConsultationModal();

=======
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (chartData.length > 0) {
    return (
      <div className={styles.result}>
        <InvestmentChart data={chartData} />
<<<<<<< HEAD
        <Button
          variant='secondary'
          text='Request expert advise'
          className={styles.button}
          onClick={openModal}
        />
=======
        <Button variant='secondary' text='Request expert advise' className={styles.button} />
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93
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
