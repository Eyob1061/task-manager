import React from 'react';

function Card(props) {
  return (
    <div className='single-food'>
      <p>{props.id}</p>
      <p>{props.title}</p>
      <p>{props.category}</p>
      <p>{props.price}</p>
      <p>{props.img}</p>
      <p>{props.desc}</p>
    </div>
  );
}

export default Card;
