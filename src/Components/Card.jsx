import { useState } from "react";

const Card = ({id, name, status, img }) => {
    
  return <div className="card">
    <img src={img} alt={name} />
  </div>;
};

export default Card;
