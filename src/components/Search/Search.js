import SearchResult from "../SearchResult/SearchResult";
import Filter from "../Filter/Filter"
import{ useState, useEffect } from 'react';
export default function Search() {
    let testData=[
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
    ];
    const [searchRes,setsearchRes]=useState([])
    const [obj,setobj]=useState([])

    // async function getRecipes(){
       
    //     setobj(obj)
    //     const url= "https://my-friedge.onrender.com";
    //     const response = await fetch(`${url}/complexSearch`,
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'

    //         },
    //         query: JSON.stringify(obj)
    //      } )


        
    //     const searchRes = await response.json();
    //     setsearchRes(searchRes);
    //     console.log(searchRes);
    // }

    // useEffect(()=>{
    //     getRecipes();
    // },[])  
//choice
    return(
        <>
        <SearchResult data={testData} type={"choice"} source={"API"}/>
        <p>{`${testData}`}</p>
        <Filter searchRes={searchRes} />
        </>
    )
}
