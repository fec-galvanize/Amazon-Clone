import { useEffect } from "react";
import styles from "../styles/Home.module.css";

// Imported Components
<<<<<<< HEAD
import Middle from "../components/middle/Middle";
=======
import Cart from "../components/Cart"
import Middle from "../components/Middle";
>>>>>>> 9467b88bfaf6d4c7bf41d304aaf4b087e0ddb38c
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
