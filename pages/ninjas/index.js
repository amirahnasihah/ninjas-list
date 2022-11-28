import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); // return response object
  const data = await response.json(); // array of obj of users

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas Listing</title>
        <meta name="keywords" content="ninjas" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
            <div className={styles.single}>
              <h3>{ninja.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;

// file named index.js creates a root path so -- route as ../ninjas serve this ./pages/ninjas/index.js file
