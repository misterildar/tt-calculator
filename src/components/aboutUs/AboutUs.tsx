import Image from 'next/image';
import { Title } from '@/ui';
import { ABOUT_US_TEXT } from './constants';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <div id='about-us' className={styles.aboutContainer}>
      <Title text='ABOUT US' />
      <div className={styles.aboutContent}>
        <Image
          src={'/images/about_Image.png'}
          className={styles.image}
          alt='image'
          width={780}
          height={512}
        />
        <div className={styles.aboutText}>
          {ABOUT_US_TEXT.map((item, index) => {
            return <p key={`AboutUs${index}`}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
