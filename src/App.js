import './App.css';
import Home from "./containers/home/Home";
import Header from "./containers/header/Header";
import Checkout from "./containers/checkout/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
