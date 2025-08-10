'use client';

import { useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { customStyles } from '../utils';
import styles from './Calendar.module.scss';

const normalizeDate = (date: Date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

export const Calendar = () => {
  const [today, setToday] = useState(normalizeDate(new Date()));

  const [selected, setSelected] = useState<Date>(today);

  const disabled = (day: Date) => normalizeDate(day) < today;

  const formatFullDate = (date: Date, locale = 'en-US'): string => {
    return date.toLocaleDateString(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  useEffect(() => {
    const msToMidnight = () => {
      const now = new Date();
      const nextMidnight = new Date(now);
      nextMidnight.setHours(24, 0, 0, 0);
      return nextMidnight.getTime() - now.getTime();
    };
    const timer = setTimeout(() => setToday(normalizeDate(new Date())), msToMidnight());
    return () => clearTimeout(timer);
  }, [today]);

  return (
    <div className={styles.calendar}>
      <input value={formatFullDate(selected)} className={styles.inputDate} readOnly />
      <div className={styles.container}>
        <DayPicker
          mode='single'
          selected={selected}
          onSelect={(date) => {
            if (date) setSelected(date);
          }}
          showOutsideDays
          disabled={disabled}
          classNames={customStyles}
        />
      </div>
    </div>
  );
};
