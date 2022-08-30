import { useEffect } from "react";
import styles from "../styles/Home.module.css";

// Imported Components
import Cart from "../components/Cart"
import Middle from "../components/Middle";
import ProdImage from "../components/ProdImage";

export default function Home() {
  useEffect(() => {
    // Example API Call using Next Js built in API
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className={styles.container}>
      <ProdImage />
      <Middle />
      <Cart /> 
    </div>
  );
}
