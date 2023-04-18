import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import { useState, useEffect, useRef } from "react";
import List from '../List/List'
import './modle.css'


export default function IngredientsModal(props) {
  const [ingredients, setIngredient] = useState([]);
  const choiceList = useRef([]);

 async function getIngrediants() {
    let baseURL = process.env.REACT_APP_SERVER_URL;
    let ingredientURL = '/allIngredients?userID=1';

    let recipeResponse = await fetch(baseURL + ingredientURL, {
      method: 'GET',
    })

    let recivedData = await recipeResponse.json();
    console.log("modal favorate",recivedData);
    setIngredient(recivedData);
  }

  function getRandom(params) {
    props.handleClose();
  }

  useEffect(() => {
    getIngrediants();
  }, [])



  return (



    <>
      <Modal show={props.show} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Ingredients</Modal.Title>
        </Modal.Header>
        {/* <Spinner animation="border" /> */}
        <Modal.Body>
          {(ingredients===[])?<h1>loading</h1>:(ingredients.length === 0) ?

            <>

                <Modal show={props.show} onHide={props.handleClose} >
                <Modal.Header closeButton>
                  <Modal.Title>Ingredients</Modal.Title>
                </Modal.Header>
        
                <Modal.Body>
                {(ingredients.length==0)?
               
                  <> 
                <p>You don't have any ingredients in your inventory</p>
                    <div className="btn">
                   <a href="/Search"><Button variant="primary" type="submit"  >
                    look for ingredients 
                  </Button></a>
                     
                  <Button variant="primary" type="submit" >
                  get random recipy
                  </Button></div>
             </>
       
                :<><Modal.Label>Please choose the ingredients you want for your meal</Modal.Label>
                <List data={props.data}type={"choice"}/></>
                }
                </Modal.Body>
         
                <Modal.Footer>
                  <Button  variant="secondary" onClick={props.handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
        
        
        
        
                </Modal>
                </>)
      
}
     /*  <p>you don't have any ingredients in your inventory</p>

              <a href="/Search"><Button variant="primary" type="submit"  >
                look for ingredients
              </Button></a>

              <Button variant="primary" type="submit" onClick={getRandom}>
                get random recipy
              </Button>
            </>

            : <>
            <Modal.Title>Please choose the ingredients you want for your meal</Modal.Title>
              <List data={ingredients} type={"choice"} choiceList={choiceList}/>
              </>
          }
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>




      </Modal>
    </>)
*/
