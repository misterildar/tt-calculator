import Image from 'next/image';
import { Title } from '@/ui';
import { HowBlock } from './HowBlock';
import { HowData } from './mock.data';
import styles from './HowItWorks.module.scss';

export function HowItWorks() {
  return (
    <div className={styles.section} id='how-it-works'>
      <div className={styles.container}>
        <div className={styles.header}>
          <Title text='How it works' className={styles.title} />
          <p>A detailed look at our innovative approach to retirement wealth management</p>
        </div>
        <div className={styles.content}>
          <Image src={'/images/HowItWorks.png'} width={499} height={499} alt='How It Works' />
          <div className={styles.blocks}>
            {HowData.map((item, index) => (
              <HowBlock key={index} content={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
