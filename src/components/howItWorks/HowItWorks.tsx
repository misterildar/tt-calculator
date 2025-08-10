import Image from 'next/image';
<<<<<<< HEAD
import { Title } from '@/ui';
import { HowBlock } from './HowBlock';
import { HowData } from './mock.data';
import styles from './HowItWorks.module.scss';
=======
import styles from './HowItWorks.module.scss';
import { HowBlock } from './HowBlock';
import { HowData } from './mock.data';
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93

export function HowItWorks() {
  return (
    <div className={styles.section} id='how-it-works'>
      <div className={styles.container}>
        <div className={styles.header}>
<<<<<<< HEAD
          <Title text='How it works' className={styles.title} />
          <p>A detailed look at our innovative approach to retirement wealth management</p>
        </div>
        <div className={styles.content}>
          <Image src={'/images/HowItWorks.png'} width={499} height={499} alt='How It Works' />
=======
          <h2 className={styles.heading}>How it works</h2>
          <p className={styles.sub_head}>
            A detailed look at our innovative approach to retirement wealth management
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.preview_container}>
            <Image src={'/images/HowItWorks.png'} width={499} height={499} alt='How It Works' />
          </div>
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93
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
