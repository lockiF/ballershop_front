import React from 'react'
import './Filters.css'
import { useFilters } from '../FilterContext';
import { useState } from 'react';

const Filters = () => {

	const { setFilters } = useFilters();
	const { filters } = useFilters();
	const handleFilterChange = (e) => {
		const {name, value} = e.target;
		setFilters(prevFilters => ({
			...prevFilters,
			[name]: value,
		}))
		console.log(filters)
	};
	

  return (
    <section class="filters">
				<section class="filter-inner">
					<div class="selection">
						<label for="category">Category</label>
						<select name="category" onChange={handleFilterChange} value={filters.category}> 
						    <option value="Catalogue">All</option>
							<option value="Shoes">Shoes</option>
							<option value="Clothing">Clothing</option>
							<option value="Accessories">Accessories</option>
							<option value="Rare items">Rare items</option>
							<option value="Basketballs">Basketballs</option>
						</select>
					</div>
					<div className='selection'>
						<label htmlFor="state">State</label>
						<select name='state' onChange={handleFilterChange} value={filters.state}>
							<option value=''>All</option>
							<option value='new'>New</option>
							<option value='used'>Used</option>
						</select>
					</div>
					<div className="from-to">
                    <div className="selection">
                        <label htmlFor="priceFrom">From:</label>
                        <input type="text" name="priceFrom" onChange={handleFilterChange}/>
                    </div>
                    <div className="selection">
                        <label htmlFor="priceTo">To:</label>
                        <input type="text" name="priceTo" onChange={handleFilterChange}/>
                    </div>
                </div>
				</section>
			</section>
  )
}

export default Filters
