import "./App.css";
import Navbar from "./components/navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Lend from "./pages/Lend";
import Borrow from "./pages/Borrow";
import Connectwallet from "./pages/Connectwallet";
import Footer from "./components/footer";

function App() {
  console.log('App component is being rendered');
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/lend' element={<Lend/>} />
          <Route path='/borrow' component={<Borrow/>} />
          <Route path='/connect-wallet' element={<Connectwallet/>} />
        </Routes>
        <Footer />
      </Router>
    </>

      
    
  );
}

export default App;
