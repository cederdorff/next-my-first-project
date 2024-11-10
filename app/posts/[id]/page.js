import Image from "next/image";
import styles from "../../page.module.css";
export default async function PostDetail({ params }) {
  const { id } = await params;
  console.log(id);

  const response = await fetch(
    `https://fb-rest-race-default-rtdb.firebaseio.com/posts/${id}.json`
  ); // Fetch data from Firebase Realtime Database
  const post = await response.json(); // Get the JSON data from the response
  console.log(post);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{post.caption}</h1>
        <Image
          src={post.image}
          width="300"
          height="400"
          alt={post.caption}
          className="post-image"
        />
      </main>
    </div>
  );
}
