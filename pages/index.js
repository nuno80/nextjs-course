// next.js legge il percorso del file index come: https://nextjs-course/pages/ va a leggere il nome della cartella di riferimento

import styles from '../styles/Home.module.css';
import link from react;

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Hello Next World!</h1>
      <ul> 
        <li>
          <link/>
        </li>
      </ul>
    </div>
  );
}
