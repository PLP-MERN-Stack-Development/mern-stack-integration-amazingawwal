import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const { user, logout } = useContext(AppContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/new">New Post</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
