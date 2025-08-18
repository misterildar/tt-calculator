import { useMemo } from 'react';

const TIME_SLOT_END_HOURS = new Map([
  ['morning', 12],
  ['early-afternoon', 15],
  ['late-afternoon', 18],
  ['evening', 21],
]);

export const useTimeSlotValidation = () => {
  const isTimeSlotDisabled = useMemo(() => {
    return (slotId: string, selectedDate: string) => {
      const today = new Date();
      const selectedDateObj = new Date(selectedDate);
      if (selectedDateObj.toDateString() !== today.toDateString()) {
        return false;
      }
      const currentHour = today.getHours();
      const endHour = TIME_SLOT_END_HOURS.get(slotId);
      return endHour ? currentHour >= endHour : false;
    };
  }, []);
  return { isTimeSlotDisabled };
};
