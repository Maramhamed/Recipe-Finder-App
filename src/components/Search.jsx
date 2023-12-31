import React, { useState } from "react";

const Search = ({ onIngredientsChange }) => {
  const [selectedIngredients, setSelectedIngredients] = useState("");

  const handleInputChange = (event) => {
    setSelectedIngredients(event.target.value);
  };

  const displayRecipes = () => {
    onIngredientsChange(selectedIngredients);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-6">
          <div className="input-group mt-4">
            <input
              type="search"
              id="search-bar"
              placeholder="Enter your ingredients..."
              className="form-control"
              value={selectedIngredients}
              onChange={handleInputChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-danger"
                type="button"
                onClick={displayRecipes}
              >
                <box-icon name="search-alt" color="#ffffff"></box-icon>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
