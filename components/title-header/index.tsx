import React from "react";
import css from "./title.module.scss";

interface TitleHeaderProps {
  title: string;
  background?: string;
}
const TitleHeader = ({
  title,
  background = "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
}: TitleHeaderProps) => {
  return (
    <div className={`colored ${css["container"]}`}>
      <div className="container">
        <h1>{title}</h1>
      </div>
      <style jsx>
        {`
          .colored {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${background});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
        `}
      </style>
    </div>
  );
};
export default TitleHeader;
