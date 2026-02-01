import { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import useRecipeStore from './store/recipeStore';
import './App.css';

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    const sampleRecipes = [
      {
        id: 1,
        title: 'Classic Pancakes',
        description: 'Fluffy and delicious breakfast pancakes',
        ingredients: ['1 cup flour', '2 tbsp sugar', '1 tsp baking powder', '1 cup milk', '1 egg', '2 tbsp butter'],
        instructions: 'Mix dry ingredients. Add wet ingredients. Cook on hot griddle until golden brown.'
      },
      {
        id: 2,
        title: 'Vegetable Stir Fry',
        description: 'Quick and healthy vegetable stir fry',
        ingredients: ['2 cups mixed vegetables', '2 tbsp soy sauce', '1 tbsp oil', '2 cloves garlic', '1 tsp ginger'],
        instructions: 'Heat oil in wok. Add garlic and ginger. Stir-fry vegetables until tender. Add soy sauce.'
      }
    ];
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🍳 Recipe Sharing App</h1>
        <p>Share and discover delicious recipes</p>
      </header>
      
      <main className="app-main">
        <div className="container">
          <div className="left-panel">
            <AddRecipeForm />
          </div>
          <div className="right-panel">
            <RecipeList />
          </div>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Built with React & Zustand | Recipe Sharing Application</p>
      </footer>
    </div>
  );
}

export default App;