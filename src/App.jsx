import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FetchData from "./data/FetchData";
import MenuRender from "../src/pages/MenuRender";
import Footer from "./components/Footer";
import handleSearch from "../src/data/Api";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <Header />
      <SearchBar
        handleSearch={(query) => handleSearch(query, setSearchResults)}
      />
      <FetchData />
      <MenuRender menuItems={searchResults} />
      <Footer />
    </div>
  );
};

export default App;
