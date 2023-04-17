import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';




export default function Filter(props) {
    const [value, setValue] = useState("1")
    
   
    const sendDataToParent = (data) => {
        
        props.onDataReceived(data);
    }

  
    

    const handleChange = (element) => {
        setValue(element.target.value)
        console.log(22222222, value)
        console.log(3333333, element.target.value)
    }

    return (
        <>
            <p>{`this is from filter ${props.searchRes}`}</p>
            <button onClick={sendDataToParent}>Send data to parent</button>
            <br />

            <ToggleButtonGroup type="radio" name="options" >
                <ToggleButton id="tbg-radio-1" value={1}  onChange={handleChange}>
                    ingragant
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2} onChange={handleChange}>
                    Recipe
                </ToggleButton>

            </ToggleButtonGroup>
            <br />
            {(value == 1) ? <>  </>
                :

                <>
                    <ToggleButtonGroup type="radio" name="cusen" defaultValue={1}>
                        <ToggleButton id="tbg-radio-3" value={1}>
                            American
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-4" value={2}>
                            Middle Eastern
                        </ToggleButton>

                    </ToggleButtonGroup>

                    <br />
                    <ToggleButtonGroup type="radio" name="diet" defaultValue={1}>
                        <ToggleButton id="tbg-radio-5" value={1}>
                            Vegetarian
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-6" value={2}>
                            Ketogenic
                        </ToggleButton>

                    </ToggleButtonGroup>
                </>
            }


        </>
    )




}