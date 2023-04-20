

import "./Favorates.css"

import List from '../List/List';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Spinner from 'react-bootstrap/Spinner'

import { useEffect, useState } from 'react';
import React from 'react';

export default function Favorates() {
    const [favorate, setFavorate] = useState({ recipe: "loading", ingredient: "loading" });
    const [state, setState] = useState('loading');

    async function getFavorateRecipes() {
        let baseURL = process.env.REACT_APP_SERVER_URL;
        let recipeURL = '/allRecipes?userID=1';


        let recipeResponse = await fetch(baseURL + recipeURL, {
            method: 'GET',
        })

        let recivedData = await recipeResponse.json();
        favorate.recipe = recivedData;
        setFavorate(favorate);
    }

    async function getFavorateIngredients() {
        let baseURL = process.env.REACT_APP_SERVER_URL;
        let ingredientURL = '/allIngredients?userID=1';

        let recipeResponse = await fetch(baseURL + ingredientURL, {
            method: 'GET',
        })

        let recivedData = await recipeResponse.json();
        favorate.ingredient = recivedData;
        setFavorate(favorate);
        console.log(favorate);
        setState('ingredient');
    }

    const handleChange = (element) => {
        setState(element.target.value);
    }
    useEffect(() => {
        getFavorateRecipes();
        getFavorateIngredients();
    }, [])



    return (
        <>
            {(state === "loading") ?
                <Spinner animation="border" /> :

                <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="favorite-buttons-container">
                    <ToggleButton id="tbg-radio-1" value={"ingredient"} onChange={handleChange}>
                       My Ingredients
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={"recipe"} onChange={handleChange}>
                        My Recipes
                    </ToggleButton>
                </ToggleButtonGroup>
            }

            {(state === "ingredient") ? <List data={favorate.ingredient} type={'ingreidentFavorate'} />
                : (state === "recipe") ? <List data={favorate.recipe} type={'recipeFavorate'} />
                    : <></>
            }
        </>
    )
          }

//   function RecipeCards() {
//     return (
//       <>
//         {favRecipes.map((recipe) => {
//           return (
//             <>
//               <Card></Card>
//               <Button
//                 variant="primary"
//                 onClick={() => setFavRecipes(recipe.id)}
//               >
//                 My Ingredients
//               </Button>
//               <Button
//                 variant="primary"
//                 onClick={() => setFavRecipes(recipe.id)}
//               >
//                 My recipe
//               </Button>
//               <Button>save</Button>
//             </>
//           );
//         })}
//       </>
//     );
//   }

//   function MyHeader() {
//     return (
//       <>
//         <div >
        
//           <h1> This is Favorite Page</h1>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <MyHeader />
//       <RecipeCards />
//     </>
//   );
// }
