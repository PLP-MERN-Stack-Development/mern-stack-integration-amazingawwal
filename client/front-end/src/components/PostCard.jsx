import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <Link to={`/post/${post._id}`}>
        <h2>{post.title}</h2>
        <p>{post.body.slice(0, 120)}...</p>
      </Link>
      <p>By {post.author?.name || "Anonymous"}</p>
    </div>
  );
}
