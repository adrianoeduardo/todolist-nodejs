const express = require('express');
const router = express.Router();

const Tarefa = require('../models/tarefas');

router.get('/', async (req, res)=>{
    const tarefas = await Tarefa.find();
    console.log(tarefas);
    res.render('index', {tarefas});
});

router.post('/add', async (req, res)=>{
    const tarefa = new Tarefa(req.body);
    await tarefa.save();
    res.redirect('/');
});
router.get('/delete/:id', async (req, res) =>{
   const {id} = req.params;
   await Tarefa.remove({_id: id});
   res.redirect('/');
});
router.get('/riscar/:id', async (req, res) =>{
    const {id} = req.params;
    const tarefa = await Tarefa.findById(id);
    tarefa.ch_status = !tarefa.ch_status;
    await tarefa.save();
    res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
    const {id} = req.params;
    const tarefa = await Tarefa.findById(id);
    res.render('form-edit', {tarefa});
});

router.post('/edit/:id', async (req, res) => {
    const {id} = req.params;
    await Tarefa.update({_id: id}, req.body);
    res.redirect('/');
});
module.exports = router;