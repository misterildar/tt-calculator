import styles from './Calendar/Calendar.module.scss';

export const customStyles = {
  today: styles.today, // Класс для сегодняшней даты
  selected: styles.selected, // Класс для выделенной даты
  chevron: styles.chevron, // Класс для стрелки
  weekday: styles.weekday, // Класс для дней недели
  month_grid: styles.month_grid,
  nav: styles.nav, // Добавляем стиль для навигации
  caption: styles.caption, // Добавляем стиль для контейнера с месяцем
  caption_label: styles.caption_label, // Добавляем стиль для текста месяца
  months: styles.months, // Добавляем стиль для контейнера с месяцами
  button: styles.button, // Добавляем стиль для дней
  outside: styles.outside,
  // day: styles.day,
};
