
import CardApp from "../Card/Card"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState, useRef } from 'react';

function RecipeStruct(obj) {
    this.id = obj.id;
    this.itme_image = obj.image;
    this.title = obj.title;
    this.userID = 1;
}

function IngredientStruct(obj) {
    this.id = obj.id;
    this.itme_image = obj.image;
    this.item_name = obj.title;
    this.quantity = obj.quantity;
    this.userID = 1;
}

function List(props) {
    
    let showLimit = 5;
    const [showMore, setShowMore] = useState(false);
    const opirationsList = useRef([]);
    function toggleShowMore() {
        setShowMore(!showMore);
    }

    function executeOpirations(element) {
        console.log(opirationsList);

        if (props.type==="choice") {
            props.modalCloseHandler();
        }

        let baseURL = process.env.REACT_APP_SERVER_URL;
        let updateURL ='/update' , deleteURL = "/delete", addURL = "/add";
        element.preventDefault();

        opirationsList.current.forEach(async (item,index) => {
            
            let method = (item.opiration === "UPDATE") ? 'PUT' : (item.opiration === "ADD") ? "POST" : 'DELETE'
            let url = baseURL;
            url += (item.opiration === "UPDATE") ? updateURL: (item.opiration === "ADD") ? addURL : deleteURL
            
            if (item.type === "ingreidentFavorate" || item.type==="ingreidentSearch") {
                let response = await fetch(url+"Ingredient", {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'

                    },
                    body: JSON.stringify(new IngredientStruct(item.data))
                })
            }
            else {
                let response = await fetch(url+"Recipe", {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'

                    },
                    body: JSON.stringify(new RecipeStruct(item.data))
                })
            }
            if (index===opirationsList.current.length-1) {
                // window.location.reload();
            }
        })

    }

    let data = props.data;
    let type = props.type;
    return (
        <Form>
            {data.map((obj, index) => {
                if (showMore === true || index < showLimit) {
                    return (<CardApp data={obj} type={type} opirationsList={opirationsList} key={obj.id} choiceList={props.choiceList}/>);
                }
                else
                    return;
            })}

            {(data.length>=showLimit)?<Button variant="outline-primary" onClick={toggleShowMore}>Show More</Button>:<></>}
            <Button variant="primary" type="submit" onClick={executeOpirations}>Save</Button>
        </Form>
    )

}
export default List;

