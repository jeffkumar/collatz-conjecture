import Head from 'next/head';
import { useRef, useState } from 'react';
import styles from '../styles/Home.module.css';

const CheckNumber = () => {
  const ref = useRef();
  const [seq, setSeq] = useState([]);

  const onClick = () => {
    if (Number.isInteger(parseInt(ref.current.value))) {
      const result = checkIt(ref.current.value);
      setSeq(result);
    }
  };

  const checkIt = (x, seq = []) => {
    seq.push(x);
    if (x === 1) {
      return seq;
    }
    if (x % 2 === 0) {
      return checkIt(x / 2, seq);
    }
    return checkIt(3 * x + 1, seq);
  };

  return (
    <>
      <div>
        <label htmlFor="number" className={styles.numberLabel}>
          Select a number
        </label>
        <input name="number" ref={ref} />
        <br />
        <button onClick={onClick} className={styles.checkNumber}>
          Check number
        </button>
      </div>
      <div className={styles.sequence}>{seq.join(', ')}</div>
    </>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Collatz Conjecture</title>
      </Head>
      <h1 className={styles.title}>Collatz Conjecture</h1>
      <p className={styles.description}>
        Collatz conjecture states the following. If you take any whole number
        and that number is odd multiply it by 3 and add one. If it is even then
        divide that number by 2. If you do this enough times, you will end with
        the numbers 4, 2, and 1 every time. No mathmetician has proven this, but
        if you experiement, you will see that it is true. This is the beauty of
        the Collatz conjecture.
      </p>
      <main className={styles.main}>
        <CheckNumber />
      </main>

      <footer className={styles.footer}>Created by Jeff Kumar &nbsp;</footer>
    </div>
  );
}
