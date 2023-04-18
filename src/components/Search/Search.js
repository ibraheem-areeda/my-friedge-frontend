
import SearchResult from "../SearchResult/SearchResult";
import Filter from "../Filter/Filter"
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import  '../Search/Search.css';

export default function Search() {

    const listParams = useRef([]);
    console.log(listParams.current);
    
    const [inputValue, setInputValue] = useState('');
    console.log("text input val=",inputValue);
      const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    
  


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
      

    


    async function getRecipes(element){
       
        element.preventDefault();
        
        let params = toOneObj(listParams.current)
        console.log(params);

        const queryString = await Object.entries(params)
    .map(([key, value],index) =>index==0?"":
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join("&");

        console.log(queryString);
        const baseURL= `https://my-friedge.onrender.com/complexSearch?query=${inputValue}&${queryString}&number=10`;
        console.log("url base",baseURL);

        const response = await fetch(baseURL,
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
        <div className="searchform">
            <Form>
                <Form.Control size="lg" type="text" onChange={handleInputChange} placeholder="Large text" />
                <Filter searchRes={searchRes} list={listParams} test={setTest}/>
                <Button variant="primary" type="submit" onClick={getRecipes}>Search</Button>
            </Form>
        </div>
            <SearchResult data={searchRes} type={"ingredient"} source={"API"} />
            
        </>
    )
}
