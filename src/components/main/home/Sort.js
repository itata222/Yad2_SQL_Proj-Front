import React, { useState } from 'react'
import { useContext } from 'react';
import { setPriceFrom, setWithImage } from '../../../actions/filterActions';
import { FiltersContext } from '../../../contexts/filtersContext';
import SortFilterResults from './SortFilterResults';
import SortResults from './SortResults';
import SortResultsDesktop from './SortResultsDesktop';

const Sort = () => {
    const [sortResults, setSortResults] = useState(false);
    const [sortResultsDesktop, setSortResultsDesktop] = useState(false);
    const [filterResults, setFilterResults] = useState(false);
    const [sortBy, setSortBy] = useState('לפי תאריך');
    const [sortFilterWithImage, setSortFilterWithImage] = useState(false);

    const { filtersData, dispatchFiltersData } = useContext(FiltersContext)

    return (
        <div className="sort">
            <div className="sort-phone">
                {sortResults && <SortResults setSortResults={setSortResults} sortBy={sortBy} setSortBy={setSortBy} />}
                {filterResults && <SortFilterResults setFilterResults={setFilterResults} />}
                <div className="sort-results" onClick={() => setSortResults(!sortResults)}>
                    <img src="https://img.icons8.com/pastel-glyph/32/000000/sorting-arrows--v1.png" alt="arrows" />
                    <span >מיין תוצאות</span>
                </div>
                <div className="filter-results" onClick={() => setFilterResults(true)}>
                    <img src="https://img.icons8.com/windows/32/000000/filter.png" alt="funnel" />
                    <span >סנן תוצאות</span>
                </div>
            </div>
            <div className="sort-desktop" >
                {sortResultsDesktop && <SortResultsDesktop setSortResultsDesktop={setSortResultsDesktop} sortBy={sortBy} setSortBy={setSortBy} />}
                <div className="sort-results" onClick={() => setSortResultsDesktop(!sortResultsDesktop)}>
                    <span >מיין לפי</span>
                    <button>
                        <span>{sortBy}</span>
                        <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="arrow down" />
                    </button>
                </div>
                <div className="filter-results">
                    <span >הצג מודעות</span>
                    <button className={filtersData.fromPrice === 1 ? 'sortFilterButtonActive' : ''} onClick={() => {
                        dispatchFiltersData(setPriceFrom(filtersData.fromPrice === 1 ? -1 : 1))
                    }}>
                        <img src="https://img.icons8.com/material-rounded/24/000000/shekel.png" alt="shekel" />
                        <span>עם מחיר</span>
                    </button>
                    <button className={filtersData.withImage === true ? 'sortFilterButtonActive' : ''} onClick={() => dispatchFiltersData(setWithImage(filtersData.withImage === true ? false : true))}>
                        <img src="https://img.icons8.com/material-outlined/24/000000/image.png" alt="portrait icon" />
                        <span>עם תמונה</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sort
