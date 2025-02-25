exports.loginRequired = (req, res, next) => {
  if(!req.session.user) {
    req.flash('errors', 'Você precisa fazer login primeiro!');
    req.session.save(() => res.redirect('/login'));
    return;
  }
  if(req.session.user.user !== 'Gabriel Back') {
    req.flash('errors', 'Você não possui permissão para acessar essa área');
    console.log(req.session.user);
    req.session.destroy(() => res.redirect('/login'));
    return;
  }
  next();
}
