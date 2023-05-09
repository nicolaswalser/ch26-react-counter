export const ParagraphWithLink = ({ href, color, children }) => {
  const myParagaph = (
    <>
      <a
        href={href}
        style={{ textDecoration: "none", color: color }}
        target="_blank"
      >
        <p>{children}</p>
      </a>
    </>
  );
  return myParagaph;
};
