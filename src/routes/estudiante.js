const express= require('express');
const EstudianteController = require('..//controllers/EstudianteController');

const router = express.Router();

router.get('/estudiante', EstudianteController.index);
router.get('/create', EstudianteController.create);

module.exports=router;