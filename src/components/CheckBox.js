import React, { useState } from 'react'

const CheckBox = ({ checked, disabled, onClick, value }) => {
    const [checkBoxActive, setCheckBoxActive] = useState(checked || false);

    return (
        <div className={value ? "checkbox activeCheck" : "checkbox"} onClick={() => {
            disabled ? '' : setCheckBoxActive(!checkBoxActive);
            onClick(checkBoxActive)
        }}>
            {
                value && <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="24" height="24"
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M145.43294,37.93294l-80.93294,80.93295l-30.76628,-30.76628l-10.13411,10.13411l40.90039,40.90039l91.06706,-91.06705z"></path></g></g></svg>
            }
        </div>
    )
}

export default CheckBox
