import React from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "REMOVE":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const DemoPage = () => {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <div>
      <h4>Hello I am Demo Page</h4>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
      <br />
      <button onClick={() => dispatch({ type: "REMOVE" })}>DELETE</button>
    </div>
  );
};
export default DemoPage;
