import StepButtons from '../StepButtons'
import React, { useContext, useState } from 'react'
import CheckBox from '../../../CheckBox';
import { PostContext } from '../../../../contexts/postContext';
import { updateBuildMrAction, updateEntryDateAction, updateImmidiateAction, updatePriceAction, updateTotalMrAction } from '../../../../actions/postActions';

const Step3 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    const [totalMrInvalid, setTotalMrInvalid] = useState(false);
    const [entryDateInvalid, setEntryDateInvalid] = useState(false);
    const { postData, dispatchPostData } = useContext(PostContext);
    const isStepInValidToContinue = () => {
        return (postData.totalMr === -1 || postData.totalMr === '') || (postData.entryDate === -1 && postData.immidiate === false);
    }

    const inputsSetStates = [setTotalMrInvalid, setEntryDateInvalid]

    return (
        <div className="step3">
            <div className="step3-form">
                <div className="mr">
                    <label>מ"ר בנוי</label>
                    <input
                        value={postData.buildMr === -1 ? '' : postData.buildMr}
                        onChange={e => dispatchPostData(updateBuildMrAction((parseInt(e.target.value.match(/\d+/)) || -1)))}
                        type="number"
                        placeholder='כמה מ"ר יש בנכס'
                        maxLength="4"
                    />
                </div>
                <div className="mrTotal">
                    <label>גודל במ"ר סך הכל*</label>
                    <input
                        value={postData.totalMr === -1 ? '' : postData.totalMr}
                        onChange={e => {
                            if (e.target.value.length > 0) {
                                dispatchPostData(updateTotalMrAction(parseInt(e.target.value.match(/\d+/)) || -1))
                                setTotalMrInvalid(false)
                            } else
                                dispatchPostData(updateTotalMrAction(''))
                        }}
                        className={totalMrInvalid ? 'invalidInput' : ''}
                        type="number"
                        maxLength="5"
                    />
                    {totalMrInvalid && <div className="invalidMessage">שדה חובה</div>}
                </div>
                <div className="price">
                    <label>מחיר</label>
                    <input
                        value={postData.price === -1 ? "" : postData.price}
                        onChange={e => dispatchPostData(updatePriceAction(parseInt(e.target.value.match(/\d+/)) || -1))}
                        maxLength="12"
                        type="number"
                        placeholder="סכום מינימלי 100,000"
                    />
                </div>
                <div className="city">
                    <label>תאריך כניסה*</label>
                    <div>
                        <input
                            value={postData.entryDate === -1 ? "" : postData.entryDate}
                            type="date"
                            className={!entryDateInvalid ? 'entryDateInput' : 'entryDateInput invalidInput'}
                            onChange={(e) => {
                                dispatchPostData(updateEntryDateAction(e.target.value))
                                setEntryDateInvalid(false)
                            }}
                            disabled={postData.immidiate} />
                        <label>מיידי</label>
                        {/* {entryDateInvalid && <div className="invalidMessage block">שדה חובה</div>} */}
                        <CheckBox
                            value={postData.immidiate}
                            onClick={(isActive) => {
                                dispatchPostData(updateImmidiateAction(!isActive, postData.entryDate === -1 ? "" : postData.entryDate))
                                if (isActive === false)
                                    setEntryDateInvalid(false)
                            }} />
                    </div>
                </div>
            </div>
            <StepButtons
                step={3}
                inputsSetStates={inputsSetStates}
                isStepInValidToContinue={isStepInValidToContinue}
                setStepsDone={setStepsDone}
                setActiveStep={setActiveStep}
                stepsDone={stepsDone}
                activeStep={activeStep} />
        </div>
    )
}

export default Step3
