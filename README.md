## eCommerce Shop

# HOSTING

https://eclectic-baklava-859501.netlify.app/featured

# MVP

* Home Page with a grid of products, carousel of featured products and product pages with id param
* Firestore Database containing info about quantity, variants etc

# TO FIX

- new Carousel component is needed. Current approach is buggy and inefficient 
- Overall styling upgrade. Doesn’t look sleek enough
- Favourite Button on cart page submitting. Need fix and add this functionality to the product page

# FEATURES

* Functional cart with Firestorm-specific logic
* Display carousel
* Unique product pages

# DESIGN GOALS
* I put a lot of thought into how I wanted my selected variants to be added to the cart
* I opted for storing the variant data in objects in a stock collection that is then used (depending on the selection) to create a unique cart object that can then also be deleted back into the initial object
* I’ve used Firestore specific logic to enhance readability e.g. the where keyword
* Going for a minimalistic design, trying to highlight the unique pieces - still needs further updates

# PROBLEMS
* Did not expect the carousel to give me so much grief
* I have a better implementation in mind that will be live very soon
* The process of adding and deleting to the cart was also quite complicated 

