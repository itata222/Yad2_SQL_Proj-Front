import React from 'react'

const Step2Buttons = ({ className, label, onClick, data }) => {


    return (
        <div className={className}>
            <label>{label}</label>
            <div>
                <button className={data === 0 ? 'buttonSelected' : ''} onClick={() => onClick(0)}>ללא</button>
                <button className={data === 1 ? 'buttonSelected' : ''} onClick={() => onClick(1)}>1</button>
                <button className={data === 2 ? 'buttonSelected' : ''} onClick={() => onClick(2)}>2</button>
                <button className={data === 3 ? 'buttonSelected' : ''} onClick={() => onClick(3)}>3</button>
            </div>
        </div>
    )
}

export default Step2Buttons
