import Link from "next/link";
import styles from "../page.module.css";

export default function Posts() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Posts</h1>
        <p>Here is a list of posts.</p>
        <ol>
          <li>
            <Link href="/posts/1">Post 1</Link>
          </li>
          <li>
            <Link href="/posts/2">Post 2</Link>
          </li>
          <li>
            <Link href="/posts/3">Post 3</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
