import { useState, useCallback } from "react";

export default function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, options = {}) => {
    setLoading(true);
    setError(null);
    try {
      if (options.body && !(options.body instanceof FormData)) {
        options.headers = {
          "Content-Type": "application/json",
          ...(options.headers || {}),
        };
        options.body = JSON.stringify(options.body);
      }
      const res = await fetch(url, options);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, request };
}
