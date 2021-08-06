import React from 'react'
import { useContext } from 'react';
import { PostContext } from '../../../contexts/postContext';

const StepButtons = ({ readContract, step, inputsSetStates, isStepInValidToContinue, setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    const { postData } = useContext(PostContext)
    console.log(postData)
    const handleNext = () => {
        if (isStepInValidToContinue()) {
            if (step === 1) {
                if (postData.city === "") inputsSetStates[0](true)
                if (postData.floor === -1) inputsSetStates[1](true)
                if (postData.floorsInBuilding === -1) inputsSetStates[2](true)
                if (postData.propType === '') inputsSetStates[3](true)
                if (postData.condition === '') inputsSetStates[4](true)
                if (postData.street === '') inputsSetStates[5](true)
            }
            else if (step === 2) {
                if (postData.rooms === -1) inputsSetStates[0](true)
            }
            else if (step === 3) {
                if (postData.totalMr === -1 || postData.totalMr === '') inputsSetStates[0](true)
                if (postData.entryDate === -1 && postData.immidiate === false) inputsSetStates[1](true)
            }
            else if (step === 5) {
                if (postData.contactName === "") inputsSetStates[0](true)
                if (postData.contactPhone === "") inputsSetStates[1](true)
                if (!readContract) inputsSetStates[2](true)
            }
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            const stepsDoneDup = [...stepsDone]
            stepsDoneDup[activeStep] = true;
            setStepsDone(stepsDoneDup)
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        const stepsDoneDup = [...stepsDone]
        stepsDoneDup[activeStep - 1] = false;
        setStepsDone(stepsDoneDup)
    };
    return (
        <div className="stepsButtons">
            <button
                disabled={activeStep === 0}
                onClick={handleBack}
                className='backStepButton'
            >
                חזרה
            </button>
            <button
                // disabled={isStepInValidToContinue()}
                onClick={handleNext}
                className='forwardStepButton'
            >
                להמשיך לשלב הבא
            </button>
        </div>
    )
}

export default StepButtons
