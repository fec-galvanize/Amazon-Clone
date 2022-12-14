import styles from "../styles/Home.module.css";
// Imported Components
import ProductInfo from "../components/ProductInfo";
import T_shirt_line from "../components/Carosel/related";
import Reviews from '../components/Reviews';
import Video from "../components/Video";
import Questions from "../components/Questions";
import Alsoviewed from "../components/Carosel/alsoViewed";
import Trends from "../components/Carosel/shoppingTrends";

export default function Home() {
  return (
    <div className={styles.container}>
      <ProductInfo />
      <Alsoviewed />
      <Video />
      <T_shirt_line />
      <Questions />
      <Reviews />
      <Trends />
    </div>
  );
}
