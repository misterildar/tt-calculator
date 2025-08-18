'use client';

import { useForm } from 'react-hook-form';

import { Button } from '@/ui/button';
import { ScheduleStepProps } from '../../types';
import { Calendar } from '@/components/calendar';
import { MODAL_TEXTS, TIME_SLOTS } from '../../constants';
import { useTimeSlotValidation } from './useTimeSlotValidation';

import styles from './ScheduleStep.module.scss';

export interface ScheduleData {
  selectedDate: string;
  selectedTime: string;
}

export const ScheduleStep = ({
  onNext,
  onBack,
  selectedDate,
  selectedTime,
  setSelectedTime,
  setSelectedDate,
}: ScheduleStepProps) => {
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ScheduleData>({
    defaultValues: {
      selectedDate,
      selectedTime,
    },
  });

  const watchedTime = watch('selectedTime');

  const { isTimeSlotDisabled } = useTimeSlotValidation();

  const handleDateSelect = (date: string) => {
    setValue('selectedDate', date);
    setSelectedDate(date);
  };

  const onSubmit = (data: ScheduleData) => {
    setSelectedDate(data.selectedDate);
    setSelectedTime(data.selectedTime);
    //TODO
    console.log(data);
    onNext();
  };

  return (
    <div className={styles.scheduleStep}>
      <p className={styles.description}>{MODAL_TEXTS.SCHEDULE.description}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Calendar onDateSelect={handleDateSelect} />
        <div className={styles.formGroup}>
          <label className={styles.label}>{MODAL_TEXTS.SCHEDULE.timeLabel}</label>
          <div className={styles.labelGroup}>
            {TIME_SLOTS.map((slot) => {
              const isDisabled = isTimeSlotDisabled(slot.id, selectedDate);
              return (
                <label
                  key={slot.id}
                  className={`${styles.timeSlot} ${
                    watchedTime === slot.id ? styles.selected : ''
                  } ${isDisabled ? styles.disabled : ''}`}
                >
                  <input
                    type='radio'
                    value={slot.id}
                    disabled={isDisabled}
                    {...register('selectedTime', {
                      required: 'Select time',
                    })}
                  />
                  {slot.label}
                </label>
              );
            })}
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
