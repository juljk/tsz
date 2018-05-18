const express = require('express');

const { errorHandler } = require('../middleware');
// list of models here
const { Question } = require('../models/question');
const { User } = require('../models/user');

// list of controllers here
const questions = require('../controllers/questions');
const auth = require('../controllers/auth');

// combine models ino one object
const models = { Question, User };

const routersInit = config => {
  const router = express();

  // register api points
  router.use('/questions', questions(models, { config }));
  router.use('/auth', auth(models, { config }));

  // catch api all errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;