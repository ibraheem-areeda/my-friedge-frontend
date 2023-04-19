
import CardApp from "../Card/Card"
import "./List.css"
import Button from 'react-bootstrap/Button';
import { useState, useRef } from 'react';

function RecipeStruct(obj) {
    this.id = obj.id;
    this.item_image = obj.image;
    this.title = obj.title;
    this.userID = 1;
}

function IngredientStruct(obj) {
    this.id = obj.id;
    this.item_image = obj.image;
    this.item_name = obj.title;
    this.quantity = (obj.quantity >= 1) ? obj.quantity : 1;
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
        element.preventDefault();
        if (props.type === "choice") {
            props.modalCloseHandler();
        }

        let baseURL = process.env.REACT_APP_SERVER_URL;
        let updateURL = '/update', deleteURL = "/delete", addURL = "/add";


        opirationsList.current.forEach(async (item, index) => {
            let method = (item.opiration === "UPDATE") ? 'PUT' : (item.opiration === "ADD") ? "POST" : 'DELETE'
            let url = baseURL;
            url += (item.opiration === "UPDATE") ? updateURL : (item.opiration === "ADD") ? addURL : deleteURL

            if (item.type === "ingreidentFavorate" || item.type === "ingreidentSearch") {
                let response = await fetch(url + "Ingredient", {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'

                    },
                    body: JSON.stringify(new IngredientStruct(item.data))
                })
            }
            else {
                let response = await fetch(url + "Recipe", {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'

                    },
                    body: JSON.stringify(new RecipeStruct(item.data))
                })
            }
            if (index === opirationsList.current.length - 1) {
                window.location.reload();
            }
        })

    }

    let data = props.data;
    let type = props.type;
    console.log("type of list", type);
    console.log('data in list', data);
    return (

        (data.length !== 0) ?
            <div className="list-wraper">
                <div className="cards-container">
                    {data.map((obj, index) => {
                        if (showMore === true || index < showLimit) {
                            return (<CardApp data={obj} type={type} opirationsList={opirationsList} key={obj.id} choiceList={props.choiceList} />);
                        }
                        else
                            return;
                    })}


                </div>

                {(data.length > showLimit) ? <div className="submit-button">
                    <Button variant="outline-primary" onClick={toggleShowMore}>{(!showMore) ? 'Show More' : "Show Less"}
                    </Button>
                </div> : <></>}

                <div className="submit-button">
                    <Button variant="primary" type="submit" onClick={executeOpirations}>Save</Button>
                </div>
            </div>

            : <h1>List is Empty</h1>

    )

}
export default List;

//List types
    // 1.ingreidentSearch
    // 2.recipeSearch
    // 3.recipeFavorate
    // 4.ingreidentFavorate
    // 5.choice

