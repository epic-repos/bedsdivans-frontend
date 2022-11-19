import React from "react";

interface GridWrapperProps extends React.ComponentPropsWithoutRef<"div"> {
  grid: string;
  gap?: string;
}

const GridWrapper = (props: React.PropsWithChildren<GridWrapperProps>) => {
  const { grid, children, gap, ...rest } = props;
  return (
    <React.Fragment>
      <div className={`wraper grid-${grid}`} {...rest}>
        {children}
      </div>
      <style jsx>
        {`
          .wraper {
            gap: ${gap || "1rem"};
            display: grid;
          }
          .grid-${grid} {
            grid-template-columns: repeat(${grid}, 1fr);
          }
        `}
      </style>
    </React.Fragment>
  );
};
export default GridWrapper;
