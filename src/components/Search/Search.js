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
    const [data, setData] = useState([]);

    function handleDataReceived (data) {
        setData(data);
        console.log(data);
      }

    async function getRecipes(){
        

        const url= `https://my-friedge.onrender.com/complexSearch?${data}&number=2`;
       
           console.log(11111111111,url);
            
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                
                },
              
               
            })
            
            let recivedData = await response.json();
            setsearchRes(recivedData)
            
            console.log(2222, recivedData)
        

    

    }

    useEffect(()=>{
        getRecipes();
    },[])  

//choice
    return(
        <>

        <SearchResult data={testData} type={"choice"} source={"API"}/>
        <Filter onDataReceived={handleDataReceived} />
        <p>Data received from child: {data}</p>

        </>
    )
}
