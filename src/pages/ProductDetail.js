import './ProductDetail.css'

import ImageSlider from '../components/ImageSlider';
import { useParams } from "react-router-dom";
import { PRODUCTS } from '../PRODUCTS';
import React, { useEffect, useState } from "react";
import Description from '../components/Description';
import OrderSubmitForm from '../components/OrderSubmitForm';
import PhoneNumber from '../components/PhoneNumber'
import Modal from '../components/Modal';


function ProductDetail() {  
  const { productName } = useParams();
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null); // State to store user data
  const [isModalvisible, setIsModalVisible] = useState(false);
  const [isPhoneModalVisible, setIsPhoneModalVisible] = useState(false);

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleHideModal = () => {
    setIsModalVisible(false);
  }
  const handleShowPhoneModal = () => {
    setIsPhoneModalVisible(true);
  }
  const handleHidePhoneModal= () => {
    setIsPhoneModalVisible(false);
  }
  const fetchUserById = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5001/user/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const userData = await response.json();
      setUser(userData);
      console.log(userData);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };
  useEffect(()=>{
    const fetchProducts = async () =>{
      try{
        const response = await fetch('http://localhost:5001/product');
        if(!response.ok){
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json();
        setProducts(data);
        console.log(data);
      }catch(error){
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() =>{
    if(products.length > 0){
      const foundProduct = products.find(product => product.name === productName);
    }
  }, [products, productName]);
  const foundProduct = products.find(product => product.name === productName);
  console.log(foundProduct);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find(product => product.name === productName);
      if (foundProduct && foundProduct.user) {
        fetchUserById(foundProduct.user);
      }
    }
  }, [products, productName]);
  

    return (
      
      <div className="item-detail">
        <div className="item-block">
        {foundProduct && (<ImageSlider images ={foundProduct.imageUrls} ></ImageSlider>)}
        
       {foundProduct &&(
           <Description product={foundProduct} handleShowPhoneModal={handleShowPhoneModal} handleShowModal={handleShowModal} />)}
       {isModalvisible &&  foundProduct &&(
        <Modal onHideModal = {handleHideModal}>
          <div>
            <OrderSubmitForm/>
          </div>
        </Modal>
       )}
           {isPhoneModalVisible &&user && (
          <Modal onHideModal={handleHidePhoneModal}>
            <div>
              <PhoneNumber phone={user.phone}/>
            </div>
          </Modal>
        )}
        
       </div>
      </div>
    );
  }
  
  export default ProductDetail;