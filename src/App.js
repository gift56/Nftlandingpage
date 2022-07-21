import React from "react";
import Choose from "./components/Choose";
import Clients from "./components/Clients";
import CreateAndSellNft from "./components/CreateAndSellNft";
import Home from "./components/Home";
import Marketplace from "./components/Marketplace";

function App() {
  document.title = 'Nft-Market'
  return (
    <div>
      <Home />
      <Clients />
      <CreateAndSellNft />
      <Choose />
      <Marketplace />
    </div>
  )
}

export default App;
