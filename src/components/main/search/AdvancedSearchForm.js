import moment from 'moment';
import React, { useContext, useState } from 'react'
import { clearAllFilter, setAccessibleAction, setAirConditionAction, setBarsAction, setElevatorAction, setEntryDate, setFloorsFromAction, setFloorsToAction, setFreeText, setFurnishedAction, setImmidiateAction, setKasherAction, setMamadAction, setPandorAction, setRemakedAction, setSizeMrFrom, setSizeMrTo, setSunEnergyAction, setTadiranAction, setWarehouseAction } from '../../../actions/filterActions';
import { FiltersContext } from '../../../contexts/filtersContext'
import { floors, propertiesNamesArray } from '../../../utils/arrays';
import CheckBox from '../../CheckBox'

const AdvancedSearchForm = ({ searchButtonClicked }) => {
    const { filtersData, dispatchFiltersData } = useContext(FiltersContext);
    const actions = [setAirConditionAction, setMamadAction, setWarehouseAction, setPandorAction, setFurnishedAction, setAccessibleAction,
        setElevatorAction, setTadiranAction, setRemakedAction, setKasherAction, setSunEnergyAction, setBarsAction];
    const values = [filtersData.airCondition, filtersData.mamad, filtersData.warehouse, filtersData.pandor, filtersData.furnished,
    filtersData.accessible, filtersData.elevator, filtersData.tadiran, filtersData.remaked, filtersData.kasher, filtersData.sunEnergy, filtersData.bars]
    const [showFloorsFrom, setShowFloorsFrom] = useState(false);
    const [showFloorsTo, setShowFloorsTo] = useState(false);
    const [onlyKibutzActive, setOnlyKibutzActive] = useState(false);

    const propertyClicked = (i) => {
        console.log(i)
        if (!!values[i]) {
            dispatchFiltersData(actions[i](false))
        } else {
            dispatchFiltersData(actions[i](true))
        }
    }


    return (
        <div className="advancedSearch">
            <div className="advancedSearch-desktop">
                <div className="properties-checkbox">
                    <h1>מאפייני דירה</h1>
                    <div className="properties">
                        {
                            propertiesNamesArray.map((property, i) => (
                                <div key={i}>
                                    <CheckBox
                                        value={values[i]}
                                        onClick={() => propertyClicked(i)}
                                    />
                                    <label >{property}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="properties-input">
                    <div className="floor">
                        <span>קומה</span>
                        <div className="floor-boxs">
                            <div className="floor-from">
                                <button onClick={() => setShowFloorsFrom(!showFloorsFrom)}>
                                    <span>{filtersData.floorsFrom ? filtersData.floorsFrom : "מ-"}</span>
                                    <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="arrow down" />
                                </button>
                                {
                                    showFloorsFrom &&
                                    <div className="floorsFromValues">
                                        {
                                            floors.map((floor, i) => (
                                                <div style={{ display: i <= filtersData.floorsTo || 20 ? 'block' : 'none' }} key={floor} onClick={() => dispatchFiltersData(setFloorsFromAction(floor))} className="floor">
                                                    {floor}
                                                </div>
                                            ))
                                        }
                                    </div>
                                }
                            </div>
                            <div className="floor-to">
                                <button onClick={() => setShowFloorsTo(!showFloorsTo)}>
                                    <span>{filtersData.floorsTo ? filtersData.floorsTo : "-עד"}</span>
                                    <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="arrow down" />
                                </button>
                                {showFloorsTo &&
                                    <div className="floorsFromValues">
                                        {
                                            floors.map((floor, i) => (
                                                <div style={{ display: i >= filtersData.floorsFrom || 0 ? 'block' : 'none' }} key={floor} onClick={() => dispatchFiltersData(setFloorsToAction(floor))} className="floor">
                                                    {floor}
                                                </div>
                                            ))
                                        }
                                    </div>}
                            </div>
                        </div>
                    </div>
                    <div className="size">
                        <span>גודל דירה (במ"ר)</span>
                        <div className="sizes">
                            <input min="0" type="number" placeholder="מ-" onBlur={(e) => dispatchFiltersData(setSizeMrFrom(parseInt(e.target.value)))} />
                            <input min="0" type="number" placeholder="עד-" onBlur={(e) => dispatchFiltersData(setSizeMrTo(parseInt(e.target.value)))} />
                        </div>
                    </div>
                    <div className="entryDate">
                        <span>תאריך כניסה</span>
                        <div className="sizes">
                            <input
                                disabled={filtersData.immidiate === true}
                                value={filtersData.immidiate === true ? moment().format('yyyy-MM-DD') : filtersData.entryDate || 'mm'}
                                placeholder="החל מ- הזינו תאריך"
                                className="textbox-n" type="date"
                                onChange={(e) => dispatchFiltersData(setEntryDate(e.target.value))} />
                        </div>
                    </div>
                    <div className="imidiateEntry">
                        <CheckBox value={filtersData.immidiate}
                            onClick={() => dispatchFiltersData(setImmidiateAction(!filtersData.immidiate))} />
                        <label htmlFor="imidiateEntry">כניסה מיידית</label>
                    </div>
                </div>
                <div className="freeTextSearch">
                    <div className="freeSearch">
                        <span>חיפוש חופשי</span>
                        <input type="text" onBlur={(e) => dispatchFiltersData(setFreeText(e.target.value))} />
                    </div>
                    <div className="onlyKibutz">
                        <CheckBox value={onlyKibutzActive}
                            onClick={() => setOnlyKibutzActive(!onlyKibutzActive)} />
                        <label htmlFor="onlyKibutz">הצגת מושבים וקיבוצים בלבד</label>
                    </div>
                </div>
                <div className="buttons">
                    <div></div>
                    <button onClick={searchButtonClicked}>חיפוש</button>
                    <span onClick={() => {
                        dispatchFiltersData(clearAllFilter())
                    }}>נקה</span>
                </div>
            </div>
        </div >
    )
}

export default AdvancedSearchForm
