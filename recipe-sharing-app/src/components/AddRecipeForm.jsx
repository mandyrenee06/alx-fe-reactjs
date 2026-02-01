import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();
  
  if (!title.trim() || !description.trim()) {
    alert('Please fill in at least title and description');
    return;
  }

  const newRecipe = {
    title: title.trim(),
    description: description.trim(),
    ingredients: ingredients.filter(ing => ing.trim() !== ''),
    instructions: instructions.trim(),
  };

  addRecipe(newRecipe);
  
  setTitle('');
  setDescription('');
  setIngredients(['']); 
  setInstructions('');
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;