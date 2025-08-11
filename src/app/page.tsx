import { Slider } from '@/components/slider/Slider';
import { Calculate } from '@/components/calculate/Calculate';
import { Poster } from '@/components/poster/Poster';

import { AboutUs } from '@/components/aboutUs/AboutUs';

import styles from './page.module.scss';
import { Faq } from '@/components/Faq/Faq';
import KeyAdvantages from '@/components/keyAdvantagesBlock/KeyAdvantages';
import WhyChooseTT from '@/components/whyChooseTTBlock/WhyChooseTT';
import { HowItWorks } from '@/components/howItWorks/HowItWorks';

export default function HomePage() {
  return (
    <div className={styles.main} id='top'>
      <Poster />
      <HowItWorks />
      <Calculate />
      <KeyAdvantages />
      <WhyChooseTT />
      <Faq />
      <AboutUs />
      <Slider />
    </div>
  );
}
