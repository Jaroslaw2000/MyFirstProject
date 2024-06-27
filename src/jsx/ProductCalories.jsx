import  { useState, useEffect } from "react";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [meals, setMeals] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const category = ["recipes", "meals"];

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(
                    `https://api.spoonacular.com/recipes/complexSearch?apiKey=03b90c67e44c4aa6a0ab624a9ec121ff`,
                    {
                        method: "GET",
                    }
                );
                if (!response.ok) {
                    throw new Error("Błąd podczas pobierania danych przepisów");
                }
                const data = await response.json();
                setRecipes(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchMeals = async () => {
            try {
                const response = await fetch(
                    'https://www.themealdb.com/api/json/v1/1/categories.php',
                    {
                        method: 'GET',
                    }
                );
                if (!response.ok) {
                    throw new Error("Błąd podczas pobierania danych posiłków");
                }
                const data = await response.json();
                setMeals(data.categories);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecipes();
        fetchMeals();

    }, []);

    const selectRecipe = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div>
            <form>
                <select className="recipeList" value={selectedCategory} onChange={selectRecipe}>
                    <option value="">Wybierz opcję</option>
                    {category.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </form>
            <ul className="list">
                {selectedCategory === "recipes" && recipes.length > 0 && (
                    recipes.map((recipe, index) => (
                        <li key={index}>
                            <h3 className="recipe-name">{recipe.title}</h3>
                            <p>{recipe.strCategory}</p>
                            <p>kcal</p>
                            <img src={recipe.image}></img>
                        </li>
                    ))
                )}
                {selectedCategory === "meals" && meals.length > 0 && (
                    meals.map((meal, index) => (
                        <li key={index}>
                            <h3 className="meal-name">{meal.strCategory}</h3>
                            <p>{meal.strCategoryDescription}</p>
                            <p>kcal:</p>
                            <img src={meal.strCategoryThumb}></img>
                        </li>
                    ))
                )}
                {selectedCategory === "" && (
                    <p></p>
                )}
            </ul>
        </div>
    );
};

export default RecipeList;
