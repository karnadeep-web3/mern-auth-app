import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useApi = () => {
  const { accessToken, logout } = useContext(AuthContext);

  const apiRequest = async (url, options = {}) => {
    let response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: accessToken,
      },
      credentials: "include",
    });

    // If token expired → try refresh
    if (response.status === 401) {
      const refreshResponse = await fetch(
        "http://localhost:8000/refresh",
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (refreshResponse.ok) {
        const data = await refreshResponse.json();

        response = await fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            Authorization: data.accessToken,
          },
          credentials: "include",
        });

        return response;
      } else {
        logout();
        return response;
      }
    }

    return response;
  };

  return { apiRequest };
};