import React, { useContext, useEffect, useState } from 'react'
import { setCityText } from '../../../../actions/filterActions';
import { updateCityAction } from '../../../../actions/postActions';
import { FiltersContext } from '../../../../contexts/filtersContext';
import { PostContext } from '../../../../contexts/postContext';
import { getCitiesResults } from '../../../../services/userService';

const CityDD = ({ setShowCityDD, searchValue, setIsInValid, searchForm }) => {
    const [citiesResults, setCitiesResults] = useState([]);
    const { dispatchPostData } = useContext(PostContext);
    const { dispatchFiltersData } = useContext(FiltersContext);

    useEffect(() => {
        const res = getCitiesResults(searchValue)
        setCitiesResults(res)
    }, [searchValue]);

    const cityClicked = (city) => {
        setShowCityDD(false);
        if (setIsInValid != undefined)
            setIsInValid(false)
        if (searchForm == undefined)
            dispatchPostData(updateCityAction(city.trim()));
        else
            dispatchFiltersData(setCityText(city.trim()))
    }

    function boldString(str, substr) {
        var strRegExp = new RegExp(substr, 'g');
        return str.replace(strRegExp, substr.bold());
    }

    return (
        <div className={citiesResults.length > 0 ? "dropdown citiesDD" : 'none'}>
            {
                citiesResults.map((city, i) => (
                    <div onClick={() => cityClicked(city)} key={i} className="searchResult" dangerouslySetInnerHTML={{ __html: boldString(city, searchValue) }} ></div>
                ))
            }
        </div>
    )
}

export default CityDD
