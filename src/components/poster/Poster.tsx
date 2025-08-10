'use client';

import Link from 'next/link';
import { Button } from '@/ui/button';
import { MAIN_TEXT } from './constants';
import { useConsultationModal } from '@/components/consultation-modal';

import styles from './Poster.module.scss';

export const Poster = () => {
  const { openModal } = useConsultationModal();

  return (
    <section className={styles.posterContainer}>
      <div className={styles.container}>
        <div className={styles.posterContent}>
          <p className={styles.posterText}>
            {MAIN_TEXT.text}
            <Link href=''>{MAIN_TEXT.link}</Link>
          </p>
          <div className={styles.buttons}>
            <Link href='#calculate'>
              <Button text='Calculate' width={210} />
            </Link>
            <Button
              variant='transparent'
              text='Request expert advice'
              width={450}
              onClick={openModal}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
