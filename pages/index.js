import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import svgIcon from "/public/random.svg";

export default function Recipe() {
  const [url, setUrl] = useState("");
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async (url) => {
    if (url) {
      try {
        const res = await fetch(`/api/scrape?url=${url}`);
        const data = await res.json();

        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecipe(url);
  };

  const handleRandomize = () => {
    const recipes = [
      "https://www.allrecipes.com/recipe/218994/nuoc-cham-vietnamese-dipping-sauce/",
      "https://www.allrecipes.com/recipe/147223/hot-pepper-mustard/",
      "https://tasty.co/recipe/golden-chicken-sandwich-as-made-by-chef-kuniko-yagi",
      "https://tasty.co/recipe/magic-chocolate-ball",
      "https://www.allrecipes.com/recipe/25037/best-big-fat-chewy-chocolate-chip-cookie/",
      "https://www.incredibleegg.org/recipe/spicy-fried-egg-salad-bombs/",
      "https://www.incredibleegg.org/recipe/hollandaise-sauce/",
      "https://www.incredibleegg.org/recipe/southwestern-omelet-roll/",
      "https://www.recipetineats.com/special-burger-sauce/",
      "https://www.recipetineats.com/special-burger-sauce/",
      "https://www.rachelcooks.com/fry-sauce/#wprm-recipe-container-32379",
    ];

    const randomUrl = recipes[Math.floor(Math.random() * recipes.length)];
    setUrl(randomUrl);
    fetchRecipe(randomUrl);
  };

  return (
    <>
      <Head>
        <title>Recipe Scraper</title>
      </Head>

      <div className="min-h-screen bg-stone-300">
        <nav className="text-white text-center p-4 md:p-6 font-bold text-3xl md:text-4xl bg-stone-500 shadow-md">
          Recipe Scraper
        </nav>

        <div className="max-w-xl mx-auto px-4 py-8 md:py-16">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label
              htmlFor="site"
              className="block text-md font-semibold text-gray-700 mb-2"
            >
              Enter the recipe link below
            </label>

            <div className="flex items-center relative">
              <input
                id="site"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.allrecipes.com/recipe/8628/yakisoba-chicken/"
                required
                className="p-3 w-full rounded-lg border-0 shadow-sm focus:ring-2 focus:ring-stone-500 focus:outline-none transition duration-150 ease-in-out"
              />
              <button
                type="button"
                onClick={() => handleRandomize()}
                className="absolute inset-y-0 right-0 flex items-center justify-center px-3 rounded-r-lg bg-stone-400 hover:bg-stone-600 transition-colors duration-150 ease-in-out"
              >
                <Image src={svgIcon} alt="icon" width={24} height={24} />
              </button>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 bg-stone-500 text-white p-3 rounded-lg hover:bg-stone-600 transition-colors duration-150 ease-in-out"
              >
                Scrape Recipe
              </button>
            </div>
          </form>
        </div>

        {recipe ? (
          <main className="md:max-w-3xl max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              {recipe.title}
            </h1>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                Ingredients
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="mb-1">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                Instructions
              </h2>
              <ol className="list-decimal list-inside text-gray-600">
                {recipe.instructions &&
                  recipe.instructions.map((instruction, index) => (
                    <li key={index} className="mb-1">
                      {instruction}
                    </li>
                  ))}
              </ol>
            </div>
          </main>
        ) : null}
      </div>
    </>
  );
}
