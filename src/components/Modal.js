import React from 'react'

const Modal = (props) => {
    return (
        <div className={props.modalState.isVisible === true ? "" : "hide"} onClick={()=>{
            props.onHide()
        }}>

            <div className="modal" >
                <div className="modal-container">{props.modalState.message}</div>
            </div>

        </div>
    )
}

export default Modal
