import React from 'react';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>

      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
