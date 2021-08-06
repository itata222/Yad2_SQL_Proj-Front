import React, { useContext, useEffect, useState } from 'react'
import { setAreaText } from '../../../../actions/filterActions';
import { FiltersContext } from '../../../../contexts/filtersContext';
import { getAnyAreaResults } from '../../../../services/userService';

const AnyAreaDD = ({ setShowAnyAreaDD, searchValue }) => {
    const [anyAreaResults, setAnyAreaResults] = useState([]);
    const { dispatchFiltersData } = useContext(FiltersContext);

    useEffect(() => {
        const res = getAnyAreaResults(searchValue)
        setAnyAreaResults(res)
    }, [searchValue]);

    const areaClicked = (area) => {
        setShowAnyAreaDD(false);
        dispatchFiltersData(setAreaText(area.trim()));
    }

    function boldString(str, substr) {
        var strRegExp = new RegExp(substr, 'g');
        return str.replace(strRegExp, substr.bold());
    }

    return (
        <div className={anyAreaResults.length > 0 ? "dropdown citiesDD" : 'none'}>
            {
                anyAreaResults.map((area, i) => (
                    <div onClick={() => areaClicked(area)} key={i} className="searchResult" dangerouslySetInnerHTML={{ __html: boldString(area, searchValue) }} ></div>
                ))
            }
        </div>
    )
}

export default AnyAreaDD