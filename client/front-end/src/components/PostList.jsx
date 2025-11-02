import { useState, useEffect } from "react";
import useApi from "../api/useApi";
import PostCard from "./PostCard";
import Pagination from "./Pagination";

export default function PostList() {
  const { loading, error, request } = useApi();
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState({ page: 1, limit: 10, total: 0 });
  const [search, setSearch] = useState("");

  const fetchPosts = async (page = 1) => {
    const params = new URLSearchParams({ page, limit: meta.limit, search });
    const data = await request(`/api/posts?${params}`);
    setPosts(data.data);
    setMeta(data.meta);
  };

  useEffect(() => {
    fetchPosts(1);
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search posts..."
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.map((p) => (
        <PostCard key={p._id} post={p} />
      ))}
      <Pagination meta={meta} onPageChange={(p) => fetchPosts(p)} />
    </div>
  );
}
