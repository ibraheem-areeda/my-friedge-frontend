import SearchResult from "../SearchResult/SearchResult";
import Filter from "../Filter/Filter"
import{ useState, useEffect } from 'react';
export default function Search() {
    const [searchRes,setsearchRes]=useState([])
    const [obj,setobj]=useState([])

    async function getRecipes(){
        setobj(obj)
        const url= "https://my-friedge.onrender.com";
        const response = await fetch(`${url}/complexSearch`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'

            },
            query: JSON.stringify(obj)
         } )


        
        const searchRes = await response.json();
        setsearchRes(searchRes);
        console.log(searchRes);
    }

    useEffect(()=>{
        getRecipes();
    },[])  

    return(
        <>
        <SearchResult data={searchRes} type={"choice"} source={"API"}/>
        <p>{`${searchRes}`}</p>
        <Filter searchRes={searchRes} />
        </>
    )
}
