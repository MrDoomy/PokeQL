# Back-End

## Explanation

Web Server made with **ExpressJS** implementing **Mongoose** for access to the database, and **GraphQL** for APIs.

## Process

Install dependencies:

```
npm install
```

Launch the Back-End part as a Web Server:

```
npm run start:service
```

Compile the Back-End part:

```
npm run build
```

### Note

_This application depends on a NoSQL database. Install MongoDB and run the following commands in a new terminal before launching the Web Server:_

```
mkdir DataBase
mongo --dbpath DataBase
```

## Docs

- **ExpressJS**: Fast, unopinionated, minimalist Web Framework for NodeJS
  - [http://expressjs.com/](http://expressjs.com/)

- **Mongoose**: Elegant MongoDB object modeling for NodeJS
  - [https://mongoosejs.com/](https://mongoosejs.com/)

- **GraphQL**: A query language for your API
  - [https://graphql.org/](https://graphql.org/)
