import React from "react";
import "./style.css";
const Box = (props) => {
  const [on, setOn] = React.useState(props.on);
  const backColor = {
    backgroundColor: on ? "#222222" : "#cccccc",
  };
  //   const toggle = () => {
  //     setOn((pre) => !pre);
  //   };
  return (
    <div
      style={backColor}
      className="box"
      onClick={() => props.ontoggle(props.id)}
    >
      Box
    </div>
  );
};

export default Box;
