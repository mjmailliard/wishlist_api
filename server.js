'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const UserController =  require('./src/controllers/user');
const MongoDBUrl = 'mongodb://admin:admin123@ds227664.mlab.com:27664/wishlist_db';


const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/users',
    handler: UserController.list
  });
  
  server.route({
    method: 'GET',
    path: '/users/{id}',
    handler: UserController.get
  });
  server.route({
    method: 'POST',
    path: '/users',
    handler: UserController.create
  });
  
  server.route({
    method: 'PUT',
    path: '/users/{id}',
    handler: UserController.update
  });
  
  server.route({
    method: 'DELETE',
    path: '/users/{id}',
    handler: UserController.remove
  });

// const init = async () => {

//     await server.start();
//     console.log(`Server running at: ${server.info.uri}`);
// };

// process.on('unhandledRejection', (err) => {

//     console.log(err);
//     process.exit(1);
// });

// init();

(async () => {
    try {  
      await server.start();
      // Once started, connect to Mongo through Mongoose
      mongoose.connect(MongoDBUrl, {}).then(() => { console.log(`Connected to Mongo server`) }, err => { console.log(err) });
      console.log(`Server running at: ${server.info.uri}`);
    }
    catch (err) {  
      console.log(err)
    }
  })();