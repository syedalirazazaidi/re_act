// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [arrayNew, setnewState] = useState(["items 1", "items 2"]);
//   const [newobj, setnewObj] = useState();
//   function addItems() {
//     const newarray = `items ${arrayNew.length + 1}`;
//     setnewState((pre) => {
//       return [...pre, newarray];
//     });
//   }
//   const newArray = arrayNew.map((item, index) => <div key={index}>{item}</div>);
//   return (
//     <div className="App">
//       {newArray}
//       <button onClick={addItems}>add items</button>
//     </div>
//   );
// }

// export default App;
