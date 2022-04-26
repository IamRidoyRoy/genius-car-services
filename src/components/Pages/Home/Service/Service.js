import React from 'react';

const Service = ({ service }) => {
    const { name, id, price, img } = service
    return (
        <div>
            <img src={img} alt="" />
            <h2>Name : {name}</h2>
            <p>Id: {id}</p>
            <p>Price: {price}</p>

        </div>
    );
};

export default Service;