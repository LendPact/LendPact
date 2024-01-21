import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./components/cards.css";
import "./components/herosection.css";
import "./components/button.css";
import Navbar from "./components/navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Lend from "./pages/Lend";
import Borrow from "./pages/Borrow";
import Connectwallet from "./pages/Connectwallet";
import Footer from "./components/footer";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";



const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.e6SHCEdqjA7GcT9xCeH7kTh1TUmvLZhB, // or infuraId
    walletConnectProjectId: process.env.d2f74473f584eeee324eefa283ab3b5e,

    // Required
    appName: "LendPact",

  }),
);


function App() {
  console.log('App component is being rendered');
  return (
    <>
    <WagmiConfig config={config}>
    <ConnectKitProvider>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/lend' element={<Lend/>} />
          <Route path='/borrow' element={<Borrow/>} />
          <Route path='/connect-wallet' element={<Connectwallet/>} />
        </Routes>
        <Footer />
      </Router>
    
    
      </ConnectKitProvider>
    </WagmiConfig>
      </>
    
  );
}

export default App;
