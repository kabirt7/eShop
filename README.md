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
- Need to add Product bios

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

### STOCK COLLECTION

Below is an example of the product configuration for the "Shirley Lehenga" in the Stock Collection. This configuration includes details such as product ID, name, price, availability of sizes, and variant information.

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

### CART COLLECTION

When the stock item is added to the cart. It first checks to see an item with the same name, color and size is already in the cart. If it is, it will simply incremenent the amount of this item in the cart (while decrementing the item quantity in the Stock Collection). If a new cart item is needed, an item with a unique ID is generated. Subsequent logic allows the cart item to push the item back into the Stock Collection if it's removed from the cart. Below is an example of a unique Cart Collection item.

```json
{
  "id": "CDi7PNf1NkhwBVriZpUl",
  "itemColor": "white",
  "itemImage": "https://rahulmishra.in/cdn/shop/products/47_db262dc0-a88d-4e17-8fb0-86f63d93f149_1800x1800.jpg?v=1663747639",
  "itemName": "Embroidered Trench Coat",
  "itemPrice": "$1200",
  "itemSize": "medium",
  "quantity": 1
}
```

## Problems
- Did not expect the carousel to give me so much grief
- The process of adding and deleting to the cart was also quite complicated 

