import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

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
          <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="recipe-link">
            <div className="recipe-card">
              <h3>{recipe.title}</h3>
              <p className="recipe-description">{recipe.description}</p>
              {recipe.ingredients && recipe.ingredients.length > 0 && (
                <div className="recipe-preview">
                  <strong>Ingredients:</strong>
                  <p>{recipe.ingredients.slice(0, 3).join(', ')}...</p>
                </div>
              )}
              <div className="view-details">View Details →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;