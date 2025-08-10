'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Arrow, Button } from '@/ui';
import { SlideCard } from './SlideCard';
import { mockSlidesData } from './mockData';

import styles from './Slider.module.scss';

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const SLIDE_WIDTH = 871;
  const SLIDE_GAP = 24;
  const SLIDE_OFFSET = SLIDE_WIDTH + SLIDE_GAP;

  const nextSlide = () => {
    if (currentSlide < mockSlidesData.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.separator}>
        <div className={styles.container}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${currentSlide * SLIDE_OFFSET}px)` }}
          >
            {mockSlidesData.map((slide, index) => (
              <SlideCard key={slide.id} slide={slide} index={index} />
            ))}
          </div>
        </div>
        <button className={styles.prevButton} onClick={prevSlide} disabled={currentSlide === 0}>
<<<<<<< HEAD
          <Arrow
            isOpen={false}
            color='white'
            size={{ width: 32, height: 18 }}
            strokeWidth={3}
            className={styles.leftArrow}
          />
=======
          <Arrow />
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93
        </button>
        <button
          className={styles.nextButton}
          onClick={nextSlide}
          disabled={currentSlide === mockSlidesData.length - 1}
        >
<<<<<<< HEAD
          <Arrow
            isOpen={false}
            color='white'
            size={{ width: 32, height: 18 }}
            strokeWidth={3}
            className={styles.rightArrow}
          />
=======
          <div className={styles.rotate}>
            <Arrow />
          </div>
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93
        </button>
      </div>
      <div className={styles.wrapper}>
        <h3 className={styles.text}>Ready to secure your financial future with our expert team?</h3>
        <Link href='#calculate'>
<<<<<<< HEAD
          <Button text='Calculate your retirement potential' width={574} />
=======
          <Button text='Calculate your retirement potential' width={680} />
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93
        </Link>
      </div>
    </section>
  );
};
