import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../api/useApi";
import { AppContext } from "../context/AppContext";

export default function Register() {
  const { setUser } = useContext(AppContext);
  const { request, loading, error } = useApi();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await request("/api/auth/register", {
        method: "POST",
        body: form,
      });
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/");
    } catch {}
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={loading}>
        Register
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
