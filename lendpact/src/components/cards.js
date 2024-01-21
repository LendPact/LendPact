import React from 'react';
import './cards.css';
import CardItem from './carditems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Select the project you want to lend to.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/uniswap.jpeg'
              text='Uniswap is a protocol for automated token exchange on Ethereum.'
              label='Defi'
              path='/lend'
            />
            <CardItem
              src='images/lido.png'
              text='Lido is a liquid staking protocol for ETH 2.0.'
              label='Defi'
              path='/lend'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/makerdao.jpeg'
              text='MakerDAO is a decentralized organization dedicated to bringing financial stability and transparency to the world economy.'
              label='Defi'
              path='/lend'
            />
            <CardItem
              src='images/aave.jpeg'
              text='Aave is an open-source, non-custodial protocol to earn interest on deposits and borrow assets. '
              label='Defi'
              path='/lend'
            />
            <CardItem
              src='images/illuvium.jpeg'
              text='Illuvium is a decentralized, NFT collection and auto battler game built on the Ethereum blockchain.'
              label='Gaming'
              path='/lend'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;