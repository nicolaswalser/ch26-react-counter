export const ParagraphWithLink = (props) => {
  const myParagaph = (
    <>
      <a
        href={props.href}
        style={{ textDecoration: "none", color: props.color }}
        target="_blank"
      >
        <p>{props.children}</p>
      </a>
    </>
  );
  return myParagaph;
};
