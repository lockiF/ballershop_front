import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Navbar from './Navbar.js';
import Modal from './Modal.js'; 
import StartModal from './StartModal.js';
import AuthModal from './AuthModal.js';
import RegModal from './RegModal.js';

function Layout() {
  const [isModalActive, setIsModalActive] = useState(true);
  const [isRegModalActive,setIsRegModalActive] = useState(false);
  const [isSingModalActive, setIsSingModalActive] = useState(false);
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Outlet />
      {isModalActive && (
        <Modal modalStyle={{ backgroundColor: '#B336FF' }} onHideModal={() => {setIsModalActive(false);}}> 
        <StartModal CloseModal={() => {setIsModalActive (false);}} OpenSign={()=>{setIsSingModalActive(true); 
          setIsModalActive(false);}} OpenReg={() =>{setIsRegModalActive(true); setIsModalActive(false);}} >
        </StartModal>
      </Modal>
      )}
      {isRegModalActive && ( 
      <Modal modalStyle={{ backgroundColor: '#B336FF' }} onHideModal={() => {setIsRegModalActive(false); }}> 
      <RegModal GoBack={()=>{setIsModalActive(true); setIsRegModalActive(false);}}
      CloseModal={()=> {setIsRegModalActive(false);}}/>
      </Modal>
      )}
      {isSingModalActive && (
      <Modal modalStyle={{ backgroundColor: '#B336FF' }} onHideModal={() => {setIsSingModalActive(false); setIsModalActive(false);}}> 
      <AuthModal GoBack={()=>{setIsModalActive(true); setIsSingModalActive(false);}}
      CloseModal={()=> {setIsSingModalActive(false);}}/>
      </Modal>
      )}  
      <Footer />
    </div>
  );
}

export default Layout;
