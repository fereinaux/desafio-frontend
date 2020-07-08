import React, { useState } from 'react';
import './Home.scss';
import api from '../../assets/api.json'
import Card from '../Card/Card'

export default function Home() {
  const [data] = useState(api.data.filter((element, index) => index < 10))
  console.log(data)
  return (
    <div className="home-container">
      <ul>
        {
          data.map((element, index) => <li key={element.additionalId}><Card element={element} /></li>)
        }
      </ul>
    </div>
  );
}