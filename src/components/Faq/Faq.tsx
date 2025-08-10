'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Title } from '@/ui';
import { FaqItem } from './FaqItem';
import { faqData } from './mock.data';
import { Button } from '@/ui';
import Link from 'next/link';

import styles from './faq.module.scss';

export function Faq() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className={styles.section} id='faq'>
      <div className={styles.container}>
        <Title text='FAQ' />
        <div className={styles.list}>
          {faqData.map((item) => (
            <FaqItem
              key={item.id}
              title={item.question}
              content={item.answer}
              isExpanded={item.id === expanded}
              onToggle={() => toggleExpand(item.id)}
            />
          ))}
        </div>
        <h3 className={styles.text}>Visualize the results with calculator!</h3>
        <Link href='#calculate'>
<<<<<<< HEAD
          <Button text='Calculate your future Now' width={448} />
=======
          <Button text='Calculate your future Now' width={530} />
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93
        </Link>
      </div>
    </section>
  );
}
