import styles from "../styles/Home.module.css";
// Imported Components
import ProductInfo from "../components/ProductInfo";
import T_shirt_line from "../components/Carosel/carousel2";
import Reviews from '../components/Reviews';
import Video from "../components/Video";
import Questions from "../components/Questions";

export default function Home() {

  return (
    <div className={styles.container}>
      <ProductInfo />
      <T_shirt_line />
      <Video />
      <T_shirt_line />
      <Questions />
      <Reviews />
      <T_shirt_line />
      <T_shirt_line />
      <T_shirt_line />
    </div>
  );
}
