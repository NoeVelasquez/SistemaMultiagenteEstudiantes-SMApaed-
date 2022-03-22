const express= require('express');
const HomeController = require('../controllers/HomeController');

const router = express.Router();

router.get('/src/views/home.html', HomeController.Home);
//router.get('/create', EstudianteController.create);

module.exports=router;