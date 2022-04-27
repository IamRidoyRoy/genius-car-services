import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, price, img, description } = service
    return (
        <div className='sigle-service'>
            <img src={img} alt="" />
            <h2>Name : {name}</h2>
            <p>Price: {price}</p>
            <p>Description : {description} </p>
            <button>Book - {name}</button>

        </div>
    );
};

export default Service;