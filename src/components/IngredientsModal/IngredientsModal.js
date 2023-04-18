import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import { useState, useEffect, useRef } from "react";
import List from '../List/List'


export default function IngredientsModal(props) {
  const choiceList = useRef([]);
  const ingredients=props.ingredients;

 

  function getRandom(params) {
    props.handleClose();
  }




  return (



    <>
      <Modal show={props.show} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Ingredients</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {(ingredients==="loading")?<Spinner animation="border" />:(ingredients.length === 0) ?

            <>
              <p>you don't have any ingredients in your inventory</p>

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




}