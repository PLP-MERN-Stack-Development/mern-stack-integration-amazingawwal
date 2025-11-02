import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AppContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AppContext.Provider>
  );
};
