//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj.getTimestamp());
const dbName = 'TodoApp';

var user = {name: 'jing', age: 51};

var {name} = user;
console.log(name);
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    
    if(err) {
        return console.log('Unable to connect to MongoDB server');

    }
    console.log('Connected to MongoDB server');
    //console.log(db);
     
    // client.db(dbName).collection('Todos').insertOne({
    //     text: 'Learn Express',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert to collection', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // client.db(dbName).collection('Users').insertOne({
    //     name: 'Jing',
    //     age: 51,
    //     location: 'Melbourne'
    // }, (err, result) =>{
    //     if(err){
    //         return  console.log('Unable to insert into users', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined,2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
     

    client.close();
});