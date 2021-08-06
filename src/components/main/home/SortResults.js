import React, { useContext, useEffect, useState } from 'react'
import { useRef } from 'react';
import { setSortAction } from '../../../actions/filterActions';
import { FiltersContext } from '../../../contexts/filtersContext';
import { useClose } from '../../../utils/useClose';

const SortResults = ({ setSortResults, setSortBy, sortBy }) => {
    let menuRef = useRef();
    const { dispatchFiltersData } = useContext(FiltersContext)
    const [sortByDate, setSortByDate] = useState(sortBy === 'לפי תאריך');
    const [sortByPriceLH, setSortByPriceLH] = useState(sortBy === 'מחיר - מהזול ליקר');
    const [sortByPriceHL, setSortByPriceHL] = useState(sortBy === 'מחיר - מהיקר לזול');

    useClose(menuRef, () => setSortResults(false))

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
        <div className="sortResult">
            <div ref={menuRef} className="sortResultContent" onClick={(e) => e.stopPropagation()}>
                <div ref={menuRef}>
                    <input type="radio" id="huey" name="drone" value="byDate" checked={sortByDate} onChange={changeSort} />
                    <label htmlFor="byDate">לפי תאריך</label>
                </div>
                <div ref={menuRef}>
                    <input type="radio" id="huey" name="drone" value="byPriceLH" checked={sortByPriceLH} onChange={changeSort} />
                    <label htmlFor="byPriceLH">מחיר - מהזול ליקר</label>
                </div>
                <div ref={menuRef}>
                    <input type="radio" id="huey" name="drone" value="byPriceHL" checked={sortByPriceHL} onChange={changeSort} />
                    <label htmlFor="byPriceHL">מחיר - מהיקר לזול</label>
                </div>
                <div>
                    <input type="radio" id="huey" name="drone" value="byCloser" onChange={changeSort} />
                    <label htmlFor="byCloser">קרוב אליי</label>
                </div>
            </div>
        </div>
    )
}

export default SortResults
