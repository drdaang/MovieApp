import React, { useEffect } from 'react';
import Card from './Card';
import './CardList.css';


const CardList = ({items}) => {
 

  // if (props.items.length === 0) {
  //   return (<h1>Loading...</h1>);
  // }
  
  // useEffect(() => {
  //   console.log(props.items);
  // })
  if (items.length === 0) {
    return (<h1>Loading...</h1>);
  }
  console.log(items);
    return (
      <ul className="card-list">
        {items.map((item) => (
          <div className='card'>
          <Card
          id={item.id}
          Title={item.title}
          Poster={item.poster_path}
              Plot={item.overview}
          
            />
            </div>
        ))}
      </ul>
    );
  
  
};

export default CardList;
