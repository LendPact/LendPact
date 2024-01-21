// carditems.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';


function CardItem(props) {
    
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='dapp Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <ProgressBar now={5000} max={100000}  />
            <h5 className='cards__item__text'>5000/100000 GHO tokens raised.</h5>
            <div className="lend-button">
              <button className="btn btn-success">Lend</button>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
