import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import './App.css'
import Popup from './Popup';

const App = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onConfirm = () => console.log('confirmed')

  return (
    <div className='main-container'>
      <button className='button-home' onClick={onOpenModal}>Click Me</button>
      <Popup open={open} onCloseModal={onCloseModal} onConfirm={onConfirm}/>
    </div>
  );
};

export default App;
