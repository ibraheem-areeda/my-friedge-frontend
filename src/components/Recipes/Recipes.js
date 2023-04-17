import { useEffect, useState } from 'react';
import List from "../List/List"
export default function Recipes() {

    const [favRecipes, setFavRecipes] = useState([]);
    async function getFavRecipes(userID) {
        let allRecipes = `https://my-friedge.onrender.com/allRecipes`;
        
        let response = await fetch(allRecipes, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            
            },
            query: JSON.stringify({userID:userID})
        })

        let recivedData = await response.json();
        setFavRecipes(recivedData)
        console.log(2222, recivedData)
    }
    useEffect(() => {
        getFavRecipes(1);


    }, [])

    return (
        <>
            <h1>hi</h1>
            <List data={favRecipes} type={"recipe"}/>
        </>
    )
}