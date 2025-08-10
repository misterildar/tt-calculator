'use client';

import { useForm } from 'react-hook-form';
import { Input } from '@/ui/input';
import { Button } from '@/ui/button';
import { ScheduleStepProps } from '../types';
import { MODAL_TEXTS, TIME_SLOTS } from '../constants';
import styles from '../ConsultationModal.module.scss';

export interface ScheduleData {
  selectedDate: string;
  selectedTime: string;
}

export const ScheduleStep = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  onNext,
  onBack,
}: ScheduleStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ScheduleData>({
    defaultValues: {
      selectedDate,
      selectedTime,
    },
  });

  const watchedTime = watch('selectedTime');

  const onSubmit = (data: ScheduleData) => {
    setSelectedDate(data.selectedDate);
    setSelectedTime(data.selectedTime);
    onNext();
  };

  return (
    <div className={styles.scheduleStep}>
      <p className={styles.description}>{MODAL_TEXTS.SCHEDULE.description}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='date'
          label={MODAL_TEXTS.SCHEDULE.dateLabel}
          error={errors.selectedDate?.message}
          {...register('selectedDate', {
            required: 'Выберите дату',
          })}
        />

        <div className={styles.formGroup}>
          <label>{MODAL_TEXTS.SCHEDULE.timeLabel}</label>
          <div className={styles.timeSlots}>
            {TIME_SLOTS.map((slot) => (
              <label
                key={slot.id}
                className={`${styles.timeSlot} ${watchedTime === slot.id ? styles.selected : ''}`}
              >
                <input
                  type='radio'
                  value={slot.id}
                  {...register('selectedTime', {
                    required: 'Выберите время',
                  })}
                />
                {slot.label}
              </label>
            ))}
          </div>
          {errors.selectedTime && (
            <span className={styles.errorMessage}>{errors.selectedTime.message}</span>
          )}
        </div>

        <div className={styles.buttonGroup}>
          <Button
            type='button'
            variant='secondary'
            text={MODAL_TEXTS.SCHEDULE.backButton}
            onClick={onBack}
          />
          <Button type='submit' variant='primary' text={MODAL_TEXTS.SCHEDULE.button} />
        </div>
      </form>
    </div>
  );
};
