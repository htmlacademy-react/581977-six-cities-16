import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {Settings} from './const.ts';
import offers from './mocks/offers.ts';
import offer from './mocks/offer.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      numberOfRentalOffers = {Settings.NumberOfRentalOffers}
      offers = {offers}
      offer = {offer}
    />
  </React.StrictMode>
);
