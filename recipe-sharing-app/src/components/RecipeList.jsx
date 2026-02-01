import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return (
      <div className="recipe-list">
        <h2>Recipes</h2>
        <p>No recipes yet. Add your first recipe!</p>
      </div>
    );
  }

  return (
    <div className="recipe-list">
      <h2>Recipes ({recipes.length})</h2>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {recipe.ingredients && (
              <div className="recipe-ingredients">
                <strong>Ingredients:</strong>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}
            {recipe.instructions && (
              <div className="recipe-instructions">
                <strong>Instructions:</strong>
                <p>{recipe.instructions}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;