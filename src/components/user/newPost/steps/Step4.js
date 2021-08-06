import StepButtons from '../StepButtons'
import React from 'react';
import FileUpload from '../FileUpload';

const Step4 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    const filesUploadArray = ['file1', 'file2', 'file3', 'file4', 'file5',
        'file6', 'file7', 'file8', 'file9']

    const isStepInValidToContinue = () => {
        return false
    }

    return (
        <div className="step4">
            <h4>
                <div>ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות? </div>
                <div>לא להסס להעלות לפה תמונות (אפשר עד 10 + וידאו) ולהבליט את הצדדים הטובים ביותר של הנכס</div>
            </h4>
            <div className="mainFilesCon">

                <div className="mainFiles">
                    <FileUpload type='video' index={0} />
                    <div className="mainImageInput">
                        <div>תמונה ראשית</div>
                        <FileUpload index={0} type='image' />
                    </div>
                </div>

            </div>
            <div className="images">
                <h1>תמונות שיופיעו בגוף המודעה</h1>
                <div>
                    {
                        filesUploadArray.map((file, i) => (
                            <FileUpload index={i + 1} key={file} type='image' />
                        ))
                    }
                </div>
            </div>
            <StepButtons
                isStepInValidToContinue={isStepInValidToContinue}
                setStepsDone={setStepsDone}
                setActiveStep={setActiveStep}
                stepsDone={stepsDone}
                activeStep={activeStep} />
        </div>
    )
}

export default Step4