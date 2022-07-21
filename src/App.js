import React from "react";
import Clients from "./components/Clients";
import Home from "./components/Home";

function App() {
  document.title = 'Nft-Market'
  return (
    <div>
      <Home />
      <Clients />
    </div>
  )
}

export default App;
