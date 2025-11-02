import { useNavigate } from "react-router-dom";
import useApi from "../api/useApi";
import { AppContext } from "../context/AppContext";

export default function Login() {
  const { setUser } = useContext(AppContext);
  const { request, loading, error } = useApi();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await request("/api/auth/login", {
        method: "POST",
        body: { email, password },
      });
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/");
    } catch {}
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" disabled={loading}>
        Login
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
