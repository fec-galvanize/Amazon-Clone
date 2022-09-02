import styles from "../styles/Home.module.css";
// Imported Components
import ProductInfo from "../components/ProductInfo";
import T_shirt_line from "../components/Carosel/carousel2";
import Reviews from '../components/Reviews' 

export default function Home() {

  return (
    <div className={styles.container}>
      <ProductInfo />
      <T_shirt_line />
      <Reviews />
    </div>
  );
}
