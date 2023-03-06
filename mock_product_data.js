const products = [
  {
    name: "Doritos Nacho Cheese (3.18 oz.)",
    price: 2,
    description:
      "Doritos Nacho Cheese is a classic snack that has been enjoyed by people of all ages for many years. These corn tortilla chips are coated in a savory blend of cheese and spices, creating a bold and flavorful taste that is perfect for satisfying your cravings. The crunchy texture and delicious flavor of Doritos Nacho Cheese make them a must-try snack for any chip lover.",
    imgUrl:
      "https://products3.imgix.drizly.com/ci-doritos-nacho-cheese-91d8cf9f375a6fd1.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Doritos Cool Ranch (3.18 oz.)",
    price: 2,
    description:
      "Doritos Cool Ranch is another popular flavor of Doritos that is loved by many. These corn tortilla chips are seasoned with a blend of cool and tangy ranch flavors, creating a delicious and refreshing taste that is perfect for snacking on the go. The crispy texture and bold flavor of Doritos Cool Ranch make them a perfect choice for anyone who loves a little bit of zest in their snacks.",
    imgUrl:
      "https://products0.imgix.drizly.com/ci-doritos-cool-ranch-0c52403608a7acec.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "M&M's Milk Chocolate (1.69 oz)",
    price: 1,
    description:
      "M&M's milk chocolate candy is a delicious and classic treat loved by people of all ages. These bite-sized candies feature a crispy candy shell surrounding a creamy milk chocolate center, making them the perfect snack for any occasion. Enjoy them by the handful, use them to decorate cakes and desserts, or simply savor each one slowly to make them last longer. M&M's milk chocolate candy is a must-have for any candy lover and a staple for any sweet tooth.",
    imgUrl:
      "https://products0.imgix.drizly.com/ci-m-ms-milk-chocolate-candy-6eef47b9c0eccda3.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "M&M's Milk Chocolate w/ Peanuts (1.74 oz)",
    price: 1,
    description:
      "M&M's Milk Chocolate with Peanuts is a delightful twist on the classic M&M's candy. These delicious treats feature a crispy candy shell and a creamy milk chocolate center, with the added crunch of roasted peanuts. The combination of sweet and salty flavors creates a unique and irresistible taste that is sure to satisfy any craving. M&M's Milk Chocolate with Peanuts are perfect for snacking on the go, sharing with friends and family, or using as a topping for ice cream and other desserts. With their vibrant colors and unmistakable taste, M&M's Milk Chocolate with Peanuts are a fun and tasty addition to any candy collection.",
    imgUrl:
      "https://products3.imgix.drizly.com/ci-m-ms-peanut-3bfbbeefcaa18f29.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Pringles Original (2.36 oz)",
    price: 2,
    description:
      "Pringles Original is a popular and delicious potato-based snack that is loved by people all over the world. These thin and crispy chips are made from real potatoes and have a unique shape that is perfect for dipping or stacking. The original flavor of Pringles is a classic and timeless taste that is both savory and satisfying. Enjoy them on their own as a snack, pair them with your favorite dip, or serve them at your next party. With their convenient canister packaging, Pringles Original is a great snack option for anyone on the go or looking for a quick and tasty treat.",
    imgUrl:
      "https://products0.imgix.drizly.com/ci-pringles-original-4d7f52d1c6bdf997.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Pringles Sour Cream & Onion (2.36 oz)",
    price: 2,
    description:
      "Pringles Sour Cream & Onion is a tasty twist on the classic Pringles potato-based snack. These thin and crispy chips are made from real potatoes and have a unique shape that is perfect for dipping or stacking. The sour cream and onion flavor is a savory and tangy taste that is both delicious and addictive. Enjoy them on their own as a snack, pair them with your favorite dip, or serve them at your next party. With their iconic canister packaging, Pringles Sour Cream & Onion is a convenient and flavorful snack option that is perfect for any occasion.",
    imgUrl:
      "https://products2.imgix.drizly.com/ci-pringles-sour-cream-onion-c1bc3c83fe27111b.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Cheetos Crunchy (3.5 oz)",
    price: 2,
    description:
      "Cheetos Crunchy is a popular and delicious snack loved by people of all ages. These crunchy cheese-flavored puffs are made from cornmeal and other ingredients that create a unique texture and taste. The cheesy flavor is bold and savory, making it a perfect snack for any occasion. Enjoy them on their own as a quick snack or pair them with your favorite dip. Cheetos Crunchy is available in convenient bags, making them a great snack option for on-the-go or for sharing with friends and family.",
    imgUrl:
      "https://products2.imgix.drizly.com/ci-cheetos-crunchy-a5b7f37ffe8606f2.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Snickers (1.86 oz)",
    price: 1,
    description:
      "Snickers is a delicious and satisfying candy bar that has been a favorite of candy lovers for generations. This iconic candy bar is made with layers of roasted peanuts, nougat, caramel, and milk chocolate, creating a perfect balance of sweet and salty flavors. Snickers is a great snack for anytime hunger strikes, whether you need a quick pick-me-up at work or a sweet treat after a workout. It's also a popular candy to share with friends and family or to use as a topping for ice cream and other desserts. With its recognizable brown packaging and satisfying taste, Snickers is a candy bar that everyone loves.",
    imgUrl:
      "https://products3.imgix.drizly.com/ci-snickers-bar-bcfd9ff56f5db9fa.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Haribo Goldbears Gummy Bears (5.0 oz)",
    price: 2,
    description:
      "Haribo Goldbears Gummy Bears are a beloved classic candy that has been enjoyed by people of all ages for decades. These soft and chewy gummy bears come in a variety of fruity flavors, including strawberry, orange, lemon, pineapple, and raspberry. The bright and colorful candies are perfect for snacking on the go, sharing with friends and family, or using as a topping for ice cream and other desserts. Haribo Goldbears Gummy Bears are also gluten-free, making them a great snack option for those with dietary restrictions. With their iconic packaging and irresistible taste, Haribo Goldbears Gummy Bears are a must-try candy for anyone with a sweet tooth.",
    imgUrl:
      "https://products1.imgix.drizly.com/ci-haribo-gummi-gold-bears-06671b2411127e18.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Takis Fuego Chili & Lime (4.0 oz)",
    price: 3,
    description:
      "Takis Fuego Chili & Lime are a popular and spicy snack loved by people who enjoy a bold and tangy flavor. These rolled corn tortilla chips are coated in a fiery chili and lime seasoning, creating a unique and flavorful snack. The intense heat and tangy flavor of Takis Fuego Chili & Lime make it a perfect snack for anyone who loves a little spice in their life. Enjoy them on their own as a quick snack or pair them with your favorite dip. Takis Fuego Chili & Lime is available in convenient bags, making them a great snack option for on-the-go or for sharing with friends and family. Overall, Takis Fuego Chili & Lime is a bold and exciting snack that is not for the faint of heart.",
    imgUrl:
      "https://products1.imgix.drizly.com/ci-takis-fuego-chili-lime-15d40f46387e725e.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Tostitos Scoops (10.0 oz)",
    price: 6,
    description:
      "Tostitos Scoops are a popular and versatile snack loved by people of all ages. These triangular-shaped corn chips are designed with a unique scoop-like shape that makes them perfect for dipping. The chips are made from corn and other ingredients, creating a crispy and delicious taste that is perfect for pairing with your favorite salsa, guacamole, or dip. Tostitos Scoops are also great for making nachos or for adding a crunch to salads and other dishes. With their recognizable yellow packaging and delicious taste, Tostitos Scoops are a must-have snack for any occasion.",
    imgUrl:
      "https://products3.imgix.drizly.com/ci-tostitos-scoops-4840e01547e8135e.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Tostitos Salsa Con Queso (15.0 oz)",
    price: 5,
    description:
      "Tostitos Salsa Con Queso is a delicious and creamy dip that combines spicy salsa with smooth melted cheese. This dip is perfect for pairing with Tostitos Scoops or other chips for a tasty snack. The creamy texture and spicy flavor of Tostitos Salsa Con Queso make it a popular dip for parties and gatherings, or for a quick snack at home.",
    imgUrl:
      "https://products2.imgix.drizly.com/ci-tostitos-salsa-con-queso-3c83b518655cddfd.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Tostitos Medium Salsa (15.5 oz)",
    price: 5,
    description:
      "Tostitos Medium Salsa is a classic and flavorful dip that is perfect for anyone who enjoys a little spice. This salsa is made with diced tomatoes, onions, and peppers, creating a chunky and delicious texture that is perfect for dipping with Tostitos Scoops or other chips. The medium level of spiciness in Tostitos Medium Salsa is just right for those who enjoy a little kick in their salsa without it being too hot. Overall, Tostitos Medium Salsa is a delicious and versatile dip that is perfect for any occasion.",
    imgUrl:
      "https://products1.imgix.drizly.com/ci-tostitos-medium-salsa-19c85535324ce148.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Jack Link's Original Jerky (2.85 oz)",
    price: 10,
    description:
      "Jack Link's Original Jerky is a classic and flavorful beef jerky that has been a favorite snack for many years. Made from 100% premium beef, this jerky is marinated with a blend of savory spices and slow-cooked to perfection. The result is a tender and delicious jerky that is perfect for snacking on the go or for adding protein to your diet. With its iconic packaging and delicious taste, Jack Link's Original Jerky is a must-try snack for any beef jerky lover.",
    imgUrl:
      "https://products0.imgix.drizly.com/ci-jack-link-original-21f145714733d227.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Jack Link's Teriyaki Jerky (2.85 oz)",
    price: 10,
    description:
      "Jack Link's Teriyaki Jerky is a flavorful and sweet beef jerky that has a unique taste that is perfect for those who enjoy a little sweetness in their jerky. Made from 100% premium beef, this jerky is marinated with a blend of soy sauce, ginger, and other spices, creating a delicious and savory flavor with a touch of sweetness. The result is a tender and delicious jerky that is perfect for snacking on the go or for adding protein to your diet. With its recognizable packaging and unique taste, Jack Link's Teriyaki Jerky is a delicious snack that is perfect for any occasion.",
    imgUrl:
      "https://products1.imgix.drizly.com/ci-jack-link-teriyaki-a732e61cb51f831a.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Ferrero Rocher Fine Hazelnut Milk Chocolate (3 pack)",
    price: 2,
    description:
      "Ferrero Rocher Fine Hazelnut Milk Chocolate is a luxurious and indulgent chocolate that is perfect for any special occasion. This chocolate is made with a whole roasted hazelnut encased in a creamy milk chocolate filling, surrounded by a crisp wafer shell and coated in finely chopped hazelnuts. The result is a delicious and crunchy chocolate that is perfect for gifting or for treating yourself.",
    imgUrl:
      "https://products3.imgix.drizly.com/ci-ferrero-rocher-fine-hazelnut-milk-chocolate-5dfedbcaa769d72f.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Skittles (2.17 oz)",
    price: 1,
    description:
      "Skittles are a colorful and fruity candy that has been a favorite for many years. These small, chewy candies come in a variety of fruit flavors, including strawberry, orange, grape, lemon, and green apple. The bright colors and delicious taste of Skittles make them perfect for snacking on the go or for sharing with friends and family.",
    imgUrl:
      "https://products3.imgix.drizly.com/ci-skittles-73a219348f5db945.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Cheez-It Original (5.0 oz)",
    price: 2,
    description:
      "Cheez-It Original is a classic and crunchy snack loved by people of all ages. These small, square-shaped crackers are made with real cheese, creating a delicious and savory flavor that is perfect for snacking on the go or for adding to your favorite recipes. The crispy texture and cheesy taste of Cheez-It Original make them a must-try snack for any cheese lover.",
    imgUrl:
      "https://products3.imgix.drizly.com/ci-cheez-it-regular-cbce1f3dd4d631fa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Toblerone Milk Chocolate (3.52 oz)",
    price: 3,
    description:
      "Toblerone Milk Chocolate is a rich and creamy chocolate that has a unique triangular shape, making it perfect for sharing or for indulging yourself. Made with smooth milk chocolate and crunchy honey and almond nougat, Toblerone Milk Chocolate has a delicious taste and texture that is perfect for satisfying your sweet tooth.",
    imgUrl:
      "https://products0.imgix.drizly.com/ci-toblerone-milk-chocolate-eb61e7d1787d9111.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Starburst Original (2.07 oz)",
    price: 1,
    description:
      "Starburst Original is a chewy and fruity candy that has been a favorite for many years. These small, square-shaped candies come in a variety of fruit flavors, including strawberry, orange, cherry, and lemon. The bright colors and delicious taste of Starburst Original make them perfect for snacking on the go or for sharing with friends and family.",
    imgUrl:
      "https://products3.imgix.drizly.com/ci-starburst-original-61318fcddf30a0fd.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Twix Original (2.0 oz)",
    price: 2,
    description:
      "Twix Original is a classic candy bar that has been a favorite for many years. This candy bar features a biscuit cookie topped with a layer of caramel, which is then coated in creamy milk chocolate. The result is a delicious and satisfying treat that is perfect for satisfying your sweet tooth.",
    imgUrl:
      "https://products0.imgix.drizly.com/ci-twix-candy-bar-original-998829a8fbc35001.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Hershey's Milk Chocolate (1.5 oz)",
    price: 2,
    description:
      "Hershey's Milk Chocolate is an iconic chocolate that has been enjoyed by people of all ages for over a century. This milk chocolate is made with simple ingredients, including milk, sugar, and cocoa, creating a smooth and creamy chocolate that is perfect for snacking on the go or for baking into your favorite desserts.",
    imgUrl:
      "https://products1.imgix.drizly.com/ci-hersheys-milk-chocolate-bar-3a5abb2e3be7a0be.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Ghirardelli Sea Salt (3.5 oz)",
    price: 4,
    description:
      "Ghirardelli Sea Salt is a delicious and decadent chocolate that has a unique flavor profile. This chocolate is made with smooth milk chocolate and infused with sea salt, creating a sweet and salty taste that is perfect for satisfying your cravings. The rich and creamy texture of Ghirardelli Sea Salt chocolate makes it perfect for indulging in a little bit of luxury.",
    imgUrl:
      "https://products0.imgix.drizly.com/ci-ghiradelli-sea-salt-bar-bbe0fdcbafd1d0a9.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Lindt Milk Chocolate Truffles (5.1 oz)",
    price: 6,
    description:
      "Lindt Milk Chocolate Truffles are a luxurious and indulgent chocolate that is perfect for any special occasion. These truffles are made with smooth milk chocolate and a creamy filling, creating a delicious and velvety texture that is perfect for indulging in a little bit of luxury. The iconic packaging and delicious taste of Lindt Milk Chocolate Truffles make them a must-try treat for any chocolate lover.",
    imgUrl:
      "https://products2.imgix.drizly.com/ci-lindt-milk-chocolate-truffles-b6f14d7791e31b0c.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Ben & Jerry's Americone Dream Pint (473.0 ml)",
    price: 7,
    description:
      "Ben & Jerry's Americone Dream Pint is a delicious and creamy ice cream that is made with vanilla ice cream, caramel swirls, and chocolate-covered waffle cone pieces. This flavor was created in partnership with comedian and television host Stephen Colbert and is a tribute to the American dream.",
    imgUrl:
      "https://products1.imgix.drizly.com/ci-ben-jerrys-americone-dream-pint-413ac9793ed3a04d.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Ben & Jerry's Strawberry Cheesecake Pint (473.0 ml)",
    price: 7,
    description:
      "Ben & Jerry's Strawberry Cheesecake Pint is a creamy and indulgent ice cream that is made with sweet cream ice cream, strawberry swirls, and chunks of real cheesecake. This flavor is perfect for anyone who loves the combination of sweet and tangy flavors and is a must-try for cheesecake lovers.",
    imgUrl:
      "https://products3.imgix.drizly.com/ci-ben-jerrys-strawberry-cheesecake-pint-d1d57a773caca3e6.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Ben & Jerry's Tonight Dough Pint (473.0 ml)",
    price: 7,
    description:
      "Ben & Jerry's Tonight Dough Pint is a decadent and delicious ice cream that is made with chocolate and caramel ice creams, chocolate chip cookie dough, peanut butter cookie dough, and a crunchy chocolate cookie swirl. This flavor was created in collaboration with late-night talk show host Jimmy Fallon and is perfect for indulging in a little bit of luxury.",
    imgUrl:
      "https://products1.imgix.drizly.com/ci-ben-jerrys-tonight-dough-pint-09923075bbf6d1f7.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Coca Cola (20.0 oz)",
    price: 2,
    description:
      "Coca-Cola is a carbonated soft drink that has been enjoyed by people around the world for over a century. This iconic soda is made with a unique blend of high-quality ingredients, including caffeine and natural flavors, creating a refreshing and crisp taste that is perfect for quenching your thirst. The bold and classic flavor of Coca-Cola has made it a beloved beverage for generations and a popular choice for enjoying with meals or as a refreshing pick-me-up.",
    imgUrl:
      "https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/home/coca-cola-original-20oz.png",
  },
  {
    name: "Sprite (20.0 oz)",
    price: 2,
    description:
      "Sprite is a clear, lemon-lime flavored soda that is crisp, refreshing, and perfect for quenching your thirst. With its light and bubbly texture, Sprite is a popular choice for people who are looking for a refreshing and flavorful alternative to traditional cola drinks.",
    imgUrl:
      "https://products1.imgix.drizly.com/ci-sprite-8df7a8951a7fea58.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Pepsi (20.0 oz)",
    price: 2,
    description:
      "Pepsi is a carbonated soft drink that has been enjoyed by people around the world for over a century. With its bold and crisp flavor, Pepsi is a perfect choice for anyone who loves a refreshing and satisfying soda.",
    imgUrl:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00012000005312/66216a85b7db7b6588a3a26f1e8e26cf_large.png&width=512&type=webp&quality=90",
  },
  {
    name: "7UP (20.0 oz)",
    price: 2,
    description:
      "7UP is a lemon-lime flavored soda that is known for its refreshing and crisp taste. With its light and bubbly texture, 7UP is a popular choice for people who are looking for a refreshing and flavorful alternative to traditional cola drinks.",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_f5564c2b-15c7-4f74-b4c5-512c14f27342?wid=488&hei=488&fmt=pjpeg",
  },
  {
    name: "Seagram's Ginger Ale (20.0 oz)",
    price: 2,
    description:
      "Seagram's Ginger Ale is a carbonated soft drink that is made with a blend of high-quality ginger extracts, creating a bold and refreshing taste that is perfect for sipping on a hot day or after a meal. With its crisp and bubbly texture, Seagram's Ginger Ale is a popular choice for anyone who loves a delicious and flavorful beverage.",
    imgUrl:
      "https://products2.imgix.drizly.com/ci-seagrams-ginger-ale-0339a4d87e4fbc3a.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Schweppes Ginger Ale (20.0 oz)",
    price: 2,
    description:
      "Schweppes Ginger Ale is another popular brand of ginger ale that is known for its bold and refreshing taste. Made with high-quality ginger extracts and natural flavors, Schweppes Ginger Ale is a perfect choice for anyone who loves a delicious and satisfying soda.",
    imgUrl:
      "https://images.albertsons-media.com/is/image/ABS/960136480?$ng-ecom-pdp-mobile$&defaultImage=Not_Available",
  },
  {
    name: "Gatorade Lemon Lime (22.0 oz)",
    price: 3,
    description:
      "Gatorade Lemon Lime is a sports drink that is made with a unique blend of electrolytes and carbohydrates, creating a refreshing and energizing drink that is perfect for athletes and active individuals. With its crisp and refreshing taste, Gatorade Lemon Lime is a popular choice for people who are looking for a drink that will help them stay hydrated and energized throughout their day.",
    imgUrl:
      "https://products2.imgix.drizly.com/ci-gatorade-lemon-lime-d2545063f46d4c08.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Poland Spring Water (16.9 oz)",
    price: 1,
    description:
      "Poland Spring Water is a brand of natural spring water that is sourced from springs in Maine, USA. It is known for its crisp and refreshing taste, and is a popular choice for people who are looking for a healthy and hydrating beverage. Poland Spring Water is available in various sizes and can be enjoyed on its own or as a refreshing addition to a meal.",
    imgUrl:
      "https://products0.imgix.drizly.com/ci-poland-spring-water-0991e6a009d65b6a.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Red Bull (8.4 oz)",
    price: 3,
    description:
      "Red Bull is an energy drink that is known for its high caffeine content and energizing effects. It is a popular choice for people who need a boost of energy to get through their day, and is often consumed before or during physical activity. With its sweet and tangy flavor, Red Bull is a perfect choice for anyone who loves a refreshing and energizing beverage.",
    imgUrl:
      "https://products0.imgix.drizly.com/ci-red-bull-114ffea5e698c2d5.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
  {
    name: "Monster (16.0 oz)",
    price: 3,
    description:
      "Monster is another popular energy drink that is known for its bold and powerful taste. It is made with high levels of caffeine, taurine, and other energy-boosting ingredients, making it a perfect choice for people who need a quick and effective pick-me-up. With its sweet and refreshing flavor, Monster is a popular choice for anyone who loves a bold and flavorful beverage.",
    imgUrl:
      "https://products3.imgix.drizly.com/ci-monster-energy-drink-a44417a571bd8be7.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
  },
];

module.exports = products;
