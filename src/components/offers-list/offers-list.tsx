import CityCard from '../city-card/city-card.tsx';
import {Offer, Offers} from '../../types/offer.ts';
import {useState} from 'react';

type OffersListProps = {
  offers: Offers;
};

function OffersList(props: OffersListProps): JSX.Element {
  const {offers} = props;
  const [, setActive] = useState('');

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <CityCard key={offer.id} offer={offer} onMouseOver={(activeOffer: Offer) => setActive(activeOffer.id)}/>)}
    </div>
  );
}

export default OffersList;
