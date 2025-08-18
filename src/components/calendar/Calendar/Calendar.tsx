'use client';

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { CalendarIcon } from '@/ui';
import { customStyles, formatDate } from '../utils';
import styles from './Calendar.module.scss';

interface CalendarProps {
  onDateSelect?: (date: string) => void;
}

export const Calendar = ({ onDateSelect }: CalendarProps) => {
  const today = new Date();

  const [selected, setSelected] = useState<Date>(today);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setSelected(date);
    onDateSelect?.(formatDate(date));
    toggleCalendar();
  };

  const displayDate = selected.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const disablePastDates = (day: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return day < today;
  };

  return (
    <div className={styles.calendar}>
      <label className={styles.label}>Preferred Day for Call</label>
      <div className={styles.todayDate}>
        <input value={displayDate} className={styles.inputDate} readOnly />
        <button type='button' className={styles.calendarIcon} onClick={toggleCalendar}>
          <CalendarIcon />
        </button>
      </div>
      {isCalendarOpen && (
        <DayPicker
          mode='single'
          selected={selected}
          onSelect={handleDateSelect}
          showOutsideDays
          disabled={disablePastDates}
          classNames={customStyles}
        />
      )}
    </div>
  );
};
