const express= require('express');
const FuncionesController = require('..//controllers/FuncionesController');

const router = express.Router();

router.get('/Funciones', FuncionesController.MenuFun);
router.get('/PrimerFun', FuncionesController.PrimerFun);
router.get('/SegundaFun', FuncionesController.SegundaFun);
router.get('/TerceraFun', FuncionesController.TerceraFun);
router.get('/CuartaFun', FuncionesController.CuartaFun);
router.get('/QuintaFun', FuncionesController.QuintaFun);
router.get('/SextaFun', FuncionesController.SextaFun);
//router.get('/create', EstudianteController.create);

module.exports=router;