const express = require('express');
const app = express();
const grahpqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get('/', (req, res) => console.log('HI'));

app.use('/graphql', grahpqlHTTP({
  schema,
  graphql: true,
}))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}.`));