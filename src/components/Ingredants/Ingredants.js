
import List from '../List/List'
import { useState } from 'react';
import { button} from 'react-bootstrap';


function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [editedIngredients, setEditedIngredients] = useState([]);
  const [showSaveButton, setShowSaveButton] = useState(false);

  const handleIngredientClick = (ingredient) => {
    if (editedIngredients.includes(ingredient)) {
    
      setEditedIngredients(editedIngredients.filter((i) => i !== ingredient));
    } else {
      
      setEditedIngredients([...editedIngredients, ingredient]);
    }
    setShowSaveButton(true); 
  };

  const handleSaveButtonClick = () => {
   
    setIngredients(editedIngredients);
    setEditedIngredients([]);
    setShowSaveButton(false);
  };

  return (
    <><List data={props.data} type={"recipe" || "ingredient"} />
    <div>
      <h2>My Fridge</h2>
      {ingredients.map((ingredient) => (
        <span
          key={ingredient}
          onClick={() => handleIngredientClick(ingredient)}
          style={{
            marginRight: '10px',
            cursor: 'pointer',
            color: editedIngredients.includes(ingredient) ? 'yellow' : 'black',
          }}
        >
          &#9733; {ingredient}
        </span>
      ))}
      {showSaveButton && (
        <button onClick={handleSaveButtonClick}>Save</button>
      )}
    </div></>
  );
}









// function Ingredients(props) {
//     const [setShow] = useState(false);

//     const handleShow = () => setShow(true);
//     return (<div className="save">
//         <List data={props.data} type={"recipe" || "ingredient"} />
//         <Button variant="primary" onClick={handleShow}>save</Button>
//     </div>
//     );
// }
export default Ingredients;
