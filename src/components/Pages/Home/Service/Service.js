import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { _id, name, price, img, description } = service
    const navigate = useNavigate();
    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='sigle-service'>
            <img src={img} alt="" />
            <h2>Name : {name}</h2>
            <p>Price: {price}</p>
            <p>Description : {description} </p>
            <button onClick={() => navigateToServiceDetails(_id)} className='btn btn-primary'>Book - {name}</button>

        </div>
    );
};

export default Service;