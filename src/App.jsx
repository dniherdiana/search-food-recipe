import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FetchData from "./data/FetchData";
import MenuRender from "./data/MenuRender";
import Footer from "./components/Footer";
import ErrorBoundary from "./data/ErrorBoundary";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    setSearchResults(data.meals);
  };

  return (
    <div>
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <FetchData />
      <MenuRender menuItems={searchResults} />
      <Footer />
    </div>
  );
};

export default App;
