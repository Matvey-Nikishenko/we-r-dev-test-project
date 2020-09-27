import React from 'react';
import './modal.scss';

const Modal = ({month, day, toggleModal}) => {

    return (
        <div className="modal-background">
            <div className="modal-box">
               <div className="month">
                    <span>Month</span>   
                    <input className="input" type="text" value={month} />
                </div> 
                <div className="day">
                    <span>Day</span>
                    <input className="input" type="text" value={day} />
                </div>
                
               
                <button onClick={() => toggleModal()} className="close-btn">×</button>
            </div>
	    </div>
    )
}

export default Modal