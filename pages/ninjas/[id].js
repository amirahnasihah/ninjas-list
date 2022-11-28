import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    // paths: [{}, {}, { params: { id: } }],
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>Details Page</h1>
      <h3>{ninja.name}</h3>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>

      <Link href="/ninjas">
        <button className={styles.ninjainfo}>back to details</button>
      </Link>
    </div>
  );
};

export default Details;
