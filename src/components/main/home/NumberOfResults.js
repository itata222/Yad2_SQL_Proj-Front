import React from 'react'

const NumberOfResults = ({ resultsLength }) => {
    return (
        <div className="resultsLength">
            <span>מציג {resultsLength} מודעות</span>
        </div>
    )
}

export default NumberOfResults
