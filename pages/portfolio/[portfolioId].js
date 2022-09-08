import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router'; //è un componente che ci permette di settare dinamic routing per le pagine

export default function PortfolioId() {
  const router = useRouter(); //assegniamo ad 1 costante il componente useRouter
  console.log(router.pathname);
  console.log(router.query); //restituisce un object con un id specifico

  return (
    <div className={styles.container}>
      <h1>Portfolio Id Page</h1>
    </div>
  );
}
