import { ButtonGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../button/Button";
import { Container } from "@mui/material";

export const Counter = ({ initialValue = 0, increment = 1, decrement = 1 }) => {
  const [counter, setcounter] = useState(initialValue);

  const handleIncrement = (event) => {
    setcounter(counter + increment);
  };

  const handleDecrement = (event) => {
    setcounter(counter - decrement);
  };

  const handleReset = (event) => {
    setcounter(initialValue);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Typography align="center" color={"blue"} variant="h1">
          Counter
        </Typography>
        <Typography align="center" color={"red"} variant="h2">
          {counter}
        </Typography>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={handleIncrement}>+</Button>
          <Button onClick={handleDecrement}>-</Button>
          <Button onClick={handleReset}>Reset</Button>
        </ButtonGroup>
      </Container>
    </>
  );
};
