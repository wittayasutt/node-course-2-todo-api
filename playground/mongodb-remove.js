const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

id = '58947ecb8f7d301e804e43c3';

Todo.remove({}).then(result => {
  console.log(result);
});

Todo.findOneAndRemove({_id: id}).then((todo) => {
  
});

Todo.findByIdAndRemove(id).then(todo => {
  console.log(todo);
});
