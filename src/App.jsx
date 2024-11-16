import "./App.css";
import Car from "./components/Car";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Food from "./components/Food";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Car />     
      <Cards />
      <Food />
      <Category />
      <Footer />
    </>
  );
}

export default App;
