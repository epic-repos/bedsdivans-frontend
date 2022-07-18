import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
