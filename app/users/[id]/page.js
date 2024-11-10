import Image from "next/image";
import styles from "../../page.module.css";
export default async function UserDetail({ params }) {
  const { id } = await params;

  const response = await fetch(
    `https://fb-rest-race-default-rtdb.firebaseio.com/users/${id}.json`
  );
  const user = await response.json();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{user.name}</h1>
        <Image
          src={user.image}
          width="300"
          height="400"
          alt={user.name}
          className="user-image"
        />
        <p>{user.title}</p>
        <p>
          <a href={`mailto:${user.mail}`}>{user.mail}</a>
        </p>
      </main>
    </div>
  );
}
