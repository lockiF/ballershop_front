import React, { useContext } from 'react'
import './Category.css'
import { useShopContext } from '../context/ShopContext';
import { useFilters } from '../FilterContext';

const Category = (props) => {
  const {category, setCategory } = useShopContext();
  const {setFilters} = useFilters();
  const handleClick = () => {
    setCategory(props.categoryName);
    setFilters(prevFilters =>({
      ...prevFilters,
      category: props.categoryName,
    }));
  };

  return (
    <div className="category" onClick={handleClick} style={{ backgroundColor: props.backgroundColor }}>
        <img src={props.imageSrc} alt={props.categoryName}/>
        <p className='category-name'>{props.categoryName}</p>
        <p className='category-offers'>{props.offerCount} offers </p>
    </div>
  );
};

export default Category
