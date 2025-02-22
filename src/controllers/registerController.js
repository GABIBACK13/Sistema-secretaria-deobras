const Chamada = require('../models/Chamada');
exports.index = (req, res) => {
  res.render('register');
};

exports.add = async (req, res) => {
  try {
    const chamada = new Chamada(req.body);
    await chamada.register();
    if(chamada.errors.length > 0 ) {
      req.flash('errors', chamada.errors);
      req.session.save(function() {
        return res.redirect('/');
      });
      return;
    }

    req.flash('success', 'chamada adicionada com sucesso');
    req.session.save(() => res.redirect(`/data-view/chamada/${chamada.chamada._id}`));
    return;
  } catch (error) {
    console.log(error);
    return res.render('404');
  }
};
// `/data-view/chamada/${chamada.chamada._id}`