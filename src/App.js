import React from "react";
import Heading from "./components/Heading.js";
import TouristsInfoCards from "./components/TouristsInfoCards.js";
import Restaurant from "./components/Restaurant";
import Bookings from "./components/Bookings";
import "./App.css";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristsInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        footerInfo={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
