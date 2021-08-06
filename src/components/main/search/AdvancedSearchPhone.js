import React, { useContext } from 'react'
import reactDom from 'react-dom';
import { setAccessibleAction, setAirConditionAction, setBarsAction, setElevatorAction, setEntryDate, setFloorsFromAction, setFloorsToAction, setFreeText, setFurnishedAction, setImmidiateAction, setKasherAction, setMamadAction, setPandorAction, setRemakedAction, setSizeMrFrom, setSizeMrTo, setSunEnergyAction, setTadiranAction, setWarehouseAction } from '../../../actions/filterActions';
import { floors, propertiesNamesArray } from '../../../utils/arrays';
import CheckBox from '../../CheckBox';
import { FiltersContext } from '../../../contexts/filtersContext'

const AdvancedSearchPhone = () => {
    const { filtersData, dispatchFiltersData } = useContext(FiltersContext);
    const actions = [setAirConditionAction, setMamadAction, setWarehouseAction, setPandorAction, setFurnishedAction, setAccessibleAction,
        setElevatorAction, setTadiranAction, setRemakedAction, setKasherAction, setSunEnergyAction, setBarsAction];
    const values = [filtersData.airCondition, filtersData.mamad, filtersData.warehouse, filtersData.pandor, filtersData.furnished,
    filtersData.accessible, filtersData.elevator, filtersData.tadiran, filtersData.remaked, filtersData.kasher, filtersData.sunEnergy, filtersData.bars]

    const propertyClicked = (i) => {
        console.log(i)
        if (!!values[i]) {
            dispatchFiltersData(actions[i](false))
        } else {
            dispatchFiltersData(actions[i](true))
        }
    }

    return (
        <div className="advancedSearchPhone">
            <div className="checkboxSection">
                {propertiesNamesArray.map((property, i) => (
                    <div key={i}>
                        <CheckBox
                            value={values[i]}
                            onClick={() => propertyClicked(i)}
                        />
                        <label >{property}</label>
                    </div>
                ))}
            </div>
            <div className="floor">
                <span>קומה</span>
                <div className="floorBoxes">
                    <select className="floor-from"
                        value={filtersData.floorsFrom || -1}
                        onChange={(e) => {
                            dispatchFiltersData(setFloorsFromAction(parseFloat(e.target.value)))
                        }}>
                        <option value="-1"> הכל </option>
                        <option value="downstairs">‏מרתף/פרטר</option>
                        <option value="0">‏0</option>
                        <option value="1">‏1</option>
                        <option value="2">‏2</option>
                        <option value="3">‏3</option>
                        <option value="4">‏4</option>
                        <option value="5">‏5</option>
                        <option value="6">‏6</option>
                        <option value="7">‏7</option>
                        <option value="8">‏8</option>
                        <option value="9">‏9</option>
                        <option value="10">‏10</option>
                        <option value="11">‏11</option>
                        <option value="12">‏12</option>
                        <option value="13">‏13</option>
                        <option value="14">‏14</option>
                        <option value="15">‏15</option>
                        <option value="16">‏16</option>
                        <option value="17">‏17</option>
                    </select>
                    <span className="seperator"></span>
                    <select className="floor-to"
                        value={filtersData.floorsTo || -1}
                        onChange={(e) => {
                            dispatchFiltersData(setFloorsToAction(parseFloat(e.target.value)))
                        }}>
                        <option value="-1"> הכל </option>
                        <option value="downstairs">‏מרתף/פרטר</option>
                        <option value="0">‏0</option>
                        <option value="1">‏1</option>
                        <option value="2">‏2</option>
                        <option value="3">‏3</option>
                        <option value="4">‏4</option>
                        <option value="5">‏5</option>
                        <option value="6">‏6</option>
                        <option value="7">‏7</option>
                        <option value="8">‏8</option>
                        <option value="9">‏9</option>
                        <option value="10">‏10</option>
                        <option value="11">‏11</option>
                        <option value="12">‏12</option>
                        <option value="13">‏13</option>
                        <option value="14">‏14</option>
                        <option value="15">‏15</option>
                        <option value="16">‏16</option>
                        <option value="17">‏17</option>
                    </select>
                </div>
            </div>
            <div className="size">
                <span>גודל דירה (במ"ר)</span>
                <div className="sizeBoxes">
                    <input type="number"
                        value={filtersData.sizeFrom || ''}
                        onChange={(e) => dispatchFiltersData(setSizeMrFrom(parseInt(e.target.value)))} />
                    <span className="seperator"></span>
                    <input type="number"
                        value={filtersData.sizeTo || ''}
                        onChange={(e) => dispatchFiltersData(setSizeMrTo(parseInt(e.target.value)))} />
                </div>
            </div>
            <div className="entryDate">
                <span>תאריך כניסה</span>
                <input placeholder="החל מ- הזינו תאריך"
                    className="textbox-n" type="date" onChange={(e) => dispatchFiltersData(setEntryDate(e.target.value))} />
            </div>
            <div className="imidiateEntry">
                <CheckBox value={filtersData.immidiate}
                    onClick={() => dispatchFiltersData(setImmidiateAction(!filtersData.immidiate))} />
                <label htmlFor="imidiateEntry">כניסה מיידית</label>
            </div>
            <div className="freeTextSearch">
                <span>חיפוש חופשי</span>
                <input type="text" onBlur={(e) => dispatchFiltersData(setFreeText(e.target.value))} />
            </div>
        </div>
    )
}

export default AdvancedSearchPhone
