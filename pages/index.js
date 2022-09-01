import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import T_shirt_line from "../components/Carosel/carousel2";
// Imported Components
import ProductInfo from "../components/ProductInfo";

export default function Home() {
  useEffect(() => {
    // Example API Call using Next Js built in API
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className={styles.container}>
      <ProductInfo />
      <T_shirt_line />
    </div>
  );
}
