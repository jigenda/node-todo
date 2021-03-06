require('./config/config.js');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos)=> {
        res.send({todos})
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req,res) => {

    let id = req.params.id;
    if(!ObjectId.isValid(id)){
       return  res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo){
           return res.status(404).send();
        }
        res.send({todo});
    }, (e) => {
        res.status(404).send(e);
    });
});

app.delete('/todos/:id', (req,res) => {
    var id = req.params.id;
    if(!ObjectId.isValid(id)){
       return res.status(400).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
           return res.status(404).send();
        }
        res.send({todo});
    }, (e) => {
        res.status(400).send();
    });
});

app.patch('/todos/:id', (req, res) => {

    var id = req.params.id;
    var body = _.pick(req.body,['text', 'completed']);

    if(!ObjectId.isValid(id)){
        return res.status(400).send();
    }

    if(_.isBoolean(body.completed) && body.completed){

        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set:body},{new: true}).then((todo) =>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    });

});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = {app};