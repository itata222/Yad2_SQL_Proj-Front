import StepButtons from '../StepButtons'
import React, { useContext, useState } from 'react'
import PropertyButton from '../PropertyButton';
import SelectDropDown from '../../../main/SelectDropDown';
import Step2Buttons from '../Step2Buttons';
import { PostContext } from '../../../../contexts/postContext';
import { updateBalconyAction, updateDescriptionAction, updateParkingAction, updateRoomsAction } from '../../../../actions/postActions';
import { propertiesNamesArray } from '../../../../utils/arrays';


const Step2 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    const { postData, dispatchPostData } = useContext(PostContext);
    const [descriptionLength, setDescriptionLength] = useState(0);
    const [rooms, setRooms] = useState(-1);
    const [roomsInvalid, setRoomsInvalid] = useState(false);
    const inputsSetStates = [setRoomsInvalid]
    const roomsArray = ['בחירת מספר חדרים', '0', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '8', '9', '10', '11', '12']

    const isStepInValidToContinue = () => {
        return postData.rooms === -1
    }

    return (
        <div className='step2'>
            <div className="rooms">
                <label>מספר חדרים*</label>
                <SelectDropDown
                    value={postData.rooms || rooms}
                    onChange={(value) => {
                        setRooms(value)
                        dispatchPostData(updateRoomsAction(value))
                    }}
                    array={roomsArray}
                    className='roomsSelect'
                    hideFirst={true}
                    isInValid={roomsInvalid}
                    setState={setRoomsInvalid}
                    step={2} />
            </div>
            <Step2Buttons
                className="parking"
                label="חניה"
                data={postData.parking}
                onClick={(val) => postData.parking === val ?
                    dispatchPostData(updateParkingAction(-1)) :
                    dispatchPostData(updateParkingAction(val))}
            />
            <Step2Buttons
                className="balcony"
                label="מרפסת"
                data={postData.balcony}
                onClick={(val) => postData.balcony === val ?
                    dispatchPostData(updateBalconyAction(-1)) :
                    dispatchPostData(updateBalconyAction(val))} />
            <div className="properties">
                <div className="header">מאפייני הנכס</div>
                <div className="property-buttons">
                    {
                        propertiesNamesArray.map((property, i) => (
                            <PropertyButton key={i} text={property} index={i} />
                        ))
                    }
                </div>
                <div className="description">
                    <div className="header">
                        מה חשוב לך שידעו על הנכס?
                    </div>
                    <div className="descriptionContainer">
                        <div>
                            <span>פרוט הנכס</span>
                            <span>{descriptionLength}/400</span>
                        </div>
                        <textarea
                            value={postData.description}
                            onChange={(e) => dispatchPostData(updateDescriptionAction(e.target.value))}
                            onInput={(e) => setDescriptionLength(e.target.value.length)}
                            maxLength="400"
                            cols="5"
                            placeholder="זה המקום לתאר את הפרטים הבולטים, למשל, האם נערך שיפוץ במבנה, מה שופץ, כיווני אוויר, האווירה ברחוב וכו'"
                            aria-label="שים לב, יש לך 400 תווים להקלדה"
                            onBlur={(e) => dispatchPostData(updateDescriptionAction(e.target.value))}></textarea>
                    </div>
                </div>
            </div>
            <StepButtons
                step={2}
                inputsSetStates={inputsSetStates}
                isStepInValidToContinue={isStepInValidToContinue}
                setStepsDone={setStepsDone}
                setActiveStep={setActiveStep}
                stepsDone={stepsDone}
                activeStep={activeStep} />
        </div>
    )
}

export default Step2
