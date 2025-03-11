import React from "react";
import { ClipLoader } from "react-spinners";
export const Loading = React.memo(() => {
  return (
    <div className="col-12 d-flex justify-content-center align-items-center form-group">
      <span className="loader d-flex align-items-center">
        Cargando...&nbsp;<ClipLoader size={30}></ClipLoader>
      </span>
    </div>
  );
});
