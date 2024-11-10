import Link from "next/link";
import styles from "./../page.module.css";

export default async function Users() {
  const response = await fetch(
    "https://fb-rest-race-default-rtdb.firebaseio.com/users.json"
  );
  const dataObject = await response.json();
  const users = Object.keys(dataObject).map(key => {
    return {
      id: key,
      ...dataObject[key]
    };
  });

  console.log(users);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Users</h1>
        <p>Here is a list of users.</p>
        <ol>
          {users.map(user => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
