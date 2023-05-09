import React from "react";
import { ParagraphWithLink } from "../paragraphLink/ParagraphLink";

export const SocialNetworks = () => {
  return (
    <>
      <ParagraphWithLink
        href="https://www.linkedin.com/in/nicolas-walser/"
        color="red"
      >
        Take me to Nick's LinkedIn
      </ParagraphWithLink>
      <ParagraphWithLink href="https://github.com/walsergomez" color="blue">
        Take me to Nick's GitHub
      </ParagraphWithLink>
      <ParagraphWithLink href="https://mexico.generation.org/">
        Generation MX
      </ParagraphWithLink>
    </>
  );
};
