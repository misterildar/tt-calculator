import styles from './InvestmentChart.module.scss';

interface IProps {
  title: string;
  description: string | number;
}

export function SummaryItem({ title, description }: IProps) {
  return (
    <div className={styles.item}>
      <div className={styles.wrapperItem}>
        <div className={styles.dot}></div>
        <h3 className={styles.itemTitle}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
