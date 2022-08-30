import "../styles/globals.css";
import Meta from "../components/Meta";
import Middle from "../components/Middle";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
      <Header />
      <Middle />
    </>
  );
}

export default MyApp;
