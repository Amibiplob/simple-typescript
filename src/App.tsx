import React from "react";
import Button from "./Button";
import Card from "./Card";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  return (
    <div className="flex flex-col gap-10 m-20">
      <Home></Home>
      <h1 className="text-6xl leading-relaxed">
        This is a simple react page. This is my first React Typescript with
        Tailwind CSS and Daisy UI
      </h1>
      <Button></Button>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
