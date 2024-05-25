import React, { useState, useEffect } from 'react';
import './Product.css'
import { Link } from 'react-router-dom'
import { useFilters } from '../FilterContext'

const Product = ({ accessToken, imgSrc, itemName, condition, price, location }) => {
  const[imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    const fetchImage = async () => {
      try{
        const response = await fetch('https://api.dropboxapi.com/2/files/search_v2', {
          method: 'POST',
          headers: { // токен
            'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            query: imgSrc, // у запит передаємо картинку
            options: {
              file_status: 'active',
              filename_only: true,
              max_results: 1,
            },
            match_field_options: {
              include_highlights: false,
            },
          }),
        });
        const data = await response.json(); // записуємо дані картинки отримані за 1 посиланням
        if (data.matches.length > 0) { // якщо картинка з таким іменем є, робимо запит на тимчасове посилання
          const path = data.matches[0].metadata.metadata.path_display;
          const linkResponse = await fetch('https://api.dropboxapi.com/2/files/get_temporary_link', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ path }),
          });
 
          const linkData = await linkResponse.json();  // записуємо тимчасове посилання
          setImageUrl(linkData.link);
        }
      } catch (error) {
        console.error('Error fetching image from Dropbox:', error);
      }
    };

    if (imgSrc) {
      fetchImage();
    }
  }, [imgSrc, accessToken]);
  
  const {filters} = useFilters;
  return (
    <div className='item'>
        
        <Link to={{ pathname: `/product/${itemName}` }}> 
        <img className="item-img" src={imageUrl || './img/placeholder.png'} alt={itemName} />
      </Link>
      <div className='item-section-one'>
        <div className='item-section-two'>
            <div>
                <h2 className='item-name'>{itemName}</h2>
                <p className='state'>{condition}</p>
            </div>
            <p className='price'>{price}$</p>
        </div>
        <div className='location-descr'>
            <img src= "./img/location.png" alt="Location"/>
            <p>{location}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
