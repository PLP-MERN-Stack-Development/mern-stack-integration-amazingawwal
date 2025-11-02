import { useParams } from "react-router-dom";
import useApi from "../api/useApi";
import useFetch from "../hooks/useFetch";
import PostView from "../components/PostView";

export default function PostPage() {
  const { id } = useParams();
  const { request } = useApi();
  const { data, loading, error } = useFetch(
    () => request(`/api/posts/${id}`),
    [id],
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <PostView post={data.post} />;
}
