/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import IngredientsModal from "../IngredientsModal/IngredientsModal";
import Button from 'react-bootstrap/Button';
import './home.css'
import home from'./home.jpg'


export default function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);










return(
    <>
    <body>
    <div className="home">

    <div className="homeimg">
        <img src={home}/>
    </div>

    <div className="content">
    <h2> Don't be confused about what you will eat today </h2>
    <h4 >Are you hungry?
    </h4>

    <Button className="button large" variant="primary" type="submit" onClick={handleShow}>find a recipe</Button>
    <IngredientsModal show={show} handleClose={handleClose}/></div>
        </div>
        
        </body> </>
    )
}

