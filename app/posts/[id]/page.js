import styles from "../../page.module.css";
export default async function PostDetail({ params }) {
  const { id } = await params;

  console.log(id);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Post Detail Page for ID: {id}</h1>
      </main>
    </div>
  );
}
