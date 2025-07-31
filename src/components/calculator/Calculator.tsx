'use client';

import { useState } from 'react';

import { Title } from '@/ui';
import { CalculatorForm } from './calculator-form';
import { CalculatorContent } from './calculator-content';
import { getInvestmentData } from './api/investmentDataService';

import { CalculatorFormData, InvestmentScenario } from './types';
import styles from './Calculator.module.scss';

export const Calculator = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [chartData, setChartData] = useState<InvestmentScenario[]>([]);

  const handleFormSubmit = async (data: CalculatorFormData) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const result = getInvestmentData(data);
    setChartData(result);
    setIsLoading(false);
  };

  return (
    <section id='calculator' className={styles.section}>
      <Title text='calculate' className={styles.title} />
      <div className={styles.separator}>
        <div className={styles.calculator}>
          <CalculatorForm onSubmit={handleFormSubmit} />
        </div>
        <div className={styles.container}>
          <CalculatorContent isLoading={isLoading} chartData={chartData} />
        </div>
      </div>
    </section>
  );
};
