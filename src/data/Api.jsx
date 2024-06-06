const handleSearch = async (query, setSearchResults) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const data = await response.json();
  setSearchResults(data.meals);
};

export default handleSearch;
