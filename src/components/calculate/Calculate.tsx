'use client';

import { Title } from '@/ui';
import { CalculateForm } from './calculate-form';
import { CalculateContent } from './calculate-content';
import { useCalculateSubmit } from './utils/hooks';

import styles from './Calculate.module.scss';
import { DisclaimerField } from './form-fields/FormFields';

export const Calculate = ({ multiChart = true }: { multiChart?: boolean }) => {
  const { isLoading, error, serverResponse, handleSubmit } = useCalculateSubmit();

  return (
    <section id='calculate' className={styles.section}>
      <Title text='calculate' className={styles.title} />
      <div className={styles.separator}>
        <CalculateForm
          onSubmit={handleSubmit}
          serverResponse={serverResponse}
          multiChart={multiChart}
        />
        <div className={styles.container}>
          <CalculateContent
            isLoading={isLoading}
            serverResponse={serverResponse}
            error={error}
            multiChart={multiChart}
          />
          {!multiChart && <DisclaimerField />}
        </div>
      </div>
    </section>
  );
};
