import { useState, useRef, useEffect } from "react";
import IngredientsModal from "../IngredientsModal/IngredientsModal";
import Button from 'react-bootstrap/Button';
import List from "../List/List";

export default function Home() {
    const [thelist, setthelist] = useState(false);
    const [show, setShow] = useState(false);
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


        const baseURL = `https://my-friedge.onrender.com/randomRecipes&number=1`;
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
        console.log(searchRes);
    }


    useEffect(() => {
        getRandomRecipe()
    }, []);



    return (

        <div className="home">
            <h1 >welcom to home </h1>
            <h4 >are you hungry?</h4>
            <Button variant="primary" type="submit" onClick={handleShow}>find a recipe</Button>
            <IngredientsModal show={show} handleClose={(e) => handleClose(e)} />
            <List />
        </div>

    )
}

