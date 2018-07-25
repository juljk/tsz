const _ = require('lodash');

const list = ({ Image }, config ) => async (req, res, next) => {
  // let { limit, skip, search } = req.query;
  // skip = skip ? parseInt(skip, 10) : 0;
  // limit = limit ? parseInt(limit, 10) : 100;

  try {        
    let scope = {};

    if (config) {
      scope = config;
    }
    
    const images = await Image.find(scope).sort({ year: -1 });

    res.status(200).send({ images });
  } catch (error) {
    next(error);
  }
};

module.exports= { list };