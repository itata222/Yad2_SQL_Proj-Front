import React from 'react'

const LocationDiv = ({ location }) => {
    return (
        <div className="location">
            <ul>
                {location.map((loc, i) => (
                    <li key={i}>{loc + (i === location.length - 1 ? '' : '  / ')}</li>
                ))}
            </ul>
        </div>
    )
}

export default LocationDiv
