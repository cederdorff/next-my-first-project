import styles from "../page.module.css";

export default function Posts() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Posts</h1>
        <p>Here is a list of posts.</p>
        <ol>
          <li>Post 1</li>
          <li>Post 2</li>
          <li>Post 3</li>
        </ol>
      </main>
    </div>
  );
}
