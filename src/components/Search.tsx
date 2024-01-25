import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

interface Recipe {
  recipe: {
    label: string;
    ingredientLines: string[];
    image: string;
  };
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const AppId = "23c06148";
  const AppKey = "4b31688fc27e27a109adcb27514e71b2";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.edamam.com/search", {
          params: {
            q: searchTerm,
            app_id: AppId,
            app_key: AppKey,
          },
        });
        setRecipes(response.data.hits);
      } catch (error) {}
    };

    if (searchTerm.trim() !== "") {
      fetchData();
    }
  }, [searchTerm, AppId, AppKey]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Perform search or other actions
    }
  };

  return (
    <div className="px-4 py-2 md:px-6 md:py-3">
      <div className="flex flex-col md:flex-row items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleEnter}
          placeholder="Search"
          className="px-4 py-2 rounded-md bg-color1 shadow-xl mb-2 md:mb-0 md:mr-2"
        />
        <button
          onClick={() => {}}
          className="px-4 py-2 flex-shrink-0 text-color3 rounded-md shadow-2xl bg-color2"
        >
          Search
        </button>
      </div>

      <div className="max-w-screen-2xl rounded-t-md font-sans text-2xl m-5 snap-proximity">
        {recipes.map((recipe) => (
          <Card
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            description={recipe.recipe.ingredientLines.join(", ")}
            image={recipe.recipe.image}
            buttonText="Bite"
            buttonLink={`/recipes/${recipe.recipe.label}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
