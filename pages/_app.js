import "../styles/globals.css";
import Meta from "../components/Meta";
import Middle from "../components/Middle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
      <Middle />
    </>
  );
}

export default MyApp;
