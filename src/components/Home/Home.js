import { useState } from "react";
import IngredientsModal from "../IngredientsModal/IngredientsModal";
import Button from 'react-bootstrap/Button';

export default function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);










return(
        <div className="home">
    <h1 >welcom to home </h1>
    <h4 >are you hungry?</h4>
    <Button variant="primary" type="submit" onClick={handleShow}>find a recipe</Button>
    <IngredientsModal show={show} handleClose={handleClose}/>
        </div>
    
    )
}

