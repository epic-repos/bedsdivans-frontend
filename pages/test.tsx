import React from "react";
import PerPageLayout from "layout/perpage";
import { NextPageWithLayout } from "typings/layout";

const SimpleTest: NextPageWithLayout = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <h1>Hello</h1>
    </div>
  );
};
export default SimpleTest;

SimpleTest.getLayout = PerPageLayout;
