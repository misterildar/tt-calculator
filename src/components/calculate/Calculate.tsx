'use client';

import { useState } from 'react';

import { Title } from '@/ui';
import { CalculateForm } from './calculate-form';
import { CalculateContent } from './calculate-content';
import { getInvestmentData } from './api/investmentDataService';

import { CalculateFormData, InvestmentScenario } from './types';
import styles from './Calculate.module.scss';

export const Calculate = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [chartData, setChartData] = useState<InvestmentScenario[]>([]);

  const handleFormSubmit = async (data: CalculateFormData) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const result = getInvestmentData(data);
    setChartData(result);
    setIsLoading(false);
  };

  return (
    <section id='calculate' className={styles.section}>
      <Title text='calculate' className={styles.title} />
      <div className={styles.separator}>
        <div className={styles.calculate}>
          <CalculateForm onSubmit={handleFormSubmit} />
        </div>
        <div className={styles.container}>
          <CalculateContent isLoading={isLoading} chartData={chartData} />
        </div>
      </div>
    </section>
  );
};
