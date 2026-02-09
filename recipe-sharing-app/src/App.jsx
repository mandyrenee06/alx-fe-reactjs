import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Recipe Sharing App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
