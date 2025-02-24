const Chamada = require('../models/Chamada');


exports.index = async (req, res) => {
  try {
    let chamadas = await Chamada.getAll({priority: 3});
    let chamadasLow = await Chamada.getAll({priority: 3});

    if(chamadas.length === 0) chamadas = [];
    if(chamadasLow.length === 0) chamadasLow = [];

    res.render('index', { chamadas, chamadasLow});
  } catch (error) {
    console.log(error);
    return res.render('404');
  }
}