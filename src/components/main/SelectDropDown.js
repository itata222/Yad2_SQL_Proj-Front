import React from 'react'


const SelectDropDown = ({ value, onChange, array, className, hideFirst, isInValid, step, setState, startAtValue, endAtValue }) => {
    console.log(startAtValue || 0, endAtValue || 20)
    return (
        <>
            <select className={!isInValid ? className : `${className} invalidSelect`} value={value} onChange={(e) => {
                onChange(e.target.value)
                if (step === 1) {
                    if (className === 'typeSelect') setState(false)
                    if (className === 'conditionSelect') setState(false)
                }
                else if (step === 2) {
                    setState(false)
                }
            }}>
                {array.map((option, i) => (
                    <option hidden={i < (startAtValue || 0) || i > (endAtValue || 20) || (hideFirst === true && i === 0)} key={i} value={option}>{option}</option>
                ))}
            </select>
            {isInValid && <div className="invalidMessage">שדה חובה</div>}
        </>
    )
}

export default SelectDropDown
