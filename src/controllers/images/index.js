const { Router: router } = require('express');

const { list } = require('./list');


/**
 * Provide api for questions
 *
 *
 * GET /api/v1/questions/ - List
     @header
            Authorization: Bearer {token}
     @optionalQueryParameters
           search {String} - value to search
           limit {Number} - count of item to send
           skip {Number} - value to search
 *
 *
 * **/

module.exports = (models, { config }) => {
  const api = router();

  api.get('/all/', list(models));
  api.get('/nightscapes/', list(models, { category: "nightscapes" }));
  api.get('/landscapes/', list(models, { category: "landscapes" }));
  api.get('/other/', list(models, { category: "other" }));
  api.get('/flowers/', list(models, { category: "flowers" }));
  api.get('/instock/', list(models, { inStock: true }));

  return api;
};