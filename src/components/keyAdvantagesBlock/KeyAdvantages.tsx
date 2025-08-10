'use client';
import Image from 'next/image';
import styles from './keyAdvantages.module.scss';
import {
  keyAdvantagesLeftBlock,
  keyAdvantagesBottomBlock,
} from '@/constants/getKeyAdvantagesItems';
import rightSideImg from '../../../public/images/keyAdvantages/right_side_img.png';
import { Title } from '@/ui';

const KeyAdvantages = () => {
  return (
    <section className={styles.keyAdvantages}>
      <Title text='Key advantages of TimeTrust' />
      <div className={styles.top_side}>
        <div className={styles.left_side}>
          {keyAdvantagesLeftBlock.map((item) => (
            <div key={item.id} className={styles.block_wrapper}>
              <div className={styles.title_wrapper}>
                <div className={styles.square}></div>
                <div className={styles.title_block}>{item.title}</div>
              </div>
              <div className={styles.text}>{item.text}</div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
        <Image alt='image' src={rightSideImg} width={736} height={633} />
=======
        <Image
          alt='image'
          src={rightSideImg}
          className={styles.right_side}
          width={736}
          height={633}
        />
>>>>>>> 6864fea0b54400a73da540e078a802c044e07b93
      </div>
      <div className={styles.bottom_side}>
        {keyAdvantagesBottomBlock.map((item) => (
          <div key={item.id} className={styles.bottom_block_wrapper}>
            <div className={styles.title_wrapper}>
              <div className={styles.square}></div>
              <div className={styles.bottom_title}>{item.title}</div>
            </div>
            <div className={styles.bottom_text}>{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyAdvantages;
