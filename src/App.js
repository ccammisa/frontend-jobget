import React from 'react';
import './App.css';
import HomePageContainer from './pages/home-page/home-page.container';



function App() {
  return (
    <>
      <HomePageContainer data-testid="homepage-container" />
    </>
  );
}

export default App;
