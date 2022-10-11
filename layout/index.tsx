import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
