import Image from 'next/image';
<<<<<<< HEAD
import { Title } from '@/ui';
=======
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93
import { ABOUT_US_TEXT } from './constants';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <div id='about-us' className={styles.aboutContainer}>
<<<<<<< HEAD
      <Title text='ABOUT US' />
=======
      <p className={styles.aboutHeader}>ABOUT US</p>
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93
      <div className={styles.aboutContent}>
        <div className={styles.aboutImageContainer}>
          <Image
            src={'/images/about_Image.png'}
            alt={'Our Team'}
            fill
            sizes='(max-width: 780px) 100vw, 50vw'
            className={styles.aboutImage}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className={styles.aboutText}>
          {ABOUT_US_TEXT.map((item, index) => {
            return <p key={`AboutUs${index}`}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
