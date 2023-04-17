
import SearchResult from "../SearchResult/SearchResult";
import Filter from "../Filter/Filter"
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';

export default function Search() {
    const listParams = useRef([]);
    console.log(listParams.current);
    const [test, setTest] = useState(0);
    const [searchRes, setSearchRes] = useState([
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            "imageType": "jpg",
        },
        {
            "id": 715538,
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
            "imageType": "jpg",
        }
    ])

    async function getRecipes(element){
        element.preventDefault();
        console.log(new URLSearchParams(listParams).toString(),999999999999999999999);
        const baseURL= "https://my-friedge.onrender.com";
        const response = await fetch(`${baseURL}/complexSearch`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'

            },
         } )
        const searchRes = await response.json();
        setSearchRes(searchRes);
        console.log(searchRes);
    }
 

    return (
        <>
            <Form>
                <Form.Control size="lg" type="text" placeholder="Large text" />
                <Filter searchRes={searchRes} list={listParams} test={setTest}/>
                <Button variant="primary" type="submit" onClick={getRecipes}>Search</Button>
            </Form>

            <SearchResult data={searchRes} type={"ingredient"} source={"API"} />
            <p>{`${searchRes}`}</p>
        </>
    )
}
