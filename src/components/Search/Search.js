
import '../Search/Search.css';

import SearchResult from "../SearchResult/SearchResult";
import Filter from "../Filter/Filter"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useRef } from 'react';
import { logDOM } from '@testing-library/react';


export default function Search(props) {

    const listParams = useRef([]);
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
        if (response.status!=="500" || !response.status) {
            setSearchRes(searchRes);
        }
        else {
            setSearchRes([]);
            console.log("empty data",response)
        }

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
        setSearchRes(searchRes.results);
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
    
    console.log(listParams.current);
    return (
        <>
            <div className="searchform">

                <Form className="form">
                    <h3 className="h3-title">Let's find what you want :</h3>
                    <Form.Control size="lg" type="text" onChange={handleInputChange} placeholder="Search..." required />
                    <Filter searchRes={searchRes} list={listParams} />
                    <Button className="searchbutton" variant="primary" type="submit" onClick={getData}><img className="img-icon" src="https://www.iconarchive.com/download/i60242/zerode/plump/Search.ico" alt="Search" /></Button>
                </Form>

                {(searchRes === [] || listParams.current.length === 0) ? <></> :
                    <SearchResult data={searchRes} type={(listParams.current[0].type === 'ingredient') ? "ingreidentSearch" : "recipeSearch"} />}
            </div>

        </>
    )
}
