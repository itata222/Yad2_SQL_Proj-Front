import React, { useContext } from 'react'
import CheckBox from '../../../CheckBox'
import DropDownCheckBox from '../DropDownCheckBox'
import { appartsArray, housesArray, othersArray, allTypesArrayClean } from '../../../../utils/arrays'
import { FiltersContext } from '../../../../contexts/filtersContext'
import { setTypesAction } from '../../../../actions/filterActions'

const CheckBoxDDcontainer = () => {
    const { filtersData, dispatchFiltersData } = useContext(FiltersContext);

    return (
        <div className="dropdown ddTypes" >
            <div className="all" >
                <label >כל סוגי הנכסים</label>
                <CheckBox
                    value={filtersData.types.length === allTypesArrayClean.length}
                    onClick={() => dispatchFiltersData(setTypesAction(filtersData.types.length !== allTypesArrayClean.length ? allTypesArrayClean : []))} />
            </div>
            <DropDownCheckBox className="aparts" label='דירות' array={appartsArray} />
            <DropDownCheckBox className="houses" label='בתים' array={housesArray} />
            <DropDownCheckBox className="others" label='סוגים נוספים' array={othersArray} />
            <div> <span>בחירה</span>  </div>
        </div>
    )
}

export default CheckBoxDDcontainer
