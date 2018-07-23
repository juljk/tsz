const express = require('express');

const { errorHandler } = require('../middleware');

// list of models here
// const { Question } = require('../models/question');
// const { User } = require('../models/user');
const { Image } = require('../models/image');

// list of controllers here
// const questions = require('../controllers/questions');
// const auth = require('../controllers/auth');
const images = require('../controllers/images');

// combine models ino one object
// const models = { Question, User };
const models = { Image };

const routersInit = config => {
  const router = express();

  // register api points
  router.use('/portfolio', images(models, { config }));
  // router.use('/auth', auth(models, { config }));

  // catch api all errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;