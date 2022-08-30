import "../styles/globals.css";
import Meta from "../components/Meta";
import Middle from "../components/Middle";
import Cart from "../components/cart";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
      <Middle />
      <Cart /> 
    </>
  );
}

export default MyApp;
