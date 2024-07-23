import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../../pages/main/main.tsx';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFound from '../not-found/not-found.tsx';
import PrivateRoute from '../private-route/private-route.tsx';

type AppScreenProps = {
  numberOfRentalOffers: number;
}

function App({numberOfRentalOffers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main numberOfRentalOffers = {numberOfRentalOffers}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
