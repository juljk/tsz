const express = require('express');

const { errorHandler } = require('../middleware');

// list of models here
const { Image } = require('../models/image');

// list of controllers here
const images = require('../controllers/images');

// combine models ino one object
const models = { Image };

const routersInit = config => {
  const router = express();

  // register api points
  router.use('/portfolio', images(models, { config }));

  // catch api all errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;