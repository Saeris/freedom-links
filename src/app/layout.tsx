import React from "react";
import "../internals/global.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

// eslint-disable-next-line import/no-default-export
export default Layout;
