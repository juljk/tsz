const _ = require('lodash');

const list = ({ Image }, { category }) => async (req, res, next) => {
  // let { limit, skip, search } = req.query;
  // skip = skip ? parseInt(skip, 10) : 0;
  // limit = limit ? parseInt(limit, 10) : 100;

  try {        
    let scope = {};

    if (category) scope = { category: category };
    const images = await Image.find(scope).sort({ year: -1 });

    res.status(200).send({ images });
  } catch (error) {
    next(error);
  }
};

module.exports= { list };