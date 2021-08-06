import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import AdvancedSearchPhone from './AdvancedSearchPhone';
import SearchByArea from './SearchByArea';
import SearchByCityAndNeigh from './SearchByCityAndNeigh';
import Header from '../Header/Header'
import { useContext } from 'react';
import { FiltersContext } from '../../../contexts/filtersContext';
import { clearAllFilter, setPriceFrom, setPriceTo, setRoomsFromAction, setRoomsToAction, setTypesAction } from '../../../actions/filterActions';
import { appartsArray, housesArray, othersArray } from '../../../utils/arrays';
import Spinner from '../Spinner';
import { getPosts } from '../../../services/userService';
import { PostsContext } from '../../../contexts/postsContext';
import { setPostsAction } from '../../../actions/postsActions';

const SearchFormPhone = (props) => {
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
    const [byCity, setByCity] = useState(true);
    const [appartmentsSelected, setAppartmentsSelected] = useState(false);
    const [housesSelected, setHousesSelected] = useState(false);
    const [othersSelected, setOthersSelected] = useState(false);
    const { filtersData, dispatchFiltersData } = useContext(FiltersContext);
    const { postsData, dispatchPostsData } = useContext(PostsContext)
    const [showSpinner, setShowSpinner] = useState(false);
    const history = useHistory()
    console.log(filtersData)

    useEffect(() => {
        switch (props.location.hash) {
            case "#byCity":
                setByCity(true)
                break;
            case '#byArea':
                setByCity(false)
                break;
            default:
                setByCity(true)
        }
    }, [props.location.hash]);

    const isFormModified = () => {
        return Object.keys(filtersData).length > 2
    }

    const submitSearch = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Header />
            <div className="searchFormPhone">
                <form className="searchForm" onSubmit={submitSearch}>
                    <button onClick={() => {
                        dispatchFiltersData(clearAllFilter())
                    }} className="clean" disabled={!isFormModified()}>
                        <img src="https://img.icons8.com/windows/32/000000/trash.png" alt="garbage" />
                        <span>נקה הכל</span>
                    </button>
                    <div className="searchBy">
                        <div>חפשו לפי</div>
                        <div className="searchByButtons">
                            <NavLink to="#byCity" activeClassName="selected" isActive={() => byCity}>עיר ורחוב</NavLink>
                            <NavLink to="#byArea" activeClassName="selected" isActive={() => !byCity}>אזור</NavLink>
                            <NavLink to="#">קרוב אלי</NavLink>
                        </div>
                    </div>
                    {
                        byCity ? <SearchByCityAndNeigh /> : <SearchByArea />
                    }
                    <div className="type">
                        <div>סוג נכס</div>
                        <div className="types">
                            <button
                                onClick={() => {
                                    if (appartmentsSelected) {
                                        const myArray = filtersData.types.filter(function (el) {
                                            return !appartsArray.includes(el)
                                        })
                                        setAppartmentsSelected(false);
                                        dispatchFiltersData(setTypesAction(myArray));
                                    }
                                    else {
                                        setAppartmentsSelected(true);
                                        dispatchFiltersData(setTypesAction([...filtersData.types, ...appartsArray]))
                                    }
                                }}
                                className={appartmentsSelected ? "selected" : ''}>
                                <img src="https://img.icons8.com/material-outlined/48/000000/building.png" alt="building" />
                                <span>דירות</span>
                                <span>9 סוגי נכסים</span>
                            </button>
                            <button
                                onClick={() => {
                                    if (housesSelected) {
                                        const myArray = filtersData.types.filter(function (el) {
                                            return !housesArray.includes(el)
                                        })
                                        setHousesSelected(false);
                                        dispatchFiltersData(setTypesAction(myArray));
                                    }
                                    else {
                                        setHousesSelected(true);
                                        dispatchFiltersData(setTypesAction([...filtersData.types, ...housesArray]))
                                    }
                                }}
                                className={housesSelected ? 'selected' : ''}>
                                <img src="https://img.icons8.com/material-outlined/48/000000/home--v2.png" alt="home" />
                                <span>בתים</span>
                                <span>4 סוגי נכסים</span>
                            </button>
                            <button
                                onClick={() => {
                                    if (othersSelected) {
                                        const myArray = filtersData.types.filter(function (el) {
                                            return !othersArray.includes(el)
                                        })
                                        setOthersSelected(false);
                                        dispatchFiltersData(setTypesAction(myArray));
                                    }
                                    else {
                                        setOthersSelected(true);
                                        dispatchFiltersData(setTypesAction([...filtersData.types, ...othersArray]))
                                    }
                                }}
                                className={othersSelected ? "selected" : ''}>
                                <img src="https://img.icons8.com/ios-glyphs/48/000000/defensive-wood-wall.png" alt="fence" />
                                <span>סוגים נוספים</span>
                                <span>7 סוגי נכסים</span>
                            </button>
                        </div>
                        <div className="showAllTypes">
                            <span>להצגת כל סוגי הנכסים</span>
                        </div>
                    </div>
                    <div className="rooms">
                        <span>חדרים</span>
                        <div className="roomsBoxes">
                            <select className="rooms-from"
                                value={filtersData.roomsFrom || -1}
                                onChange={(e) => {
                                    dispatchFiltersData(setRoomsFromAction(parseFloat(e.target.value)))
                                }}>
                                <option value="-1"> הכל </option>
                                <option value="1">‏1</option>
                                <option value="1.5">‏1.5</option>
                                <option value="2">‏2</option>
                                <option value="2.5">‏2.5</option>
                                <option value="3">‏3</option>
                                <option value="3.5">‏3.5</option>
                                <option value="4">‏4</option>
                                <option value="4.5">‏4.5</option>
                                <option value="5">‏5</option>
                                <option value="5.5">‏5.5</option>
                                <option value="6">‏6</option>
                                <option value="6.5">‏6.5</option>
                                <option value="7">‏7</option>
                                <option value="7.5">‏7.5</option>
                                <option value="8">‏8</option>
                                <option value="8.5">‏8.5</option>
                                <option value="9">‏9</option>
                                <option value="9.5">‏9.5</option>
                                <option value="10">‏10</option>
                                <option value="10.5">‏10.5</option>
                                <option value="11">‏11</option>
                                <option value="11.5">‏11.5</option>
                                <option value="12">‏12</option>
                            </select>
                            <span className="seperator"></span>
                            <select className="rooms-to"
                                value={filtersData.roomsTo || -1}
                                onChange={(e) =>
                                    dispatchFiltersData(setRoomsToAction(parseFloat(e.target.value)))
                                }>
                                <option value="-1"> הכל </option>
                                <option value="1">‏1</option>
                                <option value="1.5">‏1.5</option>
                                <option value="2">‏2</option>
                                <option value="2.5">‏2.5</option>
                                <option value="3">‏3</option>
                                <option value="3.5">‏3.5</option>
                                <option value="4">‏4</option>
                                <option value="4.5">‏4.5</option>
                                <option value="5">‏5</option>
                                <option value="5.5">‏5.5</option>
                                <option value="6">‏6</option>
                                <option value="6.5">‏6.5</option>
                                <option value="7">‏7</option>
                                <option value="7.5">‏7.5</option>
                                <option value="8">‏8</option>
                                <option value="8.5">‏8.5</option>
                                <option value="9">‏9</option>
                                <option value="9.5">‏9.5</option>
                                <option value="10">‏10</option>
                                <option value="10.5">‏10.5</option>
                                <option value="11">‏11</option>
                                <option value="11.5">‏11.5</option>
                                <option value="12">‏12</option>
                            </select>
                        </div>
                        <div className="rooms-suggestions">
                            <button onClick={() => {
                                dispatchFiltersData(setRoomsFromAction(2))
                                dispatchFiltersData(setRoomsToAction(3))
                            }}>2 - 3 חדרים</button>
                            <button onClick={() => {
                                dispatchFiltersData(setRoomsFromAction(3))
                                dispatchFiltersData(setRoomsToAction(4))
                            }}>3 - 4 חדרים</button>
                            <button onClick={() => {
                                dispatchFiltersData(setRoomsFromAction(4))
                                dispatchFiltersData(setRoomsToAction(5))
                            }}>4 - 5 חדרים</button>
                            <button onClick={() => {
                                dispatchFiltersData(setRoomsFromAction(5))
                                dispatchFiltersData(setRoomsToAction(6))
                            }}>5 - 6 חדרים</button>
                        </div>
                    </div>
                    <div className="price">
                        <span>מחיר</span>
                        <div className="priceBoxes">
                            <input
                                type="number"
                                placeholder="ממחיר"
                                value={filtersData.fromPrice || ''}
                                onChange={(e) => dispatchFiltersData(setPriceFrom(parseInt(e.target.value)))} />
                            <span className="seperator"></span>
                            <input type="number" placeholder="עד מחיר"
                                value={filtersData.toPrice || ''}
                                onChange={(e) => dispatchFiltersData(setPriceTo(parseInt(e.target.value)))} />
                        </div>
                        <div className="price-suggestions">
                            <button onClick={() => {
                                dispatchFiltersData(setPriceFrom(0))
                                dispatchFiltersData(setPriceTo(1500000))
                            }}>עד 1,500,000 ₪</button>
                            <button onClick={() => {
                                dispatchFiltersData(setPriceFrom(1500000))
                                dispatchFiltersData(setPriceTo(2000000))
                            }}>1.5 - 2 מיליון ₪</button>
                            <button onClick={() => {
                                dispatchFiltersData(setPriceFrom(2000000))
                                dispatchFiltersData(setPriceTo(3500000))
                            }}>2 - 3.5 מיליון ₪</button>
                            <button onClick={() => {
                                dispatchFiltersData(setPriceFrom(3500000))
                                dispatchFiltersData(setPriceTo(5000000))
                            }}>3.5 - 5 מיליון ₪</button>
                        </div>
                    </div>

                    <div className="advancedSearchButton">
                        <button onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}>
                            <span> {!showAdvancedSearch ? '+' : '-'} </span>
                            <span>{!showAdvancedSearch ? 'חיפוש מתקדם' : 'סגור חיפוש מתקדם'}</span>
                        </button>
                    </div>
                    <div className="searchButton">
                        <button onClick={(e) => {
                            e.preventDefault();
                            setShowSpinner(true)
                            getPosts(postsData.length, 1, filtersData).then((res) => {
                                setShowSpinner(false);
                                console.log(res.posts)
                                dispatchPostsData(setPostsAction(res.posts))
                                history.push('/home')
                            }).catch((e) => console.log(e))
                        }}>
                            חיפוש
                        </button>
                    </div>
                    {showSpinner && <Spinner />}
                    {showAdvancedSearch && <AdvancedSearchPhone />}
                </form>
            </div>
        </>
    )
}

export default SearchFormPhone
