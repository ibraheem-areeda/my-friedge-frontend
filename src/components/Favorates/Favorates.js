
import Card from '../Card/Card';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Favorates.css';

export default function Favorates() {
  const [favRecipes, setFavRecipes] = useState([]);

  async function getFavRecipes() {
    let url = `${process.env.REACT_APP_SERVER_URL}/favRecipes`;
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    let receivedData = await response.json();
    setFavRecipes(receivedData);
    console.log(response);
  }

  useEffect(() => {
    getFavRecipes();
  }, []);

  function RecipeCards() {
    return (
      <>
        {favRecipes.map((recipe) => {
          return (
            <>
              <Card></Card>
              <Button
                variant="primary"
                onClick={() => setFavRecipes(recipe.id)}
              >
                My Ingredients
              </Button>
              <Button
                variant="primary"
                onClick={() => setFavRecipes(recipe.id)}
              >
                My recipe
              </Button>
              <Button>save</Button>
            </>
          );
        })}
      </>
    );
  }

  function MyHeader() {
    return (
      <>
        <div >
        
          <h1> This is Favorite Page</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <MyHeader />
      <RecipeCards />
    </>
  );
}
