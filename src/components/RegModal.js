import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StartModal.css';

const RegModal = (props) => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    repeatPassword: '',
    phone: ''
  }); //стейт для даних форми

  const [error, setError] = useState('');  //стейт для помилок
  const [success, setSuccess] = useState(false);  //стейт для успішності відправлення даних

  const handleChange = (e) => { //обробка змін даних у формі
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //запобігаємо оновленню
  
    if (formData.password !== formData.repeatPassword) { //запобігаємо неспівпадінню паролей
      setError('Passwords do not match');
      return;
    }
  
    const API_URL = 'http://localhost:5001/register'; // Записуємо адресу з бекенду
  
    try {
      const response = await fetch(API_URL, { // робимо пост запит на реєстрацію із даними з форми
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) throw new Error('Network response was not ok.'); // перехоплюємо помилки
  
      const data = await response.json();
      console.log(data);
      // виводимо у консоль відповідь сервера
      setSuccess(true); // якщо помилок ще не сталось, позначаємо запит як успішний
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error); // перехоплюємо помилки
    }
  };

  if (success) {
    return (
      <div className="startmodal-success">
        
        <p>You have successfully registered.</p>
       </div>
    );
   }

  return (
    <div className="startmodal">
      <div className='startmodal-top'>
        <img onClick={props.GoBack} src="/img/Arrow-Reg.png"/>
        <p className='skip-button' onClick={props.CloseModal}>SKIP</p>
      </div>
      <div className="startmodal-body">
        <div className="startmodal-left">
          <img src="/img/player.png" alt="Player Image"/>
        </div>
        <div className="startmodal-right">
          <img className='logo-reg' src="/img/Logo Reg.png" alt="Logo Image"/>
          <h1>USER REGISTRATION</h1>
          <h2>Enter your username, email, and password to register.</h2>
          <form onSubmit={handleSubmit}>
            <input className='regInput' name="userName" type="text" placeholder="Username" onChange={handleChange} value={formData.userName} required />
            <input className='regInput' name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
            <input className='regInput' name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
            <input className='regInput' name="repeatPassword" type="password" placeholder="Repeat password" onChange={handleChange} value={formData.repeatPassword} required />
            <input className='regInput' name="phone" type="text" placeholder="Phone" onChange={handleChange} value={formData.phone} required />
            {error && <p className="error">{error}</p>}
            <button type="submit" className='sign-button'>SIGN UP WITH EMAIL</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegModal;
