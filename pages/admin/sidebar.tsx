import Link from "next/link";
import React from "react";
import css from "styles/admin.module.scss";

const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <div className={css.controls}>
        <Link href={`/admin/all`}>All</Link>
        <Link href={`/admin/add-new`}>Add New</Link>
      </div>
    </div>
  );
};
export default Sidebar;
