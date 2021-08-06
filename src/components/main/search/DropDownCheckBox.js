import React, { useContext, useEffect, useState } from 'react'
import { setTypesAction } from '../../../actions/filterActions';
import { FiltersContext } from '../../../contexts/filtersContext';
import CheckBox from '../../CheckBox';

const DropDownCheckBox = ({ className, label, array }) => {
    const [ddOpened, setDdOpened] = useState(false);
    const { filtersData, dispatchFiltersData } = useContext(FiltersContext);
    const [selections, setSelections] = useState([]);

    const optionClicked = (option) => {
        const selectionDup = [...selections]
        if (filtersData.types.includes(option)) {
            dispatchFiltersData(setTypesAction(filtersData.types.filter((type) => type !== option)))
            setSelections(selectionDup.filter((select) => select !== option))
        } else {
            dispatchFiltersData(setTypesAction([...filtersData.types, option]))
            setSelections([...selectionDup, option])
        }
    }

    const isAllCategorySelected = () => {
        for (let i = 0; i < array.length; i++) {
            if (!filtersData.types.includes(array[i]))
                return false
        }
        return true
    }
    const containerCattegoryClicked = () => {
        let partsOfArrayToAdd = [];
        for (let i = 0; i < array.length; i++) {
            if (!filtersData.types.includes(array[i]))
                partsOfArrayToAdd.push(array[i])
        }
        const myArray = filtersData.types.filter(function (el) {
            return !selections.includes(el);
        });
        if (!isAllCategorySelected()) {
            dispatchFiltersData(setTypesAction([...filtersData.types, ...partsOfArrayToAdd]))
            setSelections([...array])
        }
        else {
            dispatchFiltersData(setTypesAction([...myArray]))
            setSelections([])
            console.log('remove', myArray.length)

        }
    }

    return (
        <div className={className}>
            <div className="headerSelect">
                <div>
                    <CheckBox
                        value={isAllCategorySelected()}
                        onClick={() => containerCattegoryClicked()} />
                    <label>{label}</label>
                    {/* <span>{selections.length > 0 ? `נבחרו ${selections.length} סוגים` : ''}</span> */}
                </div>
                <i className="fas fa-chevron-down" onClick={() => setDdOpened(!ddOpened)}></i>
            </div>
            {
                ddOpened &&
                <div className="checkBoxDDarray">
                    {array.map((option, i) => (
                        <div key={i} className="checkBoxOption">
                            <CheckBox
                                value={filtersData.types.includes(option)}
                                onClick={() => optionClicked(option)} />
                            <label>{option}</label>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default DropDownCheckBox
