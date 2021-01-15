import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyling from "./components/GlobalStyling";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <GlobalStyling />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
