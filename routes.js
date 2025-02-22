const express = require('express');
const router = express.Router();
const path = require('path');
const homeController = require('./src/controllers/homeController');
const searchController = require('./src/controllers/searchController');
const registerController = require('./src/controllers/registerController');
const dataViewController = require('./src/controllers/dataViewController');
const loginController = require('./src/controllers/loginController');

const { loginRequired } = require('./src/middlewares/routeMiddleware');


// homepage routes
router.get('/', loginRequired, homeController.index);

// search routes
router.get('/search', loginRequired, searchController.index);

// data-view routes
router.get('/data-view', loginRequired, dataViewController.index);
router.get('/data-view/chamada/:id', loginRequired, dataViewController.viewChamada);

// register routes
router.get('/register', loginRequired, registerController.index);
router.post('/register/add', loginRequired, registerController.add);

// login routes
router.get('/login', loginController.index);
router.post('/login/verify', loginController.verify);

// 404 page

module.exports = router;

/* router.use((req, res) => {
  res.status(404).render('404', {
    title: '404'
  });
}); */