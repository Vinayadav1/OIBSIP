import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import Location from "./components/Location/Location";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Products />
      <Testimonials />
      <Banner />
      <Location />
      <Footer />
      {/* Add other components like Header, Footer, Products, etc. here */}
    </div>
  );
}

export default App;
