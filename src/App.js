import React, { useState } from "react";
import './App.css';
import Navbar from "./Navbar";
import Results from "./Results";

function App() {
  // if a category has not been selected, show UK Busines news
  const [category, setCategory] = useState("business");

  return (
    <div className="app">
      {/* navbar - placing the nav bar */}
      <Navbar setCategory={setCategory} />
      {/* results - diplaying all results */}
      <Results category={category} />
    </div>
  );
}

export default App;
