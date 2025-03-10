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
          .then((datos) => {
            setLoading(false);
            return resolve(datos);
          })
          .catch((error) => {
            setLoading(false);
            return reject(error);
          })
      );
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };
  return { loading, obtenerDatos };
};
