exports.index = (req, res) => {
  res.render('chamadas');
  return;
};

exports.viewChamada = (req, res) => {
  const id = req.params.id;
  if (!id) return res.redirect('/data-view');
  return res.render('view-chamada', {id});
};