'use client';

import { Title } from '@/ui';
import { CalculateForm } from './calculate-form';
import { CalculateContent } from './calculate-content';
import { useCalculateSubmit } from './utils/hooks';

import styles from './Calculate.module.scss';

export const Calculate = () => {
  const { isLoading, error, serverResponse, handleSubmit } = useCalculateSubmit();

  return (
    <section id='calculate' className={styles.section}>
      <Title text='calculate' className={styles.title} />
      <div className={styles.separator}>
        <div className={styles.calculate}>
          <CalculateForm onSubmit={handleSubmit} />
        </div>
        <div className={styles.container}>
          <CalculateContent isLoading={isLoading} serverResponse={serverResponse} error={error} />
        </div>
      </div>
    </section>
  );
};
