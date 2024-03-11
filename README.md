## eCommerce Shop

# HOSTING

https://eclectic-baklava-859501.netlify.app

# MVP

- Home Page with a grid of products, carousel of featured products and product pages with id param
- Firestore Database containing info about quantity, variants etc

# Known Problems

- new Carousel component is needed. Current implementation is broken. I have a better implementation in mind that will be live very soon. Also, scrolling doesn't feel smooth.
- Overall styling upgrade. Doesn’t look sleek at all. Colors I'm happy with though.
- Favourite Button on cart page submitting. Need fix and add this functionality to the product page

# Features

- Functional cart with Firestorm-specific logic
- Display carousel
- Unique product pages

# Design Goals
- I put a lot of thought into how I wanted my selected variants to be added to the cart
- I opted for storing the variant data in Objects in a Stock Collection that is then used (depending on the selection) to create a unique cart object (in the Cart Collection) that can then also be deleted back into the initial object in the Stock Collection
- I’ve used Firestore specific logic to enhance readability e.g. the where keyword
- Going for a minimalistic design, trying to highlight the unique pieces - still needs further updates

# Problems
- Did not expect the carousel to give me so much grief
- The process of adding and deleting to the cart was also quite complicated 

