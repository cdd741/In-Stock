import React from 'react';
import {ReactComponent as Close} from '../../assets/Icons/close-24px.svg';
import './DeleteModal.scss'

function DeleteWarehouse (props){
    return(
        <>
            <div className="modal-container">
                <div className="modal">
                    <Close className="modal__close" /* onClick={props.close()} *//>
                    <h2 className="modal__title">Delete King West{/*or props.warehouseName */} warehouse?</h2>
                    <p className="modal__text">
                        Please confirm that you'd like to delete the {props.warehouseName} from 
                        the list of warehouses. You wont be able to undo this action.
                    </p>
                    <div className="modal__buttons">
                        <button className="modal__button modal__button__cancel" /* onClick={props.close()} */>Cancel</button>
                        <button className="modal__button modal__button__delete" /* onClick={props.delete()} */>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteWarehouse;