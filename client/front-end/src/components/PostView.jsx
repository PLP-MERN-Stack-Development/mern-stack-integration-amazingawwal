export default function PostView({ post }) {
  if (!post) return <p>No post found</p>;
  return (
    <article>
      <h1>{post.title}</h1>
      <p>
        By {post.author?.name || "Unknown"} •{" "}
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      {post.featuredImage && (
        <img
          src={`/${post.featuredImage}`}
          alt="featured"
          style={{ maxWidth: "100%", margin: "1rem 0" }}
        />
      )}
      <div>{post.body}</div>
      <hr />
      <h3>Categories</h3>
      <ul>
        {post.categories?.map((cat) => (
          <li key={cat._id}>{cat.name}</li>
        ))}
      </ul>
    </article>
  );
}
