import Link from "next/link";
import styles from "../page.module.css";

export default async function Posts() {
  const response = await fetch(
    "https://fb-rest-race-default-rtdb.firebaseio.com/posts.json"
  ); // Fetch data from Firebase Realtime Database
  const dataObject = await response.json(); // Convert response to JSON object
  console.log(dataObject); // Log the JSON object to the console

  const posts = Object.keys(dataObject).map(key => {
    return {
      id: key,
      ...dataObject[key]
    };
  });

  console.log(posts);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Posts</h1>
        <p>Here is a list of posts.</p>
        <ol>
          {posts.map(post => {
            return (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>{post.caption}</Link>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}
