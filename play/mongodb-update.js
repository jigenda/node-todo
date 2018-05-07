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

//     client.db(dbName).collection('Todos').findOneAndUpdate({
//         _id: new ObjectID('5af01c6513fa9b5dda9d8f64'
    
//     )},{
//         $set: { completed: true}
//     },{
//        returnOriginal: false 
//     }
// ).then((result) => {
//         console.log( result);
        
//     });

client.db(dbName).collection('Users').findOneAndUpdate({
    _id: new ObjectID('5af003dbdc3c506e5c0bcc16')
},{
    $set: {
        name: 'Jing'
    },
    $inc: {
        age: 1
    }
},{
    returnOriginal:false
}).then((result) => {
    console.log(result);
});

   
    //console.log(db);
     
     

     

    client.close();
});