import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
    faSnowflake,
    faHouseDamage,
    faBoxOpen,
    faDoorClosed,
    faChair,
    faWheelchair,
    faDungeon,
    faHome,
    faPaintRoller,
    faFaucet,
    faSolarPanel,
    faBars
} from '@fortawesome/free-solid-svg-icons';
import { updateAccessibleAction, updateAirConditionAction, updateBalconyAction, updateBarsAction, updateDescriptionAction, updateElevatorAction, updateFurnishedAction, updateKasherAction, updateMamadAction, updatePandorAction, updateParkingAction, updateRemakedAction, updateRoomsAction, updateSunEnergyAction, updateTadiranAction, updateWarehouseAction } from '../../../actions/postActions';
import { useContext } from 'react';
import { PostContext } from '../../../contexts/postContext';


const PropertyButton = ({ text, index }) => {
    const { postData, dispatchPostData } = useContext(PostContext);
    const [buttonSelected, setButtonSelected] = useState(false);

    const icons = [faSnowflake, faHouseDamage, faBoxOpen, faDoorClosed, faChair, faWheelchair, faDungeon, faHome, faPaintRoller, faFaucet, faSolarPanel, faBars];
    const updateActions = [updateAirConditionAction, updateMamadAction, updateWarehouseAction, updatePandorAction, updateFurnishedAction, updateAccessibleAction,
        updateElevatorAction, updateTadiranAction, updateRemakedAction, updateKasherAction, updateSunEnergyAction, updateBarsAction];
    const properties = [postData.airCondition, postData.mamad, postData.warehouse, postData.pandor, postData.furnished,
    postData.accessible, postData.elevator, postData.tadiran, postData.remaked, postData.kasher, postData.sunEnergy, postData.bars]
    const buttonClicked = () => {
        setButtonSelected(!buttonSelected)
        dispatchPostData(updateActions[index](!buttonSelected))
    }

    return (
        <div>
            <button onClick={() => buttonClicked()} className={properties[index] ? "buttonSelected" : 'notSelected'}>
                <FontAwesomeIcon icon={icons[index]} />
                <span>{text}</span>
            </button>
        </div>
    )
}

export default PropertyButton
