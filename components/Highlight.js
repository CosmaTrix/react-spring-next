import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import hjs from "highlight.js";

const Highlight = ({ children, language }) => {
  const { value: __html } = hjs.highlight(
    language,
    renderToStaticMarkup(children)
  );

  return <code className="hljs html" dangerouslySetInnerHTML={{ __html }} />;
};

Highlight.defaultProps = {
  language: "html",
  children: null,
};

export default Highlight;
