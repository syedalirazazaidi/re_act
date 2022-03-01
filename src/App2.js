import React from "react";
import Box from "./Box";
import data from "./data";

const App2 = () => {
  const [box, setbox] = React.useState(data);
  function ontoggle(id) {
    setbox((prev) => {
      return prev.map((square) => {
        return square.id === id
          ? {
              ...square,
              on: !square.on,
            }
          : square;
      });
      //   const newSquares = [];
      //   for (let i = 0; i < prev.length; i++) {
      //     const currentbox = prev[i];
      //     if (currentbox.id === id) {
      //       const update = {
      //         ...currentbox,
      //         on: !currentbox.on,
      //       };
      //       newSquares.push(update);
      //     } else {
      //       newSquares.push(currentbox);
      //     }
      //   }
      //   return newSquares;
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
