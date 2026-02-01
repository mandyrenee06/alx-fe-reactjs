import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
  };

  if (!showConfirm) {
    return (
      <button
        className="delete-btn"
        onClick={() => setShowConfirm(true)}
      >
        🗑️ Delete Recipe
      </button>
    );
  }

  return (
    <div className="delete-confirmation">
      <p>Are you sure you want to delete this recipe?</p>
      <div className="confirmation-buttons">
        <button
          className="confirm-delete-btn"
          onClick={handleDelete}
        >
          Yes, Delete
        </button>
        <button
          className="cancel-delete-btn"
          onClick={() => setShowConfirm(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteRecipeButton;