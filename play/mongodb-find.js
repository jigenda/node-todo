//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
 
const dbName = 'TodoApp';

 
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    
    if(err) {
        return console.log('Unable to connect to MongoDB server');

    }
    // console.log('Connected to MongoDB server');
    // client.db(dbName).collection('Todos').find({
    //     _id: new ObjectID('5af00149ce1d6a58241a59ab')
    // }).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    client.db(dbName).collection('Todos').find({completed: false}).count().then((count) =>{
        console.log(`Todos count: ${count}`);
         
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });


    client.db(dbName).collection('Users').find().count().then((count)=>{
        console.log(`TOtal users: ${count}`);
    }, (err) => {
        console.log('Unable to get users count', err);
    });

    client.db(dbName).collection('Users').find({name:'Baba'}).toArray().then((docs) => {
        console.log('User:', docs);
        console.log(docs[0].age)
    }, (err) => {
        console.log('Unable to get user:', err);
    });
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