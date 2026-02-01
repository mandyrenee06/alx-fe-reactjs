import { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './store/recipeStore';
import './App.css';

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    const sampleRecipes = [
      {
        id: 1,
        title: 'Classic Pancakes',
        description: 'Fluffy and delicious breakfast pancakes',
      },
      {
        id: 2,
        title: 'Vegetable Stir Fry',
        description: 'Quick and healthy vegetable stir fry',
      },
    ];
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div className="app">
      <header>
        <h1>Recipe Sharing App</h1>
      </header>
      <main>
        <div className="container">
          <div className="form-section">
            <AddRecipeForm />
          </div>
          <div className="list-section">
            <RecipeList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;