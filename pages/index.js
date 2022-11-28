import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Aute id excepteur incididunt occaecat et anim. Duis enim duis
          consectetur irure et laborum sunt. Cupidatat enim commodo laboris
          cillum sunt excepteur mollit eu nostrud dolor ex. Lorem incididunt
          reprehenderit consectetur ea nostrud excepteur veniam eiusmod id.
          Exercitation amet ex cupidatat anim velit dolor nisi sit ex quis
          aliqua ea culpa. Adipisicing laboris esse culpa ullamco id nisi in eu
          id Lorem aute esse laborum.
        </p>
        <p className={styles.text}>
          Dolor adipisicing velit velit aliqua ullamco do elit eiusmod aliquip
          culpa. Eiusmod dolor velit pariatur incididunt cillum est do magna
          cillum irure dolor. Reprehenderit cillum incididunt labore duis
          laboris.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
