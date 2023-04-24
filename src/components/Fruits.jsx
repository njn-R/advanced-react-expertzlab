import React from 'react'
import fruitsData from '../data/fruit'

const Fruits = () => {
  return (
    <div className="card-container">
      {fruitsData.map((fruit) => {
        return (
          <div key={fruit.id} className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={fruit.image} alt={fruit.name}/>
            <div className="card-body">
              <h2 className="card-title">{fruit.name}</h2>
              <h5 className="card-text">₹{fruit.price}</h5>
              <a href="#" className="btn btn-primary" style={{justifyContent: "center", width: "100%", marginTop:""}}>
                Buy Now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Fruits