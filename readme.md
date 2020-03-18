# Getting started

To get the Node server running locally:

- Clone this repo
- npm install to install all required dependencies
- Install MongoDB Community Edition (instructions) and run it by executing mongod
- npm run start the local server

# Application Structure

- server.js - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.

- config/ - This folder contains configuration for mongodb.
- routes/ - This folder contains the route definitions for our API.
- models/ - This folder contains the schema definitions for our Mongoose models.

# API

## API to add products to the database

URL [POST]: /products/create

```
//request
product: {
  name: laptop,
  quantity: 10
}

//response
data: {
  product: {
    name: laptop,
    quantity: 10
  }
}
```

## API to list products

URL [GET] : /products

```
data: {
  products: [
   {
     id: 1,
     name: laptop
     quantity: 10
   },
   {
     id: 2,
     name: camera
     quantity: 5
   },
   {
     id: 3,
     name: smartwatch
     quantity: 8
   },
  ]

}
```

## API to delete products

URL [DELETE] : /products/:id

```
// response
data: {
  message: “product deleted”
}
```

## API to update quantity of a product (can be incremented or decremented)

URL [POST] : /products/:id/update_quantity/?number=10

```
// response
data: {
  product: {
     id: 1,
     name: laptop,
     quantity: 20
  },

  message: updated successfully
}
```
