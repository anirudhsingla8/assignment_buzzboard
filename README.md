# assignment_buzzboard
This is the basic CRUD application used to create,delete,read and update orders

to use this project first clone the repo and then do the following steps:

1. npm install
2. npm run start

this will start the nodejs server on localhost 3000 bydefault if no port id is specified

API_Routes

1. Create API - POST - http://localhost:3000/orders/create
   JSON BODY
   {
    "order_id":3,
    "item_name":"test2",
    "cost":100,
    "order_date":"2019-05-05",
    "delivery_date":"2018-05-31"
   }
   OUTPUT:- Successfully created

2. Update Date API - POST - http://localhost:3000/orders/update
   JSON BODY
   {
    "order_id":1,
    "delivery_date":"2022-01-01"
   }
   OUTPUT:- succesfully updated date

3. List API - POST - http://localhost:3000/orders/list
  JSON BODY
  {
    "delivery_date":"2022-01-21"
  }
  OUTPUT:-
  [
    {
        "_id": "616711df1bf359cb8072df3e",
        "order_id": 1,
        "item_name": "test",
        "cost": 100,
        "order_date": "2019-05-05T00:00:00.000Z",
        "delivery_date": "2022-01-01T00:00:00.000Z",
        "__v": 0
    }
  ]
 
4. Delete API - DELETE - http://localhost:3000/orders/delete/2
   output:- successfully removed

5. Search API - GET - http://localhost:3000/orders/search/1
   output:- 
   {
    "_id": "616711df1bf359cb8072df3e",
    "order_id": 1,
    "item_name": "test",
    "cost": 100,
    "order_date": "2019-05-05T00:00:00.000Z",
    "delivery_date": "2022-01-01T00:00:00.000Z",
    "__v": 0
  }
  
  
  
You can also import the POSTMAN collection from the below link:-
https://www.getpostman.com/collections/39f1c419883fdd70f3d4

