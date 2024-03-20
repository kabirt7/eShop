# eCommerce Shop

## Hosting

https://eclectic-baklava-859501.netlify.app

## MVP

- Home Page with a grid of products, carousel of featured products and product pages with id param
- Firestore Database containing info about quantity, variants etc

## Known Problems

- new Carousel component is needed. Current implementation is broken. I have a better implementation in mind that will be live very soon. Also, scrolling doesn't feel smooth.
- Overall styling upgrade. Doesn’t look sleek at all. Colors I'm happy with though.
- Favourite Button on cart page submitting. Need fix and add this functionality to the product page

## Features

- Functional cart with Firestorm-specific logic
- Display carousel
- Unique product pages

## Logic & Design Approach
- I put a lot of thought into how I wanted my selected variants to be added to the Cart Collection (from the Stock Collection)
- I opted for storing the variant data in Objects in the Stock Collection that is then used (depending on the selection) to create a unique cart object (in the Cart Collection) that can then also be deleted back into the initial object in the Stock Collection.
- the Object looks as follows: 
- I’ve used Firestore specific logic to enhance readability e.g. the where keyword
- Going for a minimalistic design, trying to highlight the unique pieces - still needs further updates

## Product Configuration Example

Below is an example of the product configuration for the "Shirley Lehenga". This configuration includes details such as product ID, name, price, availability of sizes, and variant information. This JSON structure can be used to configure products in our inventory system.

```json
{
  "id": "AegVY3N3DI2oCZ3jrV3a",
  "name": "Shirley Lehenga",
  "price": "$1850",
  "favourited": false,
  "featured": true,
  "imageURL": "https://rahulmishra.in/cdn/shop/products/59_0a3f7c98-167f-48fe-a6c1-96cb740a4ab3_1800x1800.jpg?v=1663655695",
  "sizes": ["small", "large"],
  "variants": {
    "brown": {
      "large": 5,
      "small": 5
    },
    "peach": {
      "large": 5,
      "small": 5
    }
  }
}
```

## Problems
- Did not expect the carousel to give me so much grief
- The process of adding and deleting to the cart was also quite complicated 

