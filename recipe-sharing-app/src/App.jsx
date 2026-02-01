import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import { useRecipeStore } from './store/recipeStore';
import './App.css';

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // Initialize with some sample recipes
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

  // Inner component to handle params
  const RecipeDetailsWithParams = () => {
    const { id } = useParams();
    const recipeId = parseInt(id, 10);
    return <RecipeDetails recipeId={recipeId} />;
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>
            <Link to="/">Recipe Sharing App</Link>
          </h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={
              <div className="container">
                <div className="form-section">
                  <h2>Add New Recipe</h2>
                  <AddRecipeForm />
                </div>
                <div className="list-section">
                  <h2>Recipes</h2>
                  <RecipeList />
                </div>
              </div>
            } />
            <Route path="/recipe/:id" element={<RecipeDetailsWithParams />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;