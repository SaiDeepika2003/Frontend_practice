import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";
import MyComponent from "./MyComponent";
import Footer from "./Footer";
import StylingDemo1 from "./StylingDemo1";
import StylingDemo2 from "./StylingDemo2";
import EventHandlingDemo2 from "./EventHandlingDemo2";
import EventHandlingDemo1 from "./EventHandlingDemo1";
import Netflix from "./Netflix";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <React.StrictMode>
      <Header />
      <hr></hr>
      <MyComponent/>
      <hr></hr>
      <Footer/>
      <hr></hr>
      <StylingDemo1/>
      <hr></hr>
      <StylingDemo2/>
      <hr></hr>
      <EventHandlingDemo1/>
      <hr></hr>
      <EventHandlingDemo2/>
      <hr></hr>
      <Netflix/>
    </React.StrictMode>
)