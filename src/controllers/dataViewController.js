const Chamada = require('../models/Chamada');
exports.index = async (req, res) => {
  try {
    const chamadas = await Chamada.getAll();
    return res.render('chamadas', {chamadas});

  } catch (error) {
    console.log(error);
    return res.render('404');
  }
};

exports.viewChamada = async (req, res) => {
  if (!req.params.id) return res.redirect('/data-view');

  const chamada = await Chamada.getById(req.params.id);
  return res.render('view-chamada', {chamada});
};

exports.delete = async (req, res) => {
  try {
    if (!req.params.id) return res.redirect('/data-view');
    await Chamada.delete(req.params.id);
    req.flash('success', 'Chamada excluída com sucesso!');
    req.session.save(() => res.redirect("/data-view"));

  } catch (error) {
    console.log(error);
    return res.render('404');
  }
};

exports.edit = async (req, res) => {
  try {
    if (!req.params.id) return res.redirect('/data-view');
    const chamada = await Chamada.getById(req.params.id);
    return res.render('edit-chamada', { chamada });

  } catch (error) {
    console.log(error);
    return res.render('404');
  }
};

exports.saveEdit = async (req, res) => {
  try {
    if (!req.params.id) return res.redirect('/data-view');
    const chamada = new Chamada(req.body);
    if (chamada.errors.length > 0) return res.render('404');
    await chamada.edit(req.params.id);

    req.flash('success', 'Chamada editada com sucesso!');
    req.session.save(() => res.redirect(`/data-view/chamada/${chamada.chamada._id}`));
  } catch (error) {
    console.log(error);
    return res.render('404');
  }
};