import Link from "next/link";
import styles from "./../page.module.css";
export default function Users() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Users</h1>
        <p>Here is a list of users.</p>
        <ol>
          <li>
            <Link href="/users/1">John Doe</Link>
          </li>
          <li>
            <Link href="/users/2">Jane Doe</Link>
          </li>
          <li>
            <Link href="/users/3">Foo Bar</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
