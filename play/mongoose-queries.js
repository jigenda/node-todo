const {ObjectId} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
 
 

let id = '5af1521c9a8f7920191188c2';

if( !ObjectId.isValid){
      console.log('ID is invalid');
}
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

Todo.findById(id).then((todo) => {
     
    if(!todo){
        return console.log('Id not found')
    }
    console.log('Todo By Id:', todo);
}).catch((e) => {
    console.log(e);
})