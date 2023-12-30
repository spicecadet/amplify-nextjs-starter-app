'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';
import Counter from './counter';

export default function Home() {
  const [peeCount, setPeeCount] = useState(0);
  const [cakeCount, setCakeCount] = useState(0);
  const [cowCount, setCowCount] = useState(0);

  return (
    <main className={styles.main}>
      <h1>The India 2023-2024 Counter App</h1>
      <div className={styles.description}>
      <Counter 
        counter={peeCount} 
        setCounter={setPeeCount} 
        header={"The Pee Counter"} 
        message={"Let's count how many people we see peeing on the side of the road in India"}
        btnMessage={"I saw another"} 
      />
      <Counter 
        counter={cakeCount}
        setCounter={setCakeCount}
        header={"Cake Counter"}
        message={"Let's count how many cakes are delivered for Sophie & Ed's Anniversary"}
        btnMessage={"Cakes Delivered"}
      />
      <Counter
        counter={cowCount}
        setCounter={setCowCount}
        header={"Cow Counter"}
        message={"Let's count how many cows we see on the road. Bonus pionts if they are eating garbage"}
        btnMessage={"Cows Spotted"}
      />
      </div>
    </main>
  )
}
