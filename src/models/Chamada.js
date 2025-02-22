const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const chamadaSchema = new mongoose.Schema({
  name: {type: String, required: true},
  cpf: {type: String, required: true},
  date: {type: Date, default: Date.now},
  forcePriority: {type: Number, default: 0},
  priority: {type: Number, default: 1},
  local: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true}
});

const ChamadaModel = mongoose.model('chamada', chamadaSchema);

class Chamada {
  constructor(body) {
    this.body = body,
    this.errors = [],
    this.chamada = null
  }

  ckeckCPF(CPF) {
    const inputedCPF = CPF.replace(/\D+/g, '');
    if (inputedCPF[0].repeat(inputedCPF.length) === inputedCPF) return false;
    if (inputedCPF.length !== 11) return false;
  
    const numbers = Array.from(inputedCPF).slice(0, 9);
    function createDigit(array) {
      let control = array.length +2;
      const total = array.reduce((ac, value) => {
        control--
        return ac += Number(value) * control;
      }, 0);
  
      let d1 = 11 - (total % 11);
      if (d1 > 9) d1 = 0;
      return d1;
    }
  
    const d1 = createDigit(numbers);
    numbers.push(d1);
    const d2 = createDigit(numbers);
    numbers.push(d2);
    
    const validCPF = numbers.reduce((ac, value) => ac += value);
    return validCPF === inputedCPF;
  };
  
  validate() {
    if (!this.body.name || !this.body.local || !this.body.title || !this.body.description) {
      this.errors.push('Algum campo não foi preenchido corretamente.');
    }
    if (!this.body.cpf || !this.ckeckCPF(this.body.cpf)) {
      this.errors.push('CPF inválido.');
    }
  }

  async register() {
    this.validate();
    if (this.errors.length > 0) return ;
    const salt = bcrypt.genSaltSync();
    this.body.cpf = bcrypt.hashSync(this.body.cpf, salt);
    this.chamada = await ChamadaModel.create(this.body);
  }

  async edit(id) {
    if(typeof id !== 'string') return;
    this.validate();
    if(this.errors.length > 0) return;
    
    this.chamada = await ChamadaModel.findByIdAndUpdate(id, this.body, {new: true});
  }

  static async delete(id) {
    if(typeof id !== 'string') return;
    const chamada = await ChamadaModel.findByIdAndDelete({_id: id});
    return chamada;
  }

  static async getAll(priority = '') {
    if(!priority) {
      return await ChamadaModel.find({});
    }
    return await ChamadaModel.find({priority: priority});
  }
}
module.exports = Chamada;