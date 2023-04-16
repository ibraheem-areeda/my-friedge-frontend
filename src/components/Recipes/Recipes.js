import { useEffect, useState } from 'react';

export default function Recipes() {

    const [favRecipes, setFavRecipes] = useState([]);
    async function getFavRecipes() {
        let url = `${process.env.REACT_APP_SERVER_URL}/allRecipes`;

        let response = await fetch(url, {
            method: 'GET',
        })

        let recivedData = await response.json();
        setFavRecipes(recivedData)
    }
    useEffect(() => {
        getFavRecipes();


    }, [])

    return (
        <>
            <List />
        </>
    )
}