

import Button from 'react-bootstrap/Button';
import { Card as bootCard } from 'react-bootstrap/Card';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Card(props) {
    let data = props.data;
    const [cardData, setCard] = useState(data);
    let type = props.type;
    let source = props.source;
    let opirationsList = props.opirationsList;

    function increaseQuantity() {
        data.quantity += 1;
        setCard(data);

        let target = data.findIndex((element) => { return element === { opiration: "UPDATE", data: data } })

        if (target === -1)
            opirationsList.push({ opiration: "UPDATE", data: data });

        else opirationsList[target] = { opiration: "UPDATE", data: data };
    }
    function decreaseQuantity() {
        data.quantity -= 1;
        setCard(data);

        let target = data.findIndex((element) => { return element === { opiration: "UPDATE", data: data } })

        if (target === -1)
            opirationsList.push({ opiration: "UPDATE", data: data });

        else opirationsList[target] = { opiration: "UPDATE", data: data };
    }

    function toggleFavorate() {
        // setCard(data);

        let target = data.findIndex((element) => { return element === { opiration: "ADD", data: data } })

        if (target === -1)
            opirationsList.push({ opiration: "ADD", data: data, type: type });

            else opirationsList.splice(target,1);
    }

    return (
        <div className='Card'>

            <div>
                {(type !== 'choice') ? <div onClick={toggleFavorate}>
                    <FontAwesomeIcon icon="fa-solid fa-star" size="2xl" />
                </div> : <Button variant="primary" onClick={increaseQuantity}>todo-Switch</Button>}
                {(type === "favorate") ? <>
                    <Button variant="primary" onClick={increaseQuantity}><FontAwesomeIcon icon="fa-solid fa-plus" /></Button>
                    <Button variant="primary" onClick={decreaseQuantity}><FontAwesomeIcon icon="fa-solid fa-minus" /></Button>
                </> : <></>
                }
            </div>

            <bootCard style={{ width: '18rem' }}>
                <bootCard.Img variant="top" src="holder.js/100px180" />

                <bootCard.Body>
                    <bootCard.Title>{(type === "recipe") ? cardData.title : (type === 'ingredient' && source === 'API') ? cardData.name : cardData.item_name}</bootCard.Title>
                    <Card.Text>
                        {(type === "favorate") ? cardData.quantity : <></>}
                    </Card.Text>
                </bootCard.Body>

            </bootCard>
        </div>
    );
}

export default Card;