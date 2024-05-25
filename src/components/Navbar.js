import React, { useState } from 'react';
import './Navbar.css';
import Modal from '../components/Modal'; // Assuming you have a Modal component similar to ProductDetail
import ProductForm from './ProductForm';
// Import your form component here if you have one, e.g., AddItemForm
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user, logout } = useAuth();
 
  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleHideModal = () => {
    setIsModalVisible(false);
  };

  // Assuming you have a form component named AddItemForm you wish to show in the modal
  return (
    <nav>
      <Link to="/">
       <img className="logo" src="/img/logo.png" alt="Logo"/>
      </Link>
      
      <div className="right">
      {user && (
        <React.Fragment>
          <button className="add" onClick={handleShowModal}>ADD AN ITEM</button>
          <p className="profile-name">{user.userName}</p>
        </React.Fragment>
      )}
       {user &&<img className="profile" src="/img/profile-icon.png" alt="Profile" onClick={logout}/>}
      </div>

      {isModalVisible && (
        <Modal onHideModal={handleHideModal}>
          <ProductForm/>
          
        </Modal>
      )}
    </nav>
  );
}

export default Navbar;
