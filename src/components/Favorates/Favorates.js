import logo from './logo.jpg'
import Card from '../Card/Card'
import React from 'react';
import  Button  from 'react-bootstrap/Button';
import {useEffect, useState} from 'react';

export default function Favorates(){
const [favRecipes,setFavRecipes ] = useState([]);
async function getFavRecipes(){
        let url =`${process.env.REACT_APP_SERVER_URL}/favRecipes`;

        let response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            
            },
})

        let recivedData = await response.json();
        setFavRecipes(recivedData)
console.log(response)
}
useEffect(()=>{
    getFavRecipes();
},[])
  


return(<>
 <img src={logo} alt="My logo" className="logo" style={{width: '100px', height: 'auto'}} />
<h2> this is Fav recipes Page</h2>
{

favRecipes && favRecipes.map(recipe=>{
    return(<>
<Card></Card>
 <Button variant="primary" onClick={()=>setFavRecipes(recipe.id)}> My Ingredants </Button>
<Button variant="primary" onClick={()=>setFavRecipes(recipe.id)}> My recipe </Button>
<Button>save</Button></>
)
    })
    }

</>
)

    



}