
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function StepByStepModal(props) {

    const [showModal, setShowModal] = useState(false);
    const [stepByStep, setStepByStep] = useState([]);

    async function recipeAnalyzedInstructions() {
        let url =`https://api.spoonacular.com/recipes/${props.id}/analyzedInstructions?apiKey=adcb275830bd44ab8aef7e4c56c45ad5`;
        const response = await fetch(url, {
            method: "GET",
        });
        const data = await response.json();
        setStepByStep(data);
    }

    useEffect(() => {
        recipeAnalyzedInstructions();
    }, [])

    return (
        <>
            <Button onClick={() => setShowModal(true)}>
                Show Steps
            </Button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Steps</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        stepByStep.length > 0 && stepByStep[0].steps.map((step, index) => (
                            <div key={index}>
                                <h4>Step {step.number}</h4>
                                <p>{step.step}</p>
                            </div>
                        ))
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}





