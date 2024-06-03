/* import { useState } from "react";

export default function SearchBar({ handleSearch, fetchData, keyword }) {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData();
        }}
      >
        <input
          type="text"
          placeholder="Search menu..."
          value={searchValue}
          onChange={handleSearch}
        />
        <button type="submit" class="btn btn-primary" onClick={fetchData}>
          Search
        </button>
      </form>
    </>
  );
}
 */

import { useState } from "react";

export default function SearchBar({ fetchData }) {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData();
        }}
      >
        <input
          type="text"
          placeholder="Search menu..."
          value={searchValue}
          onChange={handleSearch}
        />
        <button type="submit" className="btn btn-primary" onClick={fetchData}>
          Search
        </button>
      </form>
    </>
  );
}
