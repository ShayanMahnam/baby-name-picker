import React, { useState } from "react";
import Data from "./babyNamesData.json";
import BabyNames from "./components/BabyNames";
import "./App.css";

function App() {
  const [mainList, setMainList] = useState(Data);
  const [favoritesList, setFavoritesList] = useState([]);

  const addToFavorites = (nameId) => {
    const nameIndex = mainList.findIndex((name) => name.id === nameId);
    const newMainList = [...mainList];
    const removedName = newMainList.splice(nameIndex, 1);
    setMainList(newMainList);
    setFavoritesList([...favoritesList, removedName[0]]);
  };

  const removeFromFavorites = (nameId) => {
    const nameIndex = favoritesList.findIndex((name) => name.id === nameId);
    const newFavoritesList = [...favoritesList];
    const removedName = newFavoritesList.splice(nameIndex, 1);
    setFavoritesList(newFavoritesList);
    setMainList([...mainList, removedName[0]]);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredList = Data.filter((name) =>
      name.name.toLowerCase().includes(searchTerm)
    );
    setMainList(filteredList);
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search names"
        onChange={handleSearch}
        className="search-input"
      />
      <div className="lists">
        <div className="list">
          <h2>Favorites:</h2>
          <BabyNames
            Data={favoritesList}
            handleNameClick={removeFromFavorites}
          />
        </div>
        <div className="list">
          <h2>Main List</h2>
          <BabyNames Data={mainList} handleNameClick={addToFavorites} />
        </div>
      </div>
    </div>
  );
}

export default App;
