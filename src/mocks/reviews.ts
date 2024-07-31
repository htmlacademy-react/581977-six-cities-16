import {Reviews} from '../types/review.ts';

const reviews: Reviews = [
  {
    'id': 'c9cf69e9-5169-416f-bfe5-207560ebefd4',
    'date': '2022-05-19T14:13:51.569Z',
    'user': {
      'name': 'Jack Brown',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'comment': 'Nice)',
    'rating': 4
  },
  {
    'id': 'b7f24e32-7750-4d61-8697-9e7c420461c0',
    'date': '2023-09-08T12:13:56.569Z',
    'user': {
      'name': 'Oliver Smith',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'comment': 'So so.',
    'rating': 3
  },
  {
    'id': '2ac373cc-19b4-4d17-b009-02a079593c22',
    'date': '2024-05-08T15:13:56.569Z',
    'user': {
      'name': 'Mike Pro',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': true
    },
    'comment': 'Cool!',
    'rating': 5
  }
];

export default reviews;
