import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Refresh token automatically on app load
  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/refresh",
          {
            method: "POST",
            credentials: "include",
          }
        );

        const data = await response.json();

        if (response.ok) {
          setAccessToken(data.accessToken);
        }
      } catch (error) {
        console.log("Not authenticated");
      } finally {
        setLoading(false);
      }
    };

    refreshAccessToken();
  }, []);

  const login = async (email, password) => {
    const response = await fetch(
      "http://localhost:8000/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    setAccessToken(data.accessToken);
  };

  const logout = async () => {
    await fetch("http://localhost:8000/logout", {
      method: "POST",
      credentials: "include",
    });

    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};