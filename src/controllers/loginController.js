const User = require('../models/User');

exports.index = (req, res) => {
  return res.render('login');
};

exports.verify = async (req, res, next) => {
  const {user, password} = req.body;
  try {
    const userFind = await User.findOne({key: password});
    if (!userFind) {
      req.flash('errors', 'User not found');
      return res.redirect('/login');
    }
    if (!userFind.key === String(password)) { 
      req.flash('errors', 'Hash key Invalida');
      return res.redirect('/login');
    }
    req.session.user = {user};
    console.log(req.session.user);
    req.flash('success', 'Login Successful');
    return res.redirect('/');

  } catch (error) {
    console.log(error);
  }
};