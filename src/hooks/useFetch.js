import { useEffect, useState } from "react";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);

  const obtenerDatos = (url = "") => {
    try {
      if (url === "") throw new Error("URL vacía!");
      setLoading(true);
      return new Promise((resolve, reject) =>
        fetch(url)
          .then((response) => response.json())
          .then((datos) => resolve(datos))
          .catch((error) => reject(error))
      );
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, obtenerDatos };
};
