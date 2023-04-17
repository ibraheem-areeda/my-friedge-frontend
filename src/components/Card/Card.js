
import './Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function getCardData(Card) {
    let temp = Card;
    temp.title = (Card.title !== undefined) ? Card.title : (Card.name !== undefined) ? Card.name : Card.item_name;
    return temp;
}

function findIndex(arr, obj) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].data.id === obj.data.id && obj.opiration === arr[i].opiration) {
            return i;
        }
    }
    return -1;
}

function choiceStruct(obj) {
    this.id = obj.id;
    this.name = obj.title;
}

function CardApp(props) {
    let data = props.data;
    let type = props.type;
    const [cardData, setCard] = useState(getCardData(data));
    const [starClass, setClass] = useState((type==="favorate")?"yellow":'gray');

    let opirationsList = props.opirationsList;
    let choiceList = props.choiceList;

    function switchHandler(element) {
        if (element.target.checked) {
            choiceList.current.splice(findIndex(choiceList, { data: new choiceStruct(cardData), opiration: "NOT_CHOSEN" }), 1);
        }
        else {
            choiceList.current.push({ data: new choiceStruct(cardData), opiration: "NOT_CHOSEN" });

        }
        console.log(choiceList)
    }

    function increaseQuantity() {
        data.quantity += 1;
        setCard(data);

        let target = findIndex(opirationsList.current, { opiration: "UPDATE", data: data });

        if (target === -1)
            opirationsList.current.push({ opiration: "UPDATE", data: data, type: type });

        else opirationsList.current[target] = { opiration: "UPDATE", data: data, type: type };
        console.log(opirationsList.current)
    }

    function decreaseQuantity() {
        data.quantity -= 1;
        setCard(data);

        let target = findIndex(opirationsList.current, { opiration: "UPDATE", data: data, type: type });
        console.log("target", target)
        if (target === -1)
            opirationsList.current.push({ opiration: "UPDATE", data: data });

        else opirationsList.current[target] = { opiration: "UPDATE", data: data, type: type };
        console.log(opirationsList.current)
    }

    function toggleFavorate() {

        setClass((starClass === "gray") ? "yellow" : "gray");
        let baseOpiration=(type==="favorate")?"DELETE":'ADD'
        let target =findIndex(opirationsList.current, { opiration: baseOpiration, data: data, type: type })

        if (target === -1) {
            opirationsList.current.push({ opiration: baseOpiration, data: data, type: type });
        }

        else if(starClass){
            opirationsList.current.splice(target, 1);
        }
        console.log(opirationsList.current)
    }

    return (
        <div className='Card'>

            <div>
                {(type !== 'choice') ?
                    <div onClick={toggleFavorate}>
                        <FontAwesomeIcon className={starClass} icon="fa-solid fa-star" size="2xl" style={{ color: "#a4a5a8", }} />
                    </div>
                    : <></>

                }
                {(type === "favorate") ? <div className='cardPlusMinus'>
                    <Button variant="primary" onClick={increaseQuantity}><FontAwesomeIcon icon="fa-solid fa-plus" /> </Button>
                    <Button variant="danger" onClick={decreaseQuantity}><FontAwesomeIcon icon="fa-solid fa-minus" /></Button>
                </div> : <></>
                }
            </div>

            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={`${cardData.image}`} />

                <Card.Body>
                    <Card.Title>{cardData.title}</Card.Title>
                    <Card.Text>
                        {(type === "favorate") ? cardData.quantity : <></>}
                    </Card.Text>
                </Card.Body>
            </Card>
            {(type === "choice") ? <Form.Check type="switch" id="custom-switch" className='switch' onChange={switchHandler} /> : <></>}
        </div>
    );
}

export default CardApp;