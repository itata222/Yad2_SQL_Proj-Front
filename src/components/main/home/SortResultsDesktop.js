import React, { useRef, useState } from 'react'
import { useContext } from 'react';
import { setSortAction } from '../../../actions/filterActions';
import { FiltersContext } from '../../../contexts/filtersContext';
import { useClose } from '../../../utils/useClose';

const SortResultsDesktop = ({ setSortResultsDesktop, setSortBy, sortBy }) => {
    const { dispatchFiltersData } = useContext(FiltersContext)
    const [sortByDate, setSortByDate] = useState(sortBy === 'לפי תאריך');
    const [sortByPriceLH, setSortByPriceLH] = useState(sortBy === 'מחיר - מהזול ליקר');
    const [sortByPriceHL, setSortByPriceHL] = useState(sortBy === 'מחיר - מהיקר לזול');

    let menuRef = useRef();
    useClose(menuRef, () => setSortResultsDesktop(false))

    const changeSort = (e) => {
        switch (e.target.value) {
            case 'byDate':
                setSortByDate(true);
                setSortByPriceLH(false);
                setSortByPriceHL(false);
                setSortBy('לפי תאריך');
                dispatchFiltersData(setSortAction(null))
                break;
            case 'byPriceLH':
                setSortByDate(false);
                setSortByPriceLH(true);
                setSortByPriceHL(false);
                setSortBy('מחיר - מהזול ליקר')
                dispatchFiltersData(setSortAction('price'))
                break;
            default:
                setSortByDate(false);
                setSortByPriceLH(false);
                setSortByPriceHL(true);
                setSortBy('מחיר - מהיקר לזול')
                dispatchFiltersData(setSortAction('-price'))
                break;
        }

    }

    return (
        <div className="sortResultsDesktop" ref={menuRef}>
            <div >
                <input type="radio" name="date" value="byDate" checked={sortByDate} onChange={(e) => changeSort(e, 1)} />
                <label htmlFor="byDate">לפי תאריך</label>
            </div>
            <div >
                <input type="radio" name="priceLH" value="byPriceLH" checked={sortByPriceLH} onChange={changeSort} />
                <label htmlFor="byPriceLH">מחיר - מהזול ליקר</label>
            </div>
            <div >
                <input type="radio" name="priceHL" value="byPriceHL" checked={sortByPriceHL} onChange={changeSort} />
                <label htmlFor="byPriceHL">מחיר - מהיקר לזול</label>
            </div>
        </div>
    )
}

export default SortResultsDesktop
