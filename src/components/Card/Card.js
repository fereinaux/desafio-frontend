import React from 'react';
import './Card.scss';

export default function Card({ element }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="img-container">
          <span className="label-city">{element.realestateSummary.address.city}</span>
          <img src={element.advertisementAssets[0].advertisementThumbnails.thumb_xs.url} alt="" />
        </div>
        <div className="info-container">

          <h5>{element.title}</h5>
          <h6>{element.realestateSummary.address.fullAddress}</h6>

          <div className="footer">
            <span className="bold">{element.advertisementPrice.baseRent} €</span>
            <span>{element.realestateSummary.numberOfRooms} Zimmer</span>
            <span>ab {element.realestateSummary.space.toFixed(2)} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}