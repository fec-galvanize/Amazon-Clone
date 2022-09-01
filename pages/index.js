import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import T_shirt_line from "../components/Carosel/carousel2";
export default function Home() {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return( 
  <div className={styles.container}>
    <T_shirt_line />
  </div>);
}
