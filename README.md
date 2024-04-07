# eCommerce Shop

![demo of project](demo.gif)

## Hosting

https://eclectic-baklava-859501.netlify.app

## MVP

- Home Page with a grid of products, carousel of featured products and product pages with id param
- Firestore Database containing info about quantity, variants etc

## Features

- Functional cart with Firestorm-specific logic
- Display carousel
- Unique product pages

## Logic & Design Approach
- I put a lot of thought into how I wanted my selected variants to be added to the Cart Collection (from the Stock Collection)
- I opted for storing the variant data in Objects in the Stock Collection that is then used (depending on the selection) to create a unique cart object (in the Cart Collection) that can then also be deleted back into the initial object in the Stock Collection.
- I’ve used Firestore specific logic to enhance readability e.g. the where keyword
- Going for a minimalistic design, trying to highlight the unique pieces - still needs further updates

## Product Configuration Example

src/services/cart-logic.js and src/services/stock.js for my exact implementation

### STOCK COLLECTION

Below is an example of the product configuration for the "Shirley Lehenga" in the Stock Collection. This configuration includes details such as product ID, name, price, availability of sizes, and variant information. This info is parsed into a form on the unique product page (under the Featured tab, click "More Info" on any of the articles to see an example of this).

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
  "itemColor": "red",
  "itemImage": "https://rahulmishra.in/cdn/shop/products/47_db262dc0-a88d-4e17-8fb0-86f63d93f149_1800x1800.jpg?v=1663747639",
  "itemName": "Shirley Lehenga",
  "itemPrice": "$1200",
  "itemSize": "medium",
  "quantity": 1
}
```

## Problems

- Home needs to use a reusable Carousel 
- Need to add Product bios


## CHANGE LOG

### April 6th
- Updated the Carousel Component used on the Home Page. It was originally broken using a simplistic usage of useRef and scrollTo (similar to the FeaturedCarousel). I have changed it to be dependent on a currentIndex state and CSS transform. It is also infinitely scrolling now due to the modulo usage in the scroll logic.
- Started the styling upgrades rollout

TMO:
- fix the placement of the favourited star
- fix the Item Page and fix the Cart Page Styling
- fix the functionality of the favourited button on the Item Page

### April 7th
- Featured Carousel made some styling changes to.
- For the time being and this overall styling update, I'm going to leave the older implementation of this Carousel that uses useRef and js container.scrollTo
- In the next update, I will make the Carousel Component used on the home page, reusable and replace the FeaturedCarousel usage with this

TO DO:
- fix the Item Page and fix the Cart Page Styling
- fix the functionality of the favourited button on the Item Page
- fix how the Home page is centred

