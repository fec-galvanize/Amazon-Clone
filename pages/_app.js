import "../styles/globals.css";
import Meta from "../components/Meta";
import Header from "../components/header/Header";
import { Provider } from "react-redux";
import { store } from "../redux";
import Video from "../components/Video";
import Questions from "../components/Questions";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Meta />
      <Header />
      <Component {...pageProps} />
      <Video />
      <Questions />
    </Provider>
  );
}

export default MyApp;
