import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Products from "../../components/Products/Products";
import Testimonials from "../../components/Testimonials/Testimonials";
import Banner from "../../components/Banner/Banner";
import Location from "../../components/Location/Location";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      {/* <Navbar />
      <Header /> */}
      <About />
      <Products />
      <Testimonials />
      <Banner />
      <Location />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
