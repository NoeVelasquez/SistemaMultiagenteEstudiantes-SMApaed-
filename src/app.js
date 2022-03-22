const express = require('express');
const { engine }=require ('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const path =require('path');
const mysql = require('mysql');
const estudianteRoutes=require('./routes/estudiante');
const DevRoutes=require('./routes/Derivadas');
const FunRoutes=require('./routes/Funciones');
const HomeRoutes=require('./routes/Home');
//const ImaRoutes=require('./routes/Imagen');

const app = express();
app.set('port',1505);

app.use(bodyParser.urlencoded({ 
    extended: true
}));
app.use(bodyParser.json());
app.set('views',__dirname+'/views')
app.engine('.html', engine({
    extname: '.html'
}));
app.set('view engine', '.html');
//conexion a la base de datos
app.use(myconnection(mysql, {
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database: 'smapa'
}/*,'single'*/));

app.listen(app.get('port'),()=>{
    console.log('Listening on port', app.get('port'));
});

app.use('/', estudianteRoutes);
app.use('/', DevRoutes);
app.use('/', FunRoutes);
app.use('/', HomeRoutes);
//app.use('/', ImaRoutes);

app.get('/', (req, res)=>{
    res.render('home');
});
app.get('/', (req, res)=>{
    res.render('navegacion');
});
//para algo estatico 
app.use(express.static(path.join(__dirname, 'public')));
/*app.get('/Derivadas', (req, res)=>{
    res.render('Menuderivadas');
});*/


