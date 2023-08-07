import React from 'react';
import './Card.css';
const Card = (props) => {
    const poster_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${props.Poster}`;
    return (
        <li>
        
        <div className="card-bg">
            <div className="card-img">
                    <img src={poster_url} alt={props.Title } />
                </div>
            <div className="card-content">
            <div className="card-title">{props.Title}</div>
                    <div className="card-desc">{props.Plot}</div>
            </div>
            </div>
        </li>

    );
}
export default Card;