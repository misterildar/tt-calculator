import { Slider } from '@/components/slider/Slider';
import { Calculator } from '@/components/calculator/Calculator';

import styles from './page.module.scss';
import { Faq } from '@/components/Faq/Faq';
import Header from '@/components/header/Header';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Header />
      <Calculator />
      <Slider />
      <Faq />
    </main>
  );
}
