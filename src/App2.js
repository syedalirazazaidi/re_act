import React from "react";
import Box from "./Box";
import data from "./data";

const App2 = () => {
  const [box, setbox] = React.useState(data);
  function ontoggle(id) {
    setbox((prev) => {
      const newBox = [];
      for (let i = 0; i < prev.length; i++) {
        const currentbox = prev[i];
        if (currentbox.id === id) {
          const update = {
            ...prev,
            on: !prev.on,
          };
          newBox.push(update);
        } else {
          newBox.push(currentbox);
        }
      }
      return newBox;
    });

    //   logic not work
    // setbox((prevState) => {
    //   const alldata = prevState.map((item) => {
    //     if (item.id === id) {
    //       console.log("clicked");
    //       return {
    //         ...item,
    //         on: !item.on, // using the passed value
    //       };
    //     }
    //     return item;
    //   });
    //   return alldata;
    // });
  }

  const allboxes = box.map((item) => (
    <Box ontoggle={ontoggle} id={item.id} on={item.on} key={item.id} />
  ));
  return <div>{allboxes}</div>;
};

export default App2;
