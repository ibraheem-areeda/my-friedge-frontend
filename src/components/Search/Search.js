
import '../Search/Search.css';

import SearchResult from "../SearchResult/SearchResult";
import Filter from "../Filter/Filter"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useRef } from 'react';


export default function Search() {

    const listParams = useRef([]);
    console.log(listParams.current);

    const [inputValue, setInputValue] = useState('');
    console.log("text input val=", inputValue);
    const handleInputChange = (event) => {
        console.log(event);
        setInputValue(event.target.value);
    }




    const [test, setTest] = useState(0);

    const [searchRes, setSearchRes] = useState([])

    function toOneObj(arr) {
        const obj = arr.reduce((result, current) => {
            return { ...result, ...current };
        }, {});
        return obj
    }

    function queryString(obj) {

        const query = Object.entries(obj)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join("&");
    }





    async function getRecipes(element) {

        element.preventDefault();

        let params = toOneObj(listParams.current)
        console.log(params);

        const queryString = await Object.entries(params)
            .map(([key, value], index) => index === 0 ? "" :
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join("&");

        console.log(queryString);
        const baseURL = `https://my-friedge.onrender.com/complexSearch?query=${inputValue}&${queryString}&number=10`;
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
    //types
    // 1.ingreidentSearch
    // 2.recipeSearch
    // 3.recipeFavorate
    // 4.ingreidentFavorate
    // 5.choice
    return (
        <>
            <div className="searchform">
                <Form className="form">
                <h3 className="h3-title">Let's find what you want :</h3>
                    <Form.Control size="lg" type="text" onChange={handleInputChange} placeholder="Search..." required/>
                    <Filter searchRes={searchRes} list={listParams} test={setTest} />
                    <Button className="searchbutton" variant="primary" type="submit" onClick={getRecipes}><img className="img-icon" src="https://www.iconarchive.com/download/i60242/zerode/plump/Search.ico" alt="Search"/></Button>
                </Form>
            </div>
            <SearchResult className="search-result" data={searchRes} type={"ingreidentSearch"} />

        </>
    )
}
