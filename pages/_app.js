import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// this is where our pages are rendered

// wrapping the Layout component around <Component {...pageProps} /> this.
// bcs we now get access to whatever is nested inside the <Layout>
// this is called the `children` of this component this is standard React stuff
