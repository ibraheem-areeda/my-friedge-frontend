import { useState, useRef } from "react";
import IngredientsModal from "../IngredientsModal/IngredientsModal";
import Button from 'react-bootstrap/Button';
import List from "../List/List";

export default function Home() {
    const [show, setShow] = useState(false);
    const choiceList = useRef([]);
    const [ingredients, setIngredient] = useState([]);
    const [data, setData] = useState([]);

    const handleClose = () => {
        setShow(false);
    }

    async function handleShow() {
        setShow(true);
        getIngrediants();
    }

    async function getIngrediants() {
        let baseURL = process.env.REACT_APP_SERVER_URL;
        let ingredientURL = '/allIngredients?userID=1';
        setIngredient("loading");
        let recipeResponse = await fetch(baseURL + ingredientURL, {
            method: 'GET',
        })

        let recivedData = await recipeResponse.json();
        console.log("modal favorate", recivedData);
        setIngredient(recivedData);
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
        const searchRes = await response.json();
        console.log("Random", searchRes.recipes[0]);

        function RndomRes(obj) {
            this.image = obj.image;
            this.title = obj.title;
            this.id = obj.id
        }

        let constdata = new RndomRes(searchRes.recipes[0])

        setData([constdata])
    }




    // console.log(55555555555,data);


    return (

        <div className="home">
            <h1 >welcom to home </h1>
            <h4 >are you hungry?</h4>
            <Button variant="primary" type="submit" onClick={handleShow}>Find a Recipe</Button>
            <IngredientsModal show={show} ingredients={ingredients} handleClose={(e) => handleClose(e)} />
        </div>

    )
}

