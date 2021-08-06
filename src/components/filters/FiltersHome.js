import React from 'react';
import FiltersB from './FiltersB'
import FiltersA from './FiltersA'
import Spinner from '../main/Spinner';


const FiltersHome = () => {


    return (
        <>
            {
                isPageLoaded ?
                    <>
                        <FiltersA />
                        <FiltersB />
                    </> :
                    <Spinner />
            }

        </>
    )
}


export default FiltersHome
