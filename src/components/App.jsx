import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Main key={item.id} item={item} />;
  });

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
