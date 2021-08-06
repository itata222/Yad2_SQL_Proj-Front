import React, { useContext, useEffect, useState } from 'react'
import { setStreetText } from '../../../../actions/filterActions';
import { updateStreetAction } from '../../../../actions/postActions';
import { FiltersContext } from '../../../../contexts/filtersContext';
import { PostContext } from '../../../../contexts/postContext';
import { getStreetsOfCity } from '../../../../services/userService'

const StreetDD = ({ setIsInValid, CityValue, setShowStreetDD, searchValue, searchForm }) => {
    const [StreetsResults, setStreetsResults] = useState([]);
    const { dispatchPostData } = useContext(PostContext);
    const { dispatchFiltersData } = useContext(FiltersContext)

    useEffect(() => {
        const res = getStreetsOfCity(CityValue, searchValue)
        setStreetsResults(res)
    }, [searchValue]);

    const streetClicked = (street) => {
        setShowStreetDD(false);
        if (setIsInValid != undefined)
            setIsInValid(false)
        if (searchForm == undefined)
            dispatchPostData(updateStreetAction(street.trim()));
        else
            dispatchFiltersData(setStreetText(street.trim()))
    }

    function boldString(str, substr) {
        var strRegExp = new RegExp(substr, 'g');
        return str.replace(strRegExp, substr.bold());
    }

    return (
        <div className={StreetsResults.length > 0 ? "dropdown StreetsDD" : 'none'}>
            {
                StreetsResults.map((street, i) => (
                    <div onClick={() => streetClicked(street)} key={i} className="searchResult" dangerouslySetInnerHTML={{ __html: boldString(street, searchValue) }}></div>
                ))
            }
        </div>
    )
}

export default StreetDD
