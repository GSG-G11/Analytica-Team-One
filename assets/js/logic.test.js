const {filterByCategory, filterByPrice, searchProducts, addToCart, addProduct} = require('./logic');

const productObject = [
  {
    id: 1,
    name: 'Laptop HP',
    price: 600,
    category: 'Laptop',
    description:
      'HP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels.',
    imgUrl: 'http://pngimg.com/uploads/laptop/laptop_PNG101775.png',
  },
  {
    id: 2,
    name: 'Laptop Asus',
    price: 800,
    category: 'Laptop',
    description:
      'Asus NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels.',
    imgUrl: 'http://pngimg.com/uploads/laptop/laptop_PNG101764.png',
  },
  {
    id: 3,
    name: 'Computer desktop PC',
    price: 1000,
    category: 'Computer',
    description:
      'Scaled appropriately to support delivered system with reasonable growth potential (In Win CE685 PC case with 300 watt 80PLUS certified power supply.',
    imgUrl: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG7703.png',
  },
  {
    id: 4,
    name: 'Computer desktop',
    price: 700,
    category: 'Computer',
    description:
      'Microsoft Windows 7 Home Basic(or other least expensive Microsoft Windows operating system.',
    imgUrl: 'http://pngimg.com/uploads/computer_pc/computer_pc_PNG7706.png',
  },
  {
    id: 5,
    name: 'Computer mouse',
    price: 50,
    category: 'mouse',
    description:
      'The mouse is a small, movable device that lets you control a range of things on a computer.',
    imgUrl: 'http://pngimg.com/uploads/computer_mouse/computer_mouse_PNG7667.png',
  },
  {
    id: 6,
    name: 'Headphones',
    price: 200,
    category: 'Headphones',
    description:
      'Though the competition is stiffer than ever, the Bose QuietComfort 45 headphones.',
    imgUrl: 'http://pngimg.com/uploads/headphones/headphones_PNG7624.png',
  },
  {
    id: 7,
    name: 'Headphones',
    price: 100,
    category: 'Headphones',
    description:
      'Though the competition is stiffer than ever, the Bose QuietComfort 45 headphones.',
    imgUrl: 'http://pngimg.com/uploads/headphones/headphones_PNG7622.png',
  },
  {
    id: 8,
    name: 'Tablet',
    price: 1500,
    category: 'Tablet',
    description:
      "Apple's 2021 base model iPad delivers strong performance and an excellent front-facing camera at a very palatable price.",
    imgUrl: 'http://pngimg.com/uploads/tablet/tablet_PNG8582.png',
  },
  {
    id: 9,
    name: 'Tablet',
    price: 1000,
    category: 'Tablet',
    description:
      "Apple's 2021 base model iPad delivers strong performance and an excellent front-facing camera at a very palatable price.",
    imgUrl: 'http://pngimg.com/uploads/tablet/tablet_PNG8587.png',
  },
  {
    id: 10,
    name: 'Laptop Samsung',
    price: 2000,
    category: 'Laptop',
    description:
      'Samsung NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels.',
    imgUrl: 'http://pngimg.com/uploads/laptop/laptop_PNG101775.png',
  },
];

describe('Homepage functions tests', function () {
  test('Should find and return products when searching for it', () => {
    searchProducts(productObject, 'mouse');
    const expected = searchProducts(productObject, 'mouse');
    const actual = [
      {
        id: 5,
        name: 'Computer mouse',
        price: 50,
        category: 'mouse',
        description:
          'The mouse is a small, movable device that lets you control a range of things on a computer.',
        imgUrl: 'http://pngimg.com/uploads/computer_mouse/computer_mouse_PNG7667.png',
      },
    ];
    expect(expected).toEqual(actual);
  });

  test('Should add products to card', () => {
    const expected = addToCart(productObject, productObject[0]);
    const actual = productObject;
    expect(expected).toEqual(actual);
  });

//product test
  test('Should add products to array to push', () => {
    const expected = addProduct(productObject, productObject[0]);
    const actual = productObject;
    expect(expected).toEqual(actual);
  });

  test('Should filter the products by the specific price', () => {
    const expected = filterByPrice(productObject, 50);
    const actual = [
      {
        id: 5,
        name: 'Computer mouse',
        price: 50,
        category: 'mouse',
        description:
          'The mouse is a small, movable device that lets you control a range of things on a computer.',
        imgUrl: 'http://pngimg.com/uploads/computer_mouse/computer_mouse_PNG7667.png',
      },
    ];
    expect(expected).toEqual(actual);
  });

  test('Should return products with specific categroy', () => {
    const expected = filterByCategory(productObject, 'Laptop');
    const actual = [
      {
        id: 1,
        name: 'Laptop HP',
        price: 600,
        category: 'Laptop',
        description:
          'HP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels.',
        imgUrl: 'http://pngimg.com/uploads/laptop/laptop_PNG101775.png',
      },
      {
        id: 2,
        name: 'Laptop Asus',
        price: 800,
        category: 'Laptop',
        description:
          'Asus NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels.',
        imgUrl: 'http://pngimg.com/uploads/laptop/laptop_PNG101764.png',
      },
      {
        id: 10,
        name: 'Laptop Samsung',
        price: 2000,
        category: 'Laptop',
        description:
          'Samsung NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels.',
        imgUrl: 'http://pngimg.com/uploads/laptop/laptop_PNG101775.png',
      },
    ];
  });
});
