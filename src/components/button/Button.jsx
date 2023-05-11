import React from "react";
import ButtonMui from "@mui/material/Button";

export const Button = ({ onClick, children }) => {
  return (
    <>
      <ButtonMui onClick={onClick} variant="contained" color="success">
        {children}
      </ButtonMui>
    </>
  );
};
