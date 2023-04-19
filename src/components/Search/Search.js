
import '../Search/Search.css';

import SearchResult from "../SearchResult/SearchResult";
import Filter from "../Filter/Filter"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useRef } from 'react';
import { logDOM } from '@testing-library/react';


export default function Search(props) {

    const listParams = useRef([]);
    const [test, setTest] = useState(0);
    const [searchRes, setSearchRes] = useState([])
    const [inputValue, setInputValue] = useState('');

    console.log(listParams.current);

    const handleInputChange = (event) => {
        console.log(event);
        setInputValue(event.target.value);
    }
    
    function toOneObj(arr) {
        const obj = arr.reduce((result, current) => {
            return { ...result, ...current };
        }, {});
        return obj
    }

    async function getRecipes() {
        let params = toOneObj(listParams.current)
        console.log("params", params);

        const queryString = await Object.entries(params)
            .map(([key, value], index) => index === 0 ? "" :
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join("&");

        console.log(queryString);
        const baseURL = `https://my-friedge.onrender.com/complexSearch?query=${inputValue}${queryString}&number=10`;
        console.log("url base", baseURL);

        const response = await fetch(baseURL,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'

                },
            })
        const searchRes = await response.json();
        setSearchRes(searchRes);
        console.log(searchRes);
    }
    async function getIngredients(element) {
        const baseURL = `https://my-friedge.onrender.com/searchIngredients?query=${inputValue}&number=10`;
        console.log("url base", baseURL);

        const response = await fetch(baseURL,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'

                },
            })


        const searchRes = await response.json();
        setSearchRes(searchRes);
        console.log(searchRes);
    }


    function getData(element) {
        element.preventDefault();
        if (listParams.current.length !== 0) {
            if (listParams.current[0].type === 'ingredient') {
                getIngredients();
            }
            else {
                getRecipes();
            }
        }
    }

    //types
    // 1.ingreidentSearch
    // 2.recipeSearch
    // 3.recipeFavorate
    // 4.ingreidentFavorate
    // 5.choice
    console.log(listParams.current,11111);
    return (
        <>
            <div className="searchform">
                <Form>

                    <Form.Control size="lg" type="text" onChange={handleInputChange} placeholder="Search..." required />
                    <Filter searchRes={searchRes} list={listParams} test={setTest} />
                    <Button variant="primary" type="submit" onClick={getData}>Search</Button>
                    
                </Form>
            </div>
            {(searchRes===[])?<></>:
            <SearchResult data={searchRes} type={(listParams.current[0] === 'ingredient')?"recipeSearch":"ingreidentSearch"} />}

        </>
    )
}
