import "../styles/globals.css";
import Meta from "../components/Meta";
import Header from "../components/header/Header";
import { Provider } from "react-redux";
import { store } from "../redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Meta />
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
