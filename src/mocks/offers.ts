import {Offers} from '../types/offer.ts';

const offers: Offers = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Great place',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'https://i.pravatar.cc/1'
  },
  {
    'id': 'fb8b60ee-8738-42de-ac35-e955bcb893df',
    'title': 'Beautiful location',
    'type': 'room',
    'price': 80,
    'city': {
      'name': 'Berlin',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 5,
    'previewImage': 'https://i.pravatar.cc/2'
  },
  {
    'id': 'ccf079cb-fc7c-4008-bd70-394dd9b25e3c',
    'title': 'Luxurious studio',
    'type': 'house',
    'price': 1000,
    'city': {
      'name': 'London',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3,
    'previewImage': 'https://i.pravatar.cc/3'
  },
  {
    'id': 'fe5e15db-ce81-4fb1-95a8-9454c4b1274a',
    'title': 'Studio at great location',
    'type': 'hotel',
    'price': 200,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 4.8,
    'previewImage': 'https://i.pravatar.cc/4'
  }
];

export default offers;
