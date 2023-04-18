
import { useState } from 'react';
import Form from 'react-bootstrap/Form';







 function Filter (props) {

    const [pra, setpra] = useState({ type: "ingredient" });
    console.log(7777777,pra);

    const listParams = props.list;
    const [state, setState] = useState({ type: "ingredient" });
    function replace(array, obj) {
        for (let i = 0; i < array.length; i++) {

            let temp = Object.keys(array[i]);
            let target = Object.keys(obj);
            if (temp[0] === target[0]) {
                array[i] = obj;
                return;
            }
        }
        array.push(obj);
    }

    const handleChange = (element) => {
        
        let data = JSON.parse(element.target.value);
        replace(listParams.current, data);
        if (data.type !== undefined){
            setState(data);
            console.log(state,"this is state");
        }
        console.log(listParams.current,element);
        props.test(1);
        setpra(listParams.current)
        
    }
    

    
    
        const sample = "ingredient"
    
        const onClick = () => {
          props.passData(sample)
        }
    
 

    return (
        <>
            <Form.Select aria-label="Default select example" onChange={handleChange}defaultValue={"chose"}>
                <option onChange={onClick}  value={JSON.stringify({ type: "ingredient" })}>Ingredient</option>
                <option value={JSON.stringify({ type: "recipe" })}>Recipe</option>
            </Form.Select>

            {(state.type === "ingredient") ? <></> :
                <>

                    <Form.Select aria-label="Default select example" onChange={handleChange}>
                        <option value="chose an option">chose an option</option>
                        <option value={JSON.stringify({ cusine: "Middle Eastern" })}>Middle Eastern</option>
                        <option value={JSON.stringify({ cusine: "American" })}>American</option>
                    </Form.Select>

                    <Form.Select aria-label="Default select example" onChange={handleChange}>
                        <option value="chose an option">chose an option</option>
                        <option value={JSON.stringify({ diet: "Vegetarian" })}>Vegetarian</option>
                        <option value={JSON.stringify({ diet: "Ketogenic" })}>Ketogenic</option>
                    </Form.Select>
                </>
            }
            
        </>
    )




}


export default Filter