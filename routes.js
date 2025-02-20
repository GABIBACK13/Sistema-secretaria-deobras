const express = require('express');
const router = express.Router();
const path = require('path');
const homeControler = require('./src/controllers/homeController');
const searchController = require('./src/controllers/searchController');

// homepage routes
router.get('/', homeControler.index);


router.get('/search', searchController.index);

// 404 page
router.use((req, res) => {
  res.status(404).render('404', {
    title: '404'
  });
});
module.exports = router;