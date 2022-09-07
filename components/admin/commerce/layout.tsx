import React from "react";
import Sidebar from "./sidebar";
import css from "styles/ECommerce/order.module.scss";

const CommerceLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <div className={css.mainouterbox}>
        <div className={css.rightleftbox}>
          <Sidebar />
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommerceLayout;
