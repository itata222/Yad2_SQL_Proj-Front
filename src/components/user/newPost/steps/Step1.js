import StepButtons from '../StepButtons'
import React, { useEffect, useState } from 'react'
import SelectDropDown from '../../../main/SelectDropDown'
import CheckBox from '../../../CheckBox'
import { useContext } from 'react'
import { PostContext } from '../../../../contexts/postContext'
import { updateCityAction, updateConditionAction, updateFloorAction, updateFloorsInBuildingAction, updateHouseNumberAction, updateOnBarsAction, updateStreetAction, updateTypeAction } from '../../../../actions/postActions'
import CityDD from '../../../main/search/dropdowns/CityDD'
import StreetDD from '../../../main/search/dropdowns/StreetDD'
import { allTypesArray, conditionArray } from '../../../../utils/arrays'

const Step1 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    const { postData, dispatchPostData } = useContext(PostContext);
    const [CityValue, setCityValue] = useState('');
    const [typeInvalid, setTypeInvalid] = useState(false);
    const [conditionInvalid, setConditionInvalid] = useState(false);
    const [cityInvalid, setCityInvalid] = useState(false);
    const [streetInvalid, setStreetInvalid] = useState(false);
    const [floorInvalid, setFloorInvalid] = useState(false);
    const [totalFloorsInvalid, setTotalFloorsInvalid] = useState(false);
    const [showCityDD, setShowCityDD] = useState(false);
    const [StreetValue, setStreetValue] = useState('');
    const [showStreetDD, setShowStreetDD] = useState(false);
    const [notification, setNotification] = useState(false);

    const inputsSetStates = [setCityInvalid, setFloorInvalid, setTotalFloorsInvalid, setTypeInvalid, setConditionInvalid, setStreetInvalid]



    useEffect(() => {
        if (CityValue.length > 2) {
            setShowCityDD(true)
            dispatchPostData(updateCityAction(''))
        }
        else if (CityValue.length <= 1)
            setShowCityDD(false)
    }, [CityValue]);

    useEffect(() => {
        if (StreetValue.length > 1) {
            setShowStreetDD(true)
            dispatchPostData(updateStreetAction(''))
        }
        else
            setShowStreetDD(false)
    }, [StreetValue])

    const isTypeInFilled = () => postData.propType === '';
    const isConditionInFilled = () => postData.condition === '';
    const isCityInFilled = () => postData.city === '';
    const isStreetInFilled = () => postData.street === '';
    const isFloorInFilled = () => postData.floor === -1;
    const isFloorInBuildingInFilled = () => postData.floorsInBuilding === -1;
    const isStepInValidToContinue = () => isFloorInBuildingInFilled() || isFloorInFilled() || isConditionInFilled() || isCityInFilled() || isTypeInFilled() || isStreetInFilled();

    return (
        <div className="step1">
            <h4>?????????? ?????????? ???? ???????? ??????????. ?????? ?????????? ?????? ????????</h4>
            <div className="step1Form">
                <div className="type">
                    <label>?????? ????????*</label>
                    <SelectDropDown
                        value={postData.propType}
                        onChange={(value) => {
                            dispatchPostData(updateTypeAction(value))
                        }}
                        array={allTypesArray}
                        className='typeSelect'
                        hideFirst={true}
                        isInValid={typeInvalid}
                        setState={inputsSetStates[3]}
                        step={1} />
                </div>
                <div className="condition">
                    <label>?????? ????????*</label>
                    <SelectDropDown
                        value={postData.condition}
                        onChange={(value) => {
                            dispatchPostData(updateConditionAction(value))
                        }}
                        array={conditionArray}
                        className='conditionSelect'
                        hideFirst={true}
                        isInValid={conditionInvalid}
                        setState={inputsSetStates[4]}
                        step={1} />
                </div>
                <div className="city">
                    <label>????????*</label>
                    <input
                        value={postData.city || CityValue}
                        onChange={(e) => setCityValue(e.target.value)}
                        className={!cityInvalid ? 'cityInput' : 'cityInput invalidInput'}
                        placeholder='???????? ???????? ????????'
                        disabled={isTypeInFilled()}
                        onInput={(e) => setCityValue(e.target.value)} />
                    {cityInvalid && <div className="invalidMessage">?????? ????????</div>}
                    {showCityDD && <CityDD setIsInValid={setCityInvalid} setCityValue={setCityValue} setShowCityDD={setShowCityDD} searchValue={CityValue} />}
                </div>
                <div className={!isCityInFilled() ? "street" : "street lowerOpacity"}>
                    <label>????????*</label>
                    <input
                        value={postData.street || StreetValue}
                        onChange={e => setStreetValue(e.target.value)}
                        className={!streetInvalid ? 'streetInput' : 'streetInput invalidInput'}
                        placeholder='?????????? ???? ????????'
                        disabled={isCityInFilled()}
                        onInput={(e) => setStreetValue(e.target.value)} />
                    {streetInvalid && <div className="invalidMessage">?????? ????????</div>}
                    {showStreetDD && <StreetDD setIsInValid={setStreetInvalid} CityValue={postData.city || CityValue} setStreetValue={setStreetValue} setShowStreetDD={setShowStreetDD} searchValue={StreetValue} />}
                </div>
                <div className={!isCityInFilled() ? "numHouse" : "numHouse lowerOpacity"}>
                    <label>????' ??????</label>
                    <input
                        maxLength="3"
                        min={0}
                        value={postData.houseNumber === -1 ? '' : postData.houseNumber}
                        onChange={e => dispatchPostData(updateHouseNumberAction(parseInt(e.target.value.match(/\d+/)) || -1))}
                        className='numHouseInput'
                        disabled={isTypeInFilled()}
                    />
                </div>
                <div className={!isTypeInFilled() ? "floorInfo" : "floorInfo lowerOpacity"}>
                    <div>
                        <label>????????*</label>
                        <input
                            value={postData.floor === -1 ? '' : postData.floor}
                            onChange={e => {
                                if (e.target.value.length > 0 && parseInt(e.target.value) <= 20) {
                                    dispatchPostData(updateFloorAction((parseInt(e.target.value.match(/\d+/)) || -1)))
                                    setFloorInvalid(false)
                                } else
                                    dispatchPostData(updateFloorAction(-1))
                            }}
                            type="number"
                            maxLength={3}
                            min={0}
                            max={20}
                            className={floorInvalid ? 'invalidInput' : ''}
                            placeholder="?????????? ???????? ????????"
                            disabled={isTypeInFilled()}
                        />
                        {floorInvalid && <div className="invalidMessage">?????? ????????</div>}
                    </div>
                    <div>
                        <label>????"?? ?????????? ????????????*</label>
                        <input
                            value={postData.floorsInBuilding === -1 ? '' : postData.floorsInBuilding}
                            onChange={e => {
                                if (e.target.value.length > 0 && parseInt(e.target.value) <= 200) {
                                    dispatchPostData(updateFloorsInBuildingAction(parseInt(e.target.value.match(/\d+/)) || -1))
                                    setTotalFloorsInvalid(false)
                                } else
                                    dispatchPostData(updateFloorsInBuildingAction(-1))
                            }}
                            maxLength="3"
                            type="number"
                            className={totalFloorsInvalid ? 'invalidInput' : ''}
                            placeholder='?????????? ????"?? ??????????'
                            disabled={isTypeInFilled()}
                        />
                        {totalFloorsInvalid && <div className="invalidMessage">?????? ????????</div>}

                    </div>
                    <div>
                        <CheckBox
                            value={postData.onBars}
                            onChange={(isActive) => dispatchPostData(updateOnBarsAction(!isActive))}
                            disabled={isTypeInFilled()}
                            onClick={(isActive) => dispatchPostData(updateOnBarsAction(!isActive))} />
                        <label>???? ????????????</label>
                    </div>
                </div>
                <div className="neighborhood lowerOpacity">
                    <label>??????????</label>
                    <div className='neightValue'>{ }</div>
                </div>
                <div className="area lowerOpacity">
                    <label>???????? ??????????</label>
                    <div className="areaValue">{ }</div>
                </div>
                <div className="noti">
                    <CheckBox
                        value={notification}
                        onChange={() => setNotification(!notification)}
                        disabled={isTypeInFilled()}
                        onClick={() => setNotification(!notification)} />
                    <label>?????? ???????? ???????? ?????????? ?????????? ?????????? ???? ?????????? ???????? ?????????????? ???????? ????????, ???????????? ?????????? ???????????? ???????????????? ???????????? ??????"?? </label>
                </div>
            </div>
            <StepButtons
                step={1}
                inputsSetStates={inputsSetStates}
                isStepInValidToContinue={isStepInValidToContinue}
                setStepsDone={setStepsDone}
                setActiveStep={setActiveStep}
                stepsDone={stepsDone}
                activeStep={activeStep}
            />
        </div>
    )
}

export default Step1
