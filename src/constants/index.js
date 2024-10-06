export const categories = [
  'Oranges',
  'Bananas',
  'Pineapple',
  'Apple',
  'Cherry',
];
export const featuredFruits = [
  {
    name: 'Antalya Orange',
    price: '55.60',
    stars: 4,
    desc: 'Sweet and juicy',
    shadow: 'orange',
    image: require('../../assets/images/orange.png'),
    color: opacity => `rgba(251, 216, 146, ${opacity})`,
  },
  {
    name: 'Bursa Nectari',
    shadow: 'red',
    price: '65.50',
    stars: 5,
    desc: 'Sweet and juicy',
    image: require('../../assets/images/peach.png'),
    color: opacity => `rgba(255, 170, 157, ${opacity})`,
  },

  {
    name: 'Black Grapes',
    price: '55.90',
    stars: 4,
    desc: 'Sweet and juicy',
    shadow: 'purple',
    image: require('../../assets/images/grapes.png'),
    color: opacity => `rgba(214, 195, 246, ${opacity})`,
  },

  {
    name: 'Red Grapefruit',
    price: '75.50',
    stars: 5,
    desc: 'Sweet and juicy',
    shadow: 'red',
    image: require('../../assets/images/redOrange.png'),
    color: opacity => `rgba(255, 163, 120, ${opacity})`,
  },
  {
    name: 'Green Apple',
    price: '50.50',
    stars: 3,
    desc: 'Sweet and juicy',
    shadow: 'green',
    image: require('../../assets/images/greenApple.png'),
    color: opacity => `rgba(139, 243, 139, ${opacity})`,
  },
];

export const cartItems = [
  {
    name: 'Antalya Orange',
    price: '12.30',
    qty: 4,
    desc: 'Sweet and juicy',
    shadow: 'orange',
    image: require('../../assets/images/orange.png'),
    color: opacity => `rgba(251, 216, 146, ${opacity})`,
  },
  {
    name: 'Bursa Nectari',
    shadow: 'red',
    price: '12',
    qty: 3,
    desc: 'Sweet and juicy',
    image: require('../../assets/images/peach.png'),
    color: opacity => `rgba(255, 170, 157, ${opacity})`,
  },

  {
    name: 'Black Grapes',
    price: '40',
    qty: 2,
    desc: 'Sweet and juicy',
    shadow: 'purple',
    image: require('../../assets/images/grapes.png'),
    color: opacity => `rgba(214, 195, 246, ${opacity})`,
  },
  {
    name: 'Green Apple',
    price: '10.5',
    qty: 2,
    desc: 'Sweet and juicy',
    shadow: 'green',
    image: require('../../assets/images/greenApple.png'),
    color: opacity => `rgba(139, 243, 139, ${opacity})`,
  },
];
