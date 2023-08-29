import React from "react";
import Heading from "./section/Heading";
import Header from "../../components/Header";
import AboutProduct from "./section/AboutProduct";
import RelatedProduct from "../../components/RelatedProduct";
import Booking from "../../components/Booking";
import Footer from "../../components/Footer";

export default function SingleProduct() {
  return (
    <>
      <Header />
      <Heading />
      <AboutProduct/>
      <RelatedProduct/>
      <Booking/>
      <Footer/>
    </>
  );
}
