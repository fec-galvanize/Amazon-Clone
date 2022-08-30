import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Test from '../components/carousel'

export default function Home() {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return( 
  <div className={styles.container}>test
        <Test />,
  </div>
  );
}
