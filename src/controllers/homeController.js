const Chamada = require('../models/Chamada');


exports.index = async (req, res) => {
  try {
    let chamadas = await Chamada.getAll('3').sort({date: -1});
    let chamadasLow = await Chamada.getAll('2').sort({date: -1});

    if(chamadas.length === 0) chamadas = [];
    if(chamadasLow.length === 0) chamadasLow = [];

    res.render('index', { chamadas, chamadasLow});
  } catch (error) {
    console.log(error);
    return res.render('404');
  }
}