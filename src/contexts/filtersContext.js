import React, { createContext, useReducer } from 'react';
import filtersReducer, { filtersInitialState } from '../reducers/filtersReducer';

export const FiltersContext = createContext();

const FiltersContextProvider = (props) => {

    const [filtersData, dispatchFiltersData] = useReducer(filtersReducer, filtersInitialState);

    return (
        <FiltersContext.Provider value={{ filtersData, dispatchFiltersData }}>
            {props.children}
        </FiltersContext.Provider>
    );
};

export default FiltersContextProvider;