const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/profiles', express.static(path.join(__dirname, 'profiles')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


require('dotenv').config();

let database;

MongoClient.connect(process.env.DB_CONN, (err, db) => {
  console.log('connected to mongodb...');

  app.listen(3000, () => {
    database = db;
    console.log('listening on port 3000...');
  })
});


app.get('/api/contacts', (req, res) => {
  const contactsCollection = database.collection('contacts');

  contactsCollection.find({}).toArray((err, docs) => {
    return res.json(docs);
  });
});

// app.get('*', (req, res) => {
//   return res.sendFile(path.join(__dirname, 'public/index.html'));
// });

app.post('/api/contacts', (req, res) => {
  const user = req.body;
  const contactsCollection = database.collection('contacts');

  contactsCollection.insertOne(user, (err, r) => {
    if (err) {
      return res.status(500).json({ error: 'Error inserting new record.' });
    }

    console.log(r);
    const newRecord = r.ops[0];
    return res.status(201).json(newRecord);
  })
});



app.get('/api/gusers', (req, res) => {
  const gusersCollection = database.collection('gusers');

  gusersCollection.find({}).toArray((err, docs) => {
    return res.json(docs);
  });
});

