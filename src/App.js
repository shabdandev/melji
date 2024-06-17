import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Uslugi from "./components/Uslugi/Uslugi";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Dostavka from "./components/Dostavka/Dostavka";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dostavka" element={<Dostavka />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/uslugi" element={<Uslugi />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
