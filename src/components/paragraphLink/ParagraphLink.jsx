import "../../styles/paragraphLink/paragraph-link.css";

export const ParagraphWithLink = ({ href, color = "green", children }) => {
  const myParagaph = (
    <>
      <a href={href} style={{ color: color }} target="_blank">
        <p className="content">{children}</p>
      </a>
    </>
  );
  return myParagaph;
};
