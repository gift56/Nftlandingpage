import React from "react";
import Choose from "./components/Choose";
import Clients from "./components/Clients";
import CreateAndSellNft from "./components/CreateAndSellNft";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Marketplace from "./components/Marketplace";
import Subcribe from "./components/Subcribe";
import ScrollTop from "./components/ScrollTop";

function App() {
  document.title = 'Nft-Market'
  return (
    <div>
      <Home />
      <Clients />
      <CreateAndSellNft />
      <Choose />
      <Marketplace />
      <Subcribe />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default App;
