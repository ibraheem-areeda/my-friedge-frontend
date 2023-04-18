import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import { useState, useEffect, useRef } from "react";
import List from '../List/List'
import './modle.css'


export default function IngredientsModal(props) {
  const choiceList = useRef([]);
  const ingredients = props.ingredients;



  function getRandom(params) {
    props.handleClose();
  }

  return ((ingredients === "loading") ? <Spinner animation="border" /> :

    <>
      <Modal show={props.show} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className="head"> Are you ready to be a chife?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {(ingredients.length === 0) ?

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

            : <><Modal.Title>Please choose the ingredients you want for your meal</Modal.Title>
              <List data={ingredients} type={"choice"} /></>
          }
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )

}

