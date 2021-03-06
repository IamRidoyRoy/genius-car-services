import React from 'react';

const Expert = ({ expert }) => {
    const { img, name } = expert;
    return (


        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
            <div className='card' style={{ width: '18rem' }}>
                <img src={img} class="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button href="#" className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </div>



    );
};

export default Expert;