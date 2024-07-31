import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../../pages/main/main.tsx';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import OfferPage from '../../pages/offer/offer-page.tsx';
import NotFound from '../not-found/not-found.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {Offers} from '../../types/offer.ts';
import {SingleOffer} from '../../types/single-offer.ts';

type AppScreenProps = {
  numberOfRentalOffers: number;
  offers: Offers;
  offer: SingleOffer;
}

function App({numberOfRentalOffers, offers, offer}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main numberOfRentalOffers = {numberOfRentalOffers} offers = {offers}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={
          <PrivateRoute>
            <Favorites offers = {offers}/>
          </PrivateRoute>
        }
        />
        <Route path="/offer/:id" element={<OfferPage offer={offer}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
