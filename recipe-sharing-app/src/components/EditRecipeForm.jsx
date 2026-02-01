import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const EditRecipeForm = ({ recipe }) => {
  const navigate = useNavigate();
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients || ['']);
  const [instructions, setInstructions] = useState(recipe.instructions || '');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setTitle(recipe.title);
    setDescription(recipe.description);
    setIngredients(recipe.ingredients || ['']);
    setInstructions(recipe.instructions || '');
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      alert('Please fill in at least title and description');
      return;
    }

    const updatedRecipe = {
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredients.filter((ing) => ing.trim() !== ''),
      instructions: instructions.trim(),
    };

    updateRecipe(recipe.id, updatedRecipe);
    setIsEditing(false);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleRemoveIngredient = (index) => {
    if (ingredients.length > 1) {
      const newIngredients = ingredients.filter((_, i) => i !== index);
      setIngredients(newIngredients);
    } else {
      setIngredients(['']);
    }
  };

  if (!isEditing) {
    return (
      <div className="edit-recipe-section">
        <button 
          className="edit-btn"
          onClick={() => setIsEditing(true)}
        >
          ✏️ Edit Recipe
        </button>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    );
  }

  return (
    <div className="edit-recipe-form">
      <h3>Edit Recipe</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="edit-title">Recipe Title *</label>
          <input
            id="edit-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="edit-description">Description *</label>
          <textarea
            id="edit-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter recipe description"
            rows="3"
            required
          />
        </div>

        <div className="form-group">
          <label>Ingredients</label>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-input">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                placeholder={`Ingredient ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => handleRemoveIngredient(index)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddIngredient}
            className="add-ingredient-btn"
          >
            + Add Ingredient
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="edit-instructions">Instructions</label>
          <textarea
            id="edit-instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter step-by-step instructions"
            rows="4"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">
            💾 Save Changes
          </button>
          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
              // Reset form
              setTitle(recipe.title);
              setDescription(recipe.description);
              setIngredients(recipe.ingredients || ['']);
              setInstructions(recipe.instructions || '');
            }}
            className="cancel-btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;