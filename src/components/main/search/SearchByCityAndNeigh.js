import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { setCityText, setStreetText } from '../../../actions/filterActions';
import { FiltersContext } from '../../../contexts/filtersContext'
import CityDD from './dropdowns/CityDD';
import StreetDD from './dropdowns/StreetDD';

const SearchByCityAndNeigh = () => {
    const { filtersData, dispatchFiltersData } = useContext(FiltersContext);
    const [CityValue, setCityValue] = useState('');
    const [showCityDD, setShowCityDD] = useState(false);
    const [StreetValue, setStreetValue] = useState('');
    const [showStreetDD, setShowStreetDD] = useState(false);


    useEffect(() => {
        if (CityValue.length > 2) {
            setShowCityDD(true)
            dispatchFiltersData(setCityText(''))
        }
        else if (CityValue.length <= 1)
            setShowCityDD(false)
    }, [CityValue]);

    useEffect(() => {
        if (StreetValue.length > 1) {
            setShowStreetDD(true)
            dispatchFiltersData(setStreetText(''))
        }
        else
            setShowStreetDD(false)
    }, [StreetValue])

    const isCityChosen = () => {
        return !!filtersData.city
    }
    return (
        <div className="byCity">
            <div className="searchCity">
                <span>חפשו עיר</span>
                <input
                    value={filtersData.city || CityValue}
                    onChange={(e) => setCityValue(e.target.value)}
                    placeholder='לדוגמא: נתניה'
                    onInput={(e) => setCityValue(e.target.value)} />
                {showCityDD && <CityDD
                    setCityValue={setCityValue}
                    setShowCityDD={setShowCityDD}
                    searchValue={CityValue}
                    searchForm={true} />}

            </div>
            <div className="searchNeighborhood" disabled={!isCityChosen()}>
                <span>חפשו רחוב</span>
                <input
                    value={filtersData.street || StreetValue}
                    onChange={e => setStreetValue(e.target.value)}
                    className={'streetInput'}
                    placeholder='הזינו שם רחוב'
                    onInput={(e) => setStreetValue(e.target.value)} />
                {showStreetDD && <StreetDD
                    CityValue={filtersData.city || CityValue}
                    setStreetValue={setStreetValue}
                    setShowStreetDD={setShowStreetDD}
                    searchValue={StreetValue}
                    searchForm={true} />}
            </div>
        </div>
    )
}

export default SearchByCityAndNeigh
