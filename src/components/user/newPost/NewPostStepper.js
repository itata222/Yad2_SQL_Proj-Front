import React, { useState } from 'react';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import Step6 from './steps/Step6';


const NewPostStepper = ({ setShowSpinner }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [stepsDone, setStepsDone] = useState([false, false, false, false, false, false]);
    const stepsHeaders = ['כתובת הנכס', 'על הנכס', 'תשלומים, תאריכים ועוד', 'תמונות וסרטונים', 'פרטים ליצירת קשר', 'סיום פרסום'];

    const stepsComponent = [
        <Step1 stepsDone={stepsDone} activeStep={activeStep} setStepsDone={setStepsDone} setActiveStep={setActiveStep} />,
        <Step2 stepsDone={stepsDone} activeStep={activeStep} setStepsDone={setStepsDone} setActiveStep={setActiveStep} />,
        <Step3 stepsDone={stepsDone} activeStep={activeStep} setStepsDone={setStepsDone} setActiveStep={setActiveStep} />,
        <Step4 stepsDone={stepsDone} activeStep={activeStep} setStepsDone={setStepsDone} setActiveStep={setActiveStep} />,
        <Step5 stepsDone={stepsDone} activeStep={activeStep} setStepsDone={setStepsDone} setActiveStep={setActiveStep} />,
        <Step6 stepsDone={stepsDone} activeStep={activeStep} setStepsDone={setStepsDone} setActiveStep={setActiveStep} />,
    ]

    const stepEdit = (index) => {
        setActiveStep(index);
        const dup = [...stepsDone];
        const numberOfStepsToChange = activeStep - index;
        for (let i = 0; i <= numberOfStepsToChange; i++) {
            dup[activeStep - i] = false
        }
        setStepsDone(dup)
    }

    return (
        <div className="allSteps">
            {stepsHeaders.map((label, index) => {
                return (
                    <div className={activeStep === index ? "stepBox activeBox" : "stepBox"} key={label}>
                        <div className="stepHeadline">
                            {stepsDone[index] === true ? <div className="Vcontainer">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="24" height="18"
                                    viewBox="0 0 172 172"
                                    style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="600" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1db45c"><path d="M145.43294,37.93294l-80.93294,80.93295l-30.76628,-30.76628l-10.13411,10.13411l40.90039,40.90039l91.06706,-91.06705z"></path></g></g></svg>
                            </div> : index === activeStep ? <div className="active-numberCircle">{activeStep + 1}</div> : <div className="disactive-numberCircle">{index + 1}</div>}
                            <h2 className={index === activeStep ? 'activeText' : 'disactiveText'}>{label}</h2>
                            {stepsDone[index] === true &&
                                <div className="stepEdit" onClick={() => stepEdit(index)}>
                                    <img src="https://img.icons8.com/fluent-systems-regular/20/000000/pencil--v1.png" alt="pencil" />
                                    <span>עריכה</span>
                                </div>
                            }
                        </div>
                        <>
                            {activeStep === index && stepsComponent[index]}
                        </>
                    </div>
                )
            })}

        </div>
    );
}

export default NewPostStepper;