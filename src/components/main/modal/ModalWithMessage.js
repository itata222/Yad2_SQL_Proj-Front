import React from 'react';
import { useHistory } from 'react-router-dom';

const ModalWithMessage = (props) => {
    const history = useHistory();
    return (
        <div className="modalWithMessage">
            <div className='modalWithMessage-content'>
                <h4>{props.text}</h4>
                <button onClick={() => {
                    props.setShowModal(false);
                    if (props.history != undefined)
                        history.push(props.history)
                }}>Great</button>
            </div>
        </div>
    )
}


export default ModalWithMessage