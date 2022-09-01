import styles from "../styles/Home.module.css";
import T_shirt_line from "../components/Carosel/carousel2";
// Imported Components
import ProductInfo from "../components/ProductInfo";

export default function Home() {

  return (
    <div className={styles.container}>
      <ProductInfo />
      <T_shirt_line />
    </div>
  );
}
