import { useState, useRef, useEffect } from "react";
import IngredientsModal from "../IngredientsModal/IngredientsModal";
import Button from 'react-bootstrap/Button';
import List from "../List/List";

export default function Home() {
    const [thelist, setthelist] = useState(false);
    const [show, setShow] = useState(false);
    const [data, setdata] = useState([]);
console.log(thelist)
    const handleClose = () => {
        setShow(false);
        setthelist(true)
    }

    const handleShow = () => {
        setShow(true);
        setthelist(false)
    }
     
    
    
    async function getRandomRecipe() {


        const baseURL = `https://my-friedge.onrender.com/randomRecipes`;
        console.log("url base", baseURL);

        const response = await fetch(baseURL,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'

                },
            })
        const searchRes  = await response.json();
        console.log(searchRes.recipes[0]);

        function Rndomres(obj){
            this.image = obj.image;
            this.title = obj.title;
            this.id  = obj.id }
       
        let constdata = new Rndomres(searchRes.recipes[0])

        setdata([constdata])
    }


  
 
console.log(55555555555,data);


    return (

        <div className="home">
            <h1 >welcom to home </h1>
            <h4 >are you hungry?</h4>
            <Button variant="primary" type="submit" onClick={handleShow}>find a recipe</Button>
            <IngredientsModal show={show} handleClose={(e) => handleClose(e)} />
            <List type={"recipeSearch"} data={data}/>
        </div>

    )
}

