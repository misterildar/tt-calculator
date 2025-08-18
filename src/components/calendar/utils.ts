import styles from './Calendar/Calendar.module.scss';

export const customStyles = {
  month_grid: styles.month_grid,
  months: styles.months, // Добавляем стиль для контейнера с месяцами
  today: styles.today, // Класс для сегодняшней даты
  selected: styles.selected, // Класс для выделенной даты
  chevron: styles.chevron, // Класс для стрелки
  weekday: styles.weekday, // Класс для дней недели
  nav: styles.nav, // Добавляем стиль для навигации
  caption_label: styles.caption_label, // Добавляем стиль для текста месяца
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
