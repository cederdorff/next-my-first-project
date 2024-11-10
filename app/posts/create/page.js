import styles from "../../page.module.css";
import { redirect } from "next/navigation";

export default function CreatePost() {
  async function createPost(formData) {
    "use server";

    const caption = formData.get("caption");
    const image = formData.get("image");

    const newPost = {
      caption,
      image,
      uid: "OPPe5jue2Ghxx3mtnxevB5FwCYe2"
    };

    const response = await fetch(
      "https://fb-rest-race-default-rtdb.firebaseio.com/posts.json",
      {
        method: "POST",
        body: JSON.stringify(newPost)
      }
    );

    if (response.ok) {
      redirect("/posts");
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Create Post</h1>
        <form action={createPost}>
          <label htmlFor="caption">Caption</label>
          <input
            id="caption"
            name="caption"
            type="text"
            placeholder="Type a caption..."
          />
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="Paste image URL..."
          />
          <button>Create Post</button>
        </form>
      </main>
    </div>
  );
}
