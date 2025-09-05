/*
schema:
Items - 
  itemName: string,
  vegetarian: boolean,
  spicy: boolean,
  recommended: boolean,
  price: string,
  description: string,
  addOns: object[]

Add-Ons:
  addOnName: string,
  price: string

*/

export const breakfastMenu = [
  {
    itemName: "The English Spread",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$10.90",
    description:
      "Two sunny-side ups, turkey bacon strips, hash brown, baked beans, grilled tomato, Shiitake mushrooms and a sourdough toast.",
    addOns: [
      {
        addOnName: "Chicken Bratwurst",
        price: "+$4.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Avo-Easy",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$9.90",
    description:
      "Whole avocado smashed with a touch of lemon, two eggs over-easy, sliced tomatoes, on a sourdough toast.",
    addOns: [],
  },
  {
    itemName: "Buttermilk Pancakes w/ Maple Syrup",
    vegetarian: true,
    spicy: false,
    recommended: true,
    price: "$6.90",
    description:
      "Fluffy American-style pancakes made with our tasty homemade batter. Dressed with a knob of butter, and maple syrup. Minimum wait time of 12 minutes.",
    addOns: [
      {
        addOnName: "Blueberries",
        price: "+$1.00",
        showPlusSign: true,
      },
      {
        addOnName: "Banana Slices",
        price: "+$1.00",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Ample Scrambled",
    vegetarian: true,
    spicy: false,
    recommended: true,
    price: "$6.90",
    description:
      "Three eggs in a soft and creamy scramble, served on a sourdough toast with a side salad.",
    addOns: [
      {
        addOnName: "Truffles Infusion",
        price: "+$2.00",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Classic French Omelette w/ Fine Herbs",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$6.90",
    description:
      "Three-egg omelette with a smooth, silky exterior and a moist, soft-scrambled interior mixed with assorted herbs. Served on a sourdough toast with a side salad.",
    addOns: [
      {
        addOnName: "Turkey Bacon",
        price: "+$1.50",
        showPlusSign: true,
      },
      {
        addOnName: "Shiitake Mushrooms",
        price: "+$1.00",
        showPlusSign: true,
      },
      {
        addOnName: "Capsicums",
        price: "+$1.00",
        showPlusSign: true,
      },
      {
        addOnName: "Fior di Latte | Cheddar",
        price: "+$1.00",
        showPlusSign: true,
      },
      {
        addOnName: "Greek Feta",
        price: "+$1.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Overnight Oats",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$6.90",
    description:
      "A thick, creamy mixture of rolled oats, fresh milk, premium fat-free Greek Yogurt, Chia seeds, and honey. Topped with premium granola.",
    addOns: [
      {
        addOnName: "Blueberries",
        price: "+$1.00",
        showPlusSign: true,
      },
      {
        addOnName: "Banana Slices",
        price: "+$1.00",
        showPlusSign: true,
      },
      {
        addOnName: "Biscoff Cookie Butter",
        price: "+$1.30 / 2.60",
        showPlusSign: true,
      },
      {
        addOnName: "Pistachio Butter",
        price: "+$2.20 / 4.40",
        showPlusSign: true,
      },
    ],
  },
];

export const bakedGoodsMenu = [
  {
    itemName: "French Butter Croissant",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$3.00",
    description: null,
    addOns: [],
  },
  {
    itemName: "Pain au Chocolat",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$3.00",
    description: null,
    addOns: [],
  },
  {
    itemName: "Maple Pecan Plait",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$4.20",
    description: null,
    addOns: [],
  },
  {
    itemName: "Danish Custard Crown",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$4.50",
    description: null,
    addOns: [],
  },
  {
    itemName: "New York-Style Bagel",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$2.00 / $4.00",
    description: "Check with counter for the flavours of the day.",
    addOns: [
      {
        addOnName: "French Butter",
        price: "+$1.00 / $2.00",
        showPlusSign: true,
      },
      {
        addOnName: "Peanut Butter",
        price: "+$1.00 / $2.00",
        showPlusSign: true,
      },
      {
        addOnName: "Chocolate Hazelnut",
        price: "+$1.00 / $2.00",
        showPlusSign: true,
      },
      {
        addOnName: "Cream Cheese w/ Dill & Chives",
        price: "+$1.30 / $2.60",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Protein Banana Walnut Cake",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$3.20",
    description: "Homemade with plant-based protein. Vegan.",
    addOns: [],
  },
  {
    itemName: "Molten-Filled Muffins",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$3.90",
    description:
      "Double Chocolate | Banana Custard Speculoos | Blueberry Cheesecake | Vanilla Apple | Lemon Yuzu | Cranberry Salted Caramel",
    addOns: [],
  },
  {
    itemName: "Homemade Chocolate Chip Cookie",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$2.50",
    description: "",
    addOns: [],
  },
  {
    itemName: "Black & White Brownie",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$4.80",
    description: "",
    addOns: [],
  },
  {
    itemName: "Assorted Cakes",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "See Display",
    description: "",
    addOns: [],
  },
];

export const snackMenu = [
  {
    itemName: "Regular Fries",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$3.50",
    description: "",
    addOns: [],
  },
  {
    itemName: "Truffle Fries",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$5.50",
    description: "",
    addOns: [],
  },
  {
    itemName: "Mentaiko Fries",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$5.50",
    description: "",
    addOns: [],
  },
  {
    itemName: "Curly Fries",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$5.50",
    description: "",
    addOns: [],
  },
  {
    itemName: "Chicken Nuggets",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$4.80",
    description: "",
    addOns: [],
  },
  {
    itemName: "Roasted Broccoli Chips w/ Grana Padano",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$4.50",
    description: "",
    addOns: [],
  },
];

export const saladMenu = [
  {
    itemName: "Superfood Medley",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$10.50",
    description:
      "Roasted Sweet Potatoes, Romaine Lettuce, Roasted Chips, Broccoli, Avocado, Beetroot, Cherry Tomatoes, Sunflower Seeds, EVOL",
    addOns: [],
  },
  {
    itemName: "The Scandinavian",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$10.00",
    description: "Roasted Sweet Potato, Steamed Salmon, French Beans",
    addOns: [],
  },
  {
    itemName: "Japanese Inspired",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$10.20",
    description:
      "Soba Noodles, Roasted Chicken, Ajitsuke Tamago, Japanese Silken Tofu, Nori, Edamame, Corn, Cherry Tomatoes, Baisen Goma",
    addOns: [],
  },
  {
    itemName: "The Post Workout",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$9.20",
    description:
      "Brown Rice, Sous-Vide Chicken Breast, Hard-Boiled Egg, Edamame, Roasted Broccoli, Honey-Glazed Carrot Sticks, Sriracha Mayo",
    addOns: [],
  },
  {
    itemName: "Insalata di Pasta",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$8.00",
    description:
      "Fusilli, Baby Spinach, Roasted Chicken, Cherry Tomatoes, Cucumber, Vinaigrette, EVOL",
    addOns: [],
  },
  {
    itemName: "Salade Niçoise",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$8.50",
    description:
      "Romaine Lettuce, Sweet Tuna Chunks, Hard-Boiled Egg, French Beans, Cherry Tomatoes, Cucumbers, Black Olives, Vinaigrette",
    addOns: [],
  },
  {
    itemName: "Greek Inspired",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$8.00",
    description:
      "Romaine Lettuce, Capsicums, Cucumber, Black Olives, Cherry Tomatoes, Shallots, Feta Cheese, Vinaigrette.",
    addOns: [],
  },
  {
    itemName: "Nordic Shrimp Salad",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$9.50",
    description:
      "Romaine Lettuce, Prawns, Hard-Boiled Egg, Beetroot, Honey Pineapple, Beetroot Mayo",
    addOns: [],
  },
  {
    itemName: "The Side Salad",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$4.50",
    description:
      "Romaine Lettuce, Corn, Cucumber, Cherry Tomatoes, Croutons, Vinaigrette.",
    addOns: [],
  },
];

export const italianMenu = [
  {
    itemName: "Penne al Pesto di Basilico",
    vegetarian: true,
    spicy: false,
    recommended: true,
    price: "$8.90",
    description:
      "A light, creamy homemade paste of crushed Italian basil leaves, toasted pine nuts, garlic, and extra virgin olive oil.",
    addOns: [],
  },
  {
    itemName: "Penne alla Norma",
    vegetarian: true,
    spicy: false,
    recommended: true,
    price: "$7.90",
    description:
      "Sicilian eggplant pasta. Sautéed aubergine tossed in a homemade tomato sauce and sprinkled with shredded Fior di Latte.",
    addOns: [],
  },
  {
    itemName: "Spaghetti al Pomodoro con Burratina",
    vegetarian: true,
    spicy: false,
    recommended: true,
    price: "$7.90",
    description:
      "Classic base of tomatoes and Italian basil, topped with a soft, buttery mix of Buffalo Mozzarella and cream.",
    addOns: [
      {
        addOnName: "Sliced Beef",
        price: "+$4.00",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Penne all'Arrabbiata",
    vegetarian: false,
    spicy: true,
    recommended: true,
    price: "$6.50",
    description:
      "An angry pasta, literally. A spicy sauce made from garlic, tomatoes, and red chili peppers cooked in olive oil.",
    addOns: [
      {
        addOnName: "Chicken",
        price: "$2.00",
        showPlusSign: true,
      },
      {
        addOnName: "Prawns",
        price: "$4.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Spaghetti Aglio, Olio e Peperoncino",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: null,
    description: "Garlic and red chili peppers sautéed in olive oil.",
    addOns: [
      {
        addOnName: "with Turkey Bacon",
        showPlusSign: true,
      },
      {
        addOnName: "with Wild Mushrooms & Spinach",
        price: "$6.50",
        showPlusSign: true,
      },
      {
        addOnName: "with Chicken",
        price: "$6.50",
        showPlusSign: true,
      },
      {
        addOnName: "with Chicken, Wild Mushrooms & Spinach",
        price: "$8.50",
        showPlusSign: true,
      },
      {
        addOnName: "with Prawns",
        price: "$9.90",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Penne ai Funghi e Spinaci",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$6.90",
    description:
      "Wild mushrooms, spinach, and garlic sautéed in olive oil, tossed in cream, and topped with Italian parsley.",
    addOns: [
      {
        addOnName: "Truffles Infused Mushroom Cream",
        price: "+$3.00",
        showPlusSign: true,
      },
    ],
  },

  {
    itemName: "Spaghetti alla Carbonara (Turkey Bacon)",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$7.90",
    description:
      "A pork-free, and loose adaptation of the traditional recipe. Sautéed turkey bacon, cream, black pepper, and sous vide egg.",
    addOns: [
      {
        addOnName: "Truffles Infusion",
        price: "+$2.00",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Penne al ragu Bolognese",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$9.90",
    description:
      "A rich, herbed tomato meat gravy braised over 3 hours. Minced beef, onions, celery, carrots, whole peeled tomatoes, rosemary, bay leave, and a dash of wine.",
    addOns: [
      {
        addOnName: "Bolognese Gravy (1.5 portions)",
        price: "+$2.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Lasagne al Forno",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$9.90",
    description:
      "Baked layers of our Bolognese gravy, Béchamel sauce, Fior di Latte, Grana Padano, and lasagne pasta sheets.",
    addOns: [],
  },
  {
    itemName: "Spaghetti alla Puttanesca",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$9.90",
    description:
      "Capers, black olives, anchovies, and garlic sautéed in olive oil and tossed in a light tomato sauce.",
    addOns: [],
  },

  {
    itemName: "Spaghetti alle Vongole in Bianco",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$9.90",
    description:
      "Fresh local clams, parsley and garlic sautéed in olive oil with a splash of white wine. A light, Italian classic.",
    addOns: [],
  },

  {
    itemName: "Spaghetti alla Nerano",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$9.90",
    description:
      "A light, buttery pasta dish named after a village along the Amalfi coast. Pan-fried zucchini creamed with Provolone del Monaco (or other substitutes).",
    addOns: [],
  },
  {
    itemName: "Secret Menu",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: null,
    description:
      "Check with counter. Subject to the seasonal availability of ingredients and longer wait times.",
    addOns: [],
  },
];

export const fusionMenu = [
  {
    itemName: "Tom Yum Spaghetti",
    vegetarian: false,
    spicy: true,
    recommended: false,
    price: "$6.50",
    description:
      "Shiitake mushrooms sautéed in olive oil with a hot and sour Tom Yum paste. Topped with coriander.",
    addOns: [
      {
        addOnName: "Fried Chicken Chunks",
        price: "+$3.50",
        showPlusSign: true,
      },
      {
        addOnName: "Prawns",
        price: "+$4.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Shanghainese Scallion Oil Noodles",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$6.50",
    description:
      "Spaghetti tossed in an aromatic blend of scallion oil and premium soy sauce.",
    addOns: [
      {
        addOnName: "Sunny-Side Up",
        price: "+$1.00",
        showPlusSign: true,
      },
      {
        addOnName: "Steamed Tofu and Leafy Vegetables",
        price: "+$2.00",
        showPlusSign: true,
      },
      {
        addOnName: "Fried Chicken Chunks",
        price: "+$3.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Salted Egg Yolk Pasta",
    vegetarian: false,
    spicy: true,
    recommended: false,
    price: "$6.50",
    description:
      "Spaghetti tossed in a buttery homemade paste of salted duck egg yolks and cream. Spiced with red chili peppers and fragrant curry leaves.",
    addOns: [
      {
        addOnName: "Fried Chicken Chunks",
        price: "+$3.50",
        showPlusSign: true,
      },
      {
        addOnName: "Prawns",
        price: "+$4.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Spicy Mentaiko Pasta",
    vegetarian: false,
    spicy: true,
    recommended: false,
    price: "$8.90",
    description:
      "Slightly spicy Alaskan pollock roe and cream, topped with a generous amount of Japanese seaweed (nori).",
    addOns: [
      {
        addOnName: "Fried Chicken Chunks",
        price: "+$3.50",
        showPlusSign: true,
      },
      {
        addOnName: "Upsize Pasta (1.5 portion)",
        price: "+$1.00",
        showPlusSign: true,
      },
      {
        addOnName: "Grana Padano (16 months)",
        price: "+$1.00",
        showPlusSign: true,
      },
    ],
  },
];
export const asianMenu = [
  {
    itemName: "Thai Basil Chicken Rice (Pad Ka-Prao Gai)",
    vegetarian: false,
    spicy: true,
    recommended: false,
    price: "$6.50",
    description:
      "Stir-fried hot and spicy minced chicken with holy basil. Served with a sunny-side up and steamed white rice.",
    addOns: [
      {
        addOnName: "Tofu and Steamed Leafy Vegetables",
        price: "+$2.00",
        showPlusSign: true,
      },
      {
        addOnName: "Upsize Meat (1.5 portions)",
        price: "+$2.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Thai Green Curry Chicken Rice",
    vegetarian: false,
    spicy: true,
    recommended: false,
    price: "$8.50",
    description:
      "An aromatic and creamy chicken curry cooked with a homemade paste, coconut milk, red capsicums, fish sauce, sweet basil, and kaffir lime leaves. Served with sautéed eggplant, sunny-side up and steamed white rice.",
    addOns: [
      {
        addOnName: "Upsize Meat (1.5 portions)",
        price: "+$2.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Tom Yum Fried Rice",
    vegetarian: false,
    spicy: true,
    recommended: false,
    price: "$7.50",
    description:
      "Fried rice with a distinct hot and sour flavour. Served with fried chicken chunks and a sunny-side up.",
    addOns: [
      {
        addOnName: "Double Fried Chicken Chunks",
        price: "+$3.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Chicken Katsudon",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$7.50",
    description:
      "Crispy Panko-breaded chicken cutlet served with a sweet-savoury sauce of onions cooked in dashi, and eggs over short-grain rice.",
    addOns: [
      {
        addOnName: "Double Katsu",
        price: "+$3.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Teriyaki Chicken Don",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$7.50",
    description:
      "Boneless chicken thigh glazed in a sweet and savoury soy sauce. Served with edamame over short-grain rice.",
    addOns: [
      {
        addOnName: "Upsize Meat (1.5 portions)",
        price: "+$2.50",
        showPlusSign: true,
      },
      {
        addOnName: "Sous-Vide Egg",
        price: "+$1.20",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Japanese Beef Bowl (Gyudon 牛丼)",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$8.50",
    description:
      "Savoury sliced beef and sautéed onions placed over rice, garnished with spring onions.",
    addOns: [
      {
        addOnName: "Upsize Meat (1.5 portions)",
        price: "+$3.50",
        showPlusSign: true,
      },
      {
        addOnName: "Sous-Vide Egg",
        price: "+$1.20",
        showPlusSign: true,
      },
      {
        addOnName: "Brown Rice Substitute",
        price: "+$0.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Hyderabad-style Dum Biryani",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "Click to see Prices",
    description:
      "Biryani cooked with long grain basmati rice, freshly grounded herbs, and spices in a traditional dum. Served with yoghurt raitha and gravy.",
    addOns: [
      {
        addOnName: "with Mixed Vegetables & Paneer",
        price: "$14.50",
      },
      {
        addOnName: "with Chicken",
        price: "$14.50",
      },
      {
        addOnName: "with Baby Goat Mutton",
        price: "$17.50",
      },
    ],
  },
];

export const sandwichMenu = [
  {
    itemName: "Egg Salad Sandwich",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$4.00",
    description: null,
    addOns: [],
  },
  {
    itemName: "Tuna Mayo Sandwich",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$4.30",
    description: null,
    addOns: [],
  },
  {
    itemName: "Avo-Easy",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$9.90",
    description:
      "Whole avocado smashed with a touch of lemon, two eggs over-easy, sliced tomatoes, on a sourdough toast.",
    addOns: [],
  },
  {
    itemName: "Caprese",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$11.90",
    description:
      "Open-faced. Slices of Buffalo Mozzarella, tomatoes, Italian basil, drizzle of olive oil and Balsamic vinegar, and homemade Pesto spread on a sourdough toast.",
    addOns: [],
  },
  {
    itemName: "Turkey BLT & E",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$10.90",
    description:
      "Turkey bacon, Cheddar cheese slice, egg over-easy, Romaine lettuce, sliced tomatoes, sweet chili sauce, and white toast slices.",
    addOns: [
      {
        addOnName: "Avocado",
        price: "+$2.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Katsu-Sando",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$9.90",
    description:
      "6oz Panko-breaded chicken cutlet, homemade Tonkatsu sauce, cabbage, and white toast slices.",
    addOns: [],
  },
  {
    itemName: "Turkey Bacon, Brie, Mushroom & Spinach",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$15.90",
    description:
      "Double turkey bacon, melted Brie, sautéed mushrooms, wilted baby spinach, and sourdough toast slices.",
    addOns: [],
  },
  {
    itemName: "Chicken Burger",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$11.90",
    description:
      "8oz grilled chicken, Cheddar cheese slice, lettuce, and tomato between fluffy brioche buns buttered with mayonnaise. Served with fries.",
    addOns: [
      {
        addOnName: "Egg Over-Easy",
        price: "+$1.00",
        showPlusSign: true,
      },
      {
        addOnName: "Upgrade to Truffle or Curly Fries",
        price: "+$2.00",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Signature Angus Beef Burger",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$18.50",
    description:
      "A hefty and juicy 8oz Angus beef patty, Cheddar cheese slice, Romaine lettuce, and sliced tomato between fluffy brioche buns buttered with our special house sauce. Served medium by default with fries. Minimum wait time of 15 minutes to allow the meat to rest sufficiently.",
    addOns: [
      {
        addOnName: "Egg Over-Easy",
        price: "+$1.00",
        showPlusSign: true,
      },
      {
        addOnName: "Upgrade to Truffle or Curly Fries",
        price: "+$2.00",
        showPlusSign: true,
      },
    ],
  },
];

export const mainsMenu = [
  {
    itemName: "Pan-Seared Chicken Chop",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$8.90",
    description:
      "8oz grilled chicken served with roasted potatoes and market greens.",
    addOns: [
      {
        addOnName: "Double Up Chicken",
        price: "+$5.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Fish & Chips",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$8.90",
    description:
      "John Dory fish fried in a light and airy Tempura batter. Served with fries and coleslaw.",
    addOns: [
      {
        addOnName: "Upsize Fish (1.5 portions)",
        price: "+$2.50",
        showPlusSign: true,
      },
    ],
  },
  {
    itemName: "Chicken Parmigiana",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$15.90",
    description:
      "12oz crispy breaded chicken cutlet covered in our homemade tomato sauce and melted Mozzarella. Served with roasted potatoes and salad greens. Minimum wait time of 15 minutes.",
    addOns: [],
  },
  {
    itemName: "Pan Seared Seabass",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$14.90",
    description:
      "7oz local seabass fillet pan-seared and served with roasted potatoes and market greens.",
    addOns: [],
  },
  {
    itemName: "Steak-Frites",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$19.90",
    description:
      "7oz Picahna (rump cap) seared medium rare by default. Served with black pepper sauce, and a double portion of shoestring fries. Minimum wait time of 15 minutes.",
    addOns: [],
  },
];

export const beverageMenu = [
  {
    itemName: "Espresso-Based Coffee",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "Click to see Options",
    description: "100% Specialty-Grade Arabica Blend.",
    addOns: [
      {
        addOnName: "Espresso",
        price: "$2.80 / -",
      },
      {
        addOnName: "Caffè Americano, Long Black",
        price: "$3.40 / $4.40",
      },
      {
        addOnName: "Caffè Macchiato",
        price: "$3.00 / -",
      },
      {
        addOnName: "Cortardo",
        price: "$3.20 / -",
      },
      {
        addOnName: "Piccolo Caffè Latte",
        price: "$3.80 / -",
      },
      {
        addOnName: "Cappuccino, Flat White",
        price: "$4.00 / $5.00",
      },
      {
        addOnName: "Caffè Latte",
        price: "$4.20 / $5.20",
      },
      {
        addOnName: "Flavoured Caffè Latte (Vanilla | Caramel | Hazelnut)",
        price: "$4.80 / $5.80",
      },
      {
        addOnName: "Caffè Mocha",
        price: "$5.20 / $6.20",
      },
      {
        addOnName: "Extra Shot | Dirty",
        price: "+$1.00",
      },
      {
        addOnName: "Soy Milk Oat Milk",
        price: "+$1.00",
      },
      {
        addOnName: "Upsize (+20%)",
        price: "+$1.20",
      },
    ],
  },
  {
    itemName: "Not Coffee",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "Click to see Options",
    description: "Hot/Iced",
    addOns: [
      {
        addOnName: "Chocolate",
        price: "$5.00/$6.00",
      },
      {
        addOnName: "Sweet, rich dark chocolate. Gentle acidity, heavy body.",
        price: null,
      },
      {
        addOnName: "Strawberry Latte",
        price: "$5.00/$6.00",
      },
      {
        addOnName: "Chai Latte",
        price: "$5.50/$6.50",
      },
      {
        addOnName: "Hōjicha Latte",
        price: "$5.50/$6.50",
      },
      {
        addOnName: "Dark Roast Hōjicha from Kagoshima",
        price: null,
      },
      {
        addOnName: "Matcha",
        price: "$4.50/$5.50",
      },
      {
        addOnName: "Superior Ceremonial Blend from Uji, Kyoto",
        price: null,
      },
      {
        addOnName: "Matcha Latte",
        price: "$6.50/$7.50",
      },
      {
        addOnName: "Strawberry Matcha Latte",
        price: "-/$8.50",
      },
    ],
  },

  {
    itemName: "Batch Brew Filter Coffee",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$3.40 / $4.40",
    description:
      "Hot/Iced. 100% Arabica Single Origin. Bright, floral, fruity. Seasonal availability.",
    addOns: [],
  },
  {
    itemName: "Hot Brewed Teas",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$3.00",
    description: null,
    addOns: [
      {
        addOnName: "English Breakfast",
        price: null,
      },
      {
        addOnName: "Earl Grey",
        price: null,
      },
      {
        addOnName: "Jasmine Green Tea",
        price: null,
      },
      {
        addOnName: "Chamomile",
        price: null,
      },
      {
        addOnName: "Perfect Peppermint",
        price: null,
      },
      {
        addOnName: "Lemongrass, Ginger & Citrus",
        price: null,
      },
      {
        addOnName: "Super Berries",
        price: null,
      },
    ],
  },
  {
    itemName: "Probiotic Cold Brew Tea",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: null,
    description: "by Curated Culture",
    addOns: [
      {
        addOnName: "Lychee Rose",
        price: "$4.40",
      },
      {
        addOnName: "Acai Grapefruit",
        price: "$4.40",
      },
    ],
  },
  {
    itemName: "Soft Drinks",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: null,
    description: null,
    addOns: [
      {
        addOnName: "Snapple",
        price: "$3.00",
      },
      {
        addOnName: "Perrier Sparkling Water",
        price: "$3.00",
      },
      {
        addOnName: "Coca-Cola, Coke-Light, Coke Zero",
        price: "$1.70",
      },
      {
        addOnName: "Sprite",
        price: "$1.70",
      },
      {
        addOnName: "Cocomax 100% Coconut Bottled Water",
        price: "$3.00",
      },
      {
        addOnName: "Bottled Drinking Water",
        price: "$1.00",
      },
      {
        addOnName: "A&W Root Beer",
        price: "$2.00",
      },
      {
        addOnName: "Water (refillable)",
        price: "$1.00",
      },
      {
        addOnName: "Schweppes Ginger Ale, Tonic Water",
        price: "$2.00",
      },
    ],
  },
  {
    itemName: "Local Craft Beers on Tap",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: null,
    description: "by Brewlander",
    addOns: [
      {
        addOnName: "Freedom | Lager, 4.7% ABV",
        price: "$6.50/$10.00",
      },
      {
        addOnName: "Profile: Light, Crisp, Floral Notes, Crushable",
        price: null,
      },
      {
        addOnName: "Love Wild IPA, 6.0% ABV",
        price: "$8.00/$12.00",
      },
      {
        addOnName: "Profile: Tropical Fruits, Balanced, Hoppy",
        price: null,
      },
    ],
  },
  {
    itemName: "Homemade Iced Teas",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$3.00",
    description: null,
    addOns: [
      {
        addOnName: "Flavoured Iced Lemon Tea",
        price: null,
      },
      {
        addOnName: "Mango | Passionfruit | Peach | Wildberry",
        price: null,
      },
      {
        addOnName: "Thai Milk Tea",
        price: null,
      },
      {
        addOnName: "Thai Green Milk Tea",
        price: null,
      },
    ],
  },
  {
    itemName: "Freshly Squeezed Orange Juice",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$2.50",
    description: null,
    addOns: [],
  },
];
