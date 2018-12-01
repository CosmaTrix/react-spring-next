import React from "react";

const Notes = ({ children }) => (
  <div className="hljs">
    {typeof children === "function" ? children() : children}
  </div>
);

export default Notes;
