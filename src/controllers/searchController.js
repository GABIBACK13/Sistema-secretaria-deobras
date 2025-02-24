const Chamada = require('../models/Chamada');
const validator = require('validator');

exports.index = async (req,res) => {
  try {
    let { tag, search } = req.query;
    if (tag) {
      if(!search) search = '';
      if(validator.isNumeric(search)) {
        const chamadas = await Chamada.getAll({[tag]:search});
        return res.render('search', {chamadas});
      }
      const chamadas = await Chamada.getAll({[tag]:{ $regex: search, $options: 'i' }});
      return res.render('search', {chamadas});
    }

    const chamadas = [];
    return res.render('search', {chamadas});

  } catch (error) {
    console.log(error);
    return res.render('404');
  }
}

exports.search = (req, res) => {
    if (!req.body.search) req.body.search = '';
    req.session.save(() => res.redirect(`/search?tag=${req.body.searchBy}&search=${encodeURIComponent(req.body.search)}`));
};