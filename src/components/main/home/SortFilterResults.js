import React, { useContext, useEffect, useRef, useState } from 'react'
import { setPriceFrom, setWithImage } from '../../../actions/filterActions';
import { FiltersContext } from '../../../contexts/filtersContext';
import { useClose } from '../../../utils/useClose';
import CheckBox from '../../CheckBox';


const SortFilterResults = ({ setFilterResults }) => {
    let menuRef = useRef();
    useClose(menuRef, () => setFilterResults(false));

    const { filtersData, dispatchFiltersData } = useContext(FiltersContext)

    return (
        <div className="sortFilterResult" >
            <div className="sortFilterResultContent" ref={menuRef}>
                <div>
                    <CheckBox
                        value={filtersData.fromPrice === 1}
                        onChange={() => dispatchFiltersData(setPriceFrom(filtersData.fromPrice === 1 ? -1 : 1))}
                        onClick={() => dispatchFiltersData(setPriceFrom(filtersData.fromPrice === 1 ? -1 : 1))} />
                    <label>רק עם מחיר</label>
                </div>
                <div>
                    <CheckBox
                        value={filtersData.withImage === true}
                        onChange={() => dispatchFiltersData(setWithImage(filtersData.withImage === true ? false : true))}
                        onClick={() => dispatchFiltersData(setWithImage(filtersData.withImage === true ? false : true))} />
                    <label >רק עם תמונה</label>
                </div>

            </div>
        </div>
    )
}

export default SortFilterResults
