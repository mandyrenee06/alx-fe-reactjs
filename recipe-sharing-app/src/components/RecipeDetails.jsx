import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) {
    return (
      <div className="recipe-details">
        <h2>Recipe Not Found</h2>
        <button onClick={() => navigate('/')}>Back to Recipes</button>
      </div>
    );
  }

  return (
    <div className="recipe-details">
      <div className="recipe-header">
        <h1>{recipe.title}</h1>
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Recipes
        </button>
      </div>
      
      <div className="recipe-content">
        <div className="recipe-info">
          <div className="info-section">
            <h3>Description</h3>
            <p>{recipe.description}</p>
          </div>
          
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="info-section">
              <h3>Ingredients</h3>
              <ul className="ingredients-list">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}
          
          {recipe.instructions && (
            <div className="info-section">
              <h3>Instructions</h3>
              <div className="instructions">{recipe.instructions}</div>
            </div>
          )}
        </div>
        
        <div className="recipe-actions">
          <EditRecipeForm recipe={recipe} />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;