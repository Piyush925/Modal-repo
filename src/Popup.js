import React from 'react';
import { Modal } from 'react-responsive-modal';
import WarningImage from './images/icons8-warning-67.png';

const Popup = ({ open, onCloseModal, onConfirm }) => {
    return (
        <Modal open={open} onClose={onCloseModal} center>
          <div className='header-container'>
            <div className='header-image-container'>
              <img className='header-image' src={WarningImage} alt='warning' />
            </div>
          <h2>Unclosed Overdue Pay Runs</h2>
          </div>
          <p className='body-para'>
           Would you like to skip unclosed periods and start with this pay run <strong>(January 2023)?</strong>
          </p>
          <div className='button-container'>
          <button className='back-button' onClick={onCloseModal}>Back</button>
          <button className='skip-button' onClick={onConfirm}>Skip Unclosed Periods</button>
          </div>
        </Modal>
    );
  };
  
  export default Popup;