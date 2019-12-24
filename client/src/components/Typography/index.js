import React from "react";

const Paragraph = ({ children, className }) => (
  <p className={className}>{children}</p>
);

const Anchor = ({ children, className, href }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

export default {
  Paragraph,
  Anchor,
};
