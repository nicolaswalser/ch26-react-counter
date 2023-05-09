import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { ParagraphWithLink } from "./components/paragraphLink/ParagraphLink";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParagraphWithLink
      href="https://www.linkedin.com/in/nicolas-walser/"
      color="red"
    >
      Take me to Nicks LinkedIn
    </ParagraphWithLink>
    <ParagraphWithLink href="https://github.com/walsergomez" color="blue">
      Take me to Nicks GitHub
    </ParagraphWithLink>
  </React.StrictMode>
);
