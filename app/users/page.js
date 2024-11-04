import styles from "./../page.module.css";
export default function Users() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Users</h1>
        <p>Here is a list of users.</p>
        <ol>
          <li>John Doe</li>
          <li>Jane Doe</li>
          <li>Foo Bar</li>
        </ol>
      </main>
    </div>
  );
}
