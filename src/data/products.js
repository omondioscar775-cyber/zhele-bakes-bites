const products = [
  {
    id: 1,
    name: "Chocolate Birthday Cake",
    category: "Birthday Cakes",
    price: 1800,
    rating: 5,
    featured: true,
    badge: "BEST SELLER",

    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",

    gallery: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    ],

    description:
      "A rich chocolate sponge cake layered with silky chocolate ganache and decorated with premium whipped cream. Perfect for birthdays and celebrations.",

    sizes: ["1 Kg", "2 Kg", "3 Kg"],

    flavours: [
      "Chocolate",
      "Vanilla",
      "Red Velvet",
      "Black Forest",
    ],

    stock: true,

    prepTime: "24 Hours",
  },

  {
    id: 2,
    name: "Vanilla Birthday Cake",
    category: "Birthday Cakes",
    price: 1700,
    rating: 5,
    featured: true,
    badge: "POPULAR",

    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636",

    gallery: [
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636",
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636",
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636",
    ],

    description:
      "A soft vanilla sponge layered with fresh cream and finished with elegant decorations for every special occasion.",

    sizes: ["1 Kg", "2 Kg", "3 Kg"],

    flavours: [
      "Vanilla",
      "Chocolate",
      "Strawberry",
    ],

    stock: true,

    prepTime: "24 Hours",
  },

  {
    id: 3,
    name: "Cream Doughnut",
    category: "Doughnuts",
    price: 80,
    rating: 4,
    featured: true,
    badge: "NEW",

    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",

    gallery: [
      "https://images.unsplash.com/photo-1551024601-bec78aea704b",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    ],

    description:
      "Soft and fluffy doughnuts filled with smooth vanilla cream and lightly dusted with sugar.",

    sizes: ["Regular"],

    flavours: [
      "Vanilla Cream",
      "Chocolate Cream",
      "Custard",
    ],

    stock: true,

    prepTime: "30 Minutes",
  },

  {
    id: 4,
    name: "Pepperoni Pizza",
    category: "Fast Food",
    price: 1200,
    rating: 5,
    featured: true,
    badge: "BEST SELLER",

    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",

    gallery: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    ],

    description:
      "Stone-baked pizza topped with mozzarella cheese, pepperoni slices, and our signature tomato sauce.",

    sizes: ["Small", "Medium", "Large"],

    flavours: ["Pepperoni"],

    stock: true,

    prepTime: "40 Minutes",
  },

  {
    id: 5,
    name: "French Fries",
    category: "Snacks",
    price: 250,
    rating: 4,
    featured: true,
    badge: "POPULAR",

    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f",

    gallery: [
      "https://images.unsplash.com/photo-1576107232684-1279f390859f",
      "https://images.unsplash.com/photo-1576107232684-1279f390859f",
      "https://images.unsplash.com/photo-1576107232684-1279f390859f",
    ],

    description:
      "Golden crispy French fries served hot and lightly seasoned with our special spice blend.",

    sizes: ["Regular", "Large"],

    flavours: ["Classic", "Cheese", "Spicy"],

    stock: true,

    prepTime: "20 Minutes",
  },

  {
    id: 6,
    name: "Chicken Burger",
    category: "Fast Food",
    price: 550,
    rating: 5,
    featured: true,
    badge: "NEW",

    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",

    gallery: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    ],

    description:
      "Juicy grilled chicken fillet served with lettuce, tomato, cheese, and our signature burger sauce.",

    sizes: ["Regular"],

    flavours: ["Classic", "Spicy"],

    stock: true,

    prepTime: "25 Minutes",
  },

  {
    id: 7,
    name: "Fresh Bread",
    category: "Bakery",
    price: 70,
    rating: 5,
    featured: false,
    badge: "",

    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",

    gallery: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    ],

    description:
      "Freshly baked bread with a soft interior and golden crust, perfect for breakfast or sandwiches.",

    sizes: ["400 g", "800 g"],

    flavours: ["White", "Brown"],

    stock: true,

    prepTime: "Fresh Daily",
  },

  {
    id: 8,
    name: "Soft Drink",
    category: "Drinks",
    price: 100,
    rating: 4,
    featured: false,
    badge: "",

    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",

    gallery: [
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
    ],

    description:
      "A refreshing soft drink served chilled to perfectly complement your meal.",

    sizes: ["300 ml", "500 ml"],

    flavours: ["Cola", "Orange", "Lemon"],

    stock: true,

    prepTime: "Ready to Serve",
  },
];

export default products;