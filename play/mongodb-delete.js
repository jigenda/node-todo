//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
 
const dbName = 'TodoApp';

 
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    
    if(err) {
        return console.log('Unable to connect to MongoDB server');

    }
     

    // client.db(dbName).collection('Todos').deleteMany({text:'Learn C'}).then((result) => {
    //     console.log( result);
        
    // });

    // client.db(dbName).collection('Todos').deleteOne({text:'Learn C'}).then((result) => {
    //     console.log( result);
        
    // });

    // client.db(dbName).collection('Todos').findOneAndDelete({text:'Learn C'}).then((result) => {
    //     console.log( result);
        
    // });

    client.db(dbName).collection('Users').findOneAndDelete({_id: new ObjectID("5af0076c8d155694a8a5171c")}).then((result)=>{
        console.log(result);
    });
    //console.log(db);
     
     

     

    client.close();
});