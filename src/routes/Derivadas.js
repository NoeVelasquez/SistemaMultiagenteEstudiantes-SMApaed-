const express= require('express');
const DerivadasController = require('../controllers/DerivadasController');

const router = express.Router();

router.get('/derivadas', DerivadasController.Menu);
router.get('/PrimerDev', DerivadasController.Primer);
router.get('/SegundoDev', DerivadasController.Segundo);
router.get('/TercerDev', DerivadasController.Tercer);
router.get('/CuartoDev', DerivadasController.Cuarto);
router.get('/QuintoDev', DerivadasController.Quinto);
router.get('/SextoDev', DerivadasController.Sexto);

module.exports=router;