'use strict';

const mongoose = require('mongoose');
const usersSchema = mongoose.Schema;

const userModel = new usersSchema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  is_admin: { type: String, required: false }
});

module.exports = mongoose.model('User', userModel, 'users'); 