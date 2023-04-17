
import CardApp from "../Card/Card"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState, useRef, useEffect } from 'react';



function List(props) {
    let showLimit = 5;
    const [showMore, setShowMore] = useState(false);
    const opirationsList = useRef([]);

    function toggleShowMore() {
        setShowMore(!showMore);
    }

    function executeOpirations() {
        let baseURL = process.env.REACT_APP_SERVER_URL;
        console.log(1111111111111, baseURL);
        let updateURL = "/updateIngredient", addRecipeURL = "/addNewRecipe", addIngredientURL = "/addIngredient";

        opirationsList.forEach(async (item) => {
            if (item.opiration === "UPDATE") {
                let response = await fetch(baseURL + updateURL, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'

                    },
                    query: JSON.stringify(item.data)
                })
            }
            else if (item.type === "ingredient") {
                let response = await fetch(baseURL + addIngredientURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'

                    },
                    query: JSON.stringify(item.data)
                })
            }
            else {
                let response = await fetch(baseURL + addRecipeURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'

                    },
                    query: JSON.stringify(item.data)
                })
            }

        });

    }

    let data = props.data;
    let type = props.type;
    return (
        <Form>
            {data.map((obj, index) => {
                if (showMore === true || index <= showLimit) {
                    return (<CardApp data={obj} type={type} opirationsList={opirationsList} />);
                }
                else
                    return;
            })}
            <Button variant="outline-primary" onClick={toggleShowMore}>Show More</Button>
            <Button variant="primary" type="submit" onClick={executeOpirations}>Save</Button>
        </Form>
    )

}
export default List;

