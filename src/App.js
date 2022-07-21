import React from "react";
import Choose from "./components/Choose";
import Clients from "./components/Clients";
import CreateAndSellNft from "./components/CreateAndSellNft";
import Home from "./components/Home";

function App() {
  document.title = 'Nft-Market'
  return (
    <div>
      <Home />
      <Clients />
      <CreateAndSellNft />
      <Choose />
    </div>
  )
}

export default App;
