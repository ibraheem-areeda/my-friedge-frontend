import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import List from '../List/List'


export default function IngredientsModal(props) {
  const [ingredients, setIngredient] = useState([]);

  async function getIngrediants() {
    let url = `${process.env.REACT_APP_SERVER_URL}/allIngredient`;
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    setIngredient(data)
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

        <Modal.Body>
          {(ingredients.length == 0) ?

            <>
              <p>you don't have any ingredients in your inventory</p>

              <a href="/Search"><Button variant="primary" type="submit"  >
                look for ingredients
              </Button></a>

              <Button variant="primary" type="submit" onClick={(e)=>props.handleClose(e)}>
                get random recipy
              </Button>
            </>

            : <><Modal.Label>Please choose the ingredients you want for your meal</Modal.Label>
              <List data={props.data} type={"choice"} /></>
          }
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>




      </Modal>
    </>)




}