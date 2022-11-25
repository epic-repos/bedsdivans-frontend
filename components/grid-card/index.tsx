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
          @media screen and (max-width:768px){
            .grid-${grid} {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media screen and (max-width:1200px){
            .grid-${grid} {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media screen and (max-width:425px){
            .grid-${grid} {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};
export default GridWrapper;
