import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react';
import Home from './components/Home/Home'

export default function Routes() {


  return (
    <BrowserRouter >
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}
