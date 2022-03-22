function Menu(req,res){

    res.render('Derivadas/derivadas');
}
function Primer(req,res){

    res.render('Derivadas/PrimerDev');
}
function Segundo(req,res){

    res.render('Derivadas/SegundoDev');
}
function Tercer(req,res){

    res.render('Derivadas/TercerDev');
}
function Cuarto(req,res){

    res.render('Derivadas/CuartoDev');
}
function Quinto(req,res){

    res.render('Derivadas/QuintoDev');
}
function Sexto(req,res){

    res.render('Derivadas/SextoDev');
}
module.exports={
    Menu: Menu,
    Primer:Primer,
    Segundo:Segundo,
    Tercer:Tercer,
    Cuarto:Cuarto,
    Quinto:Quinto,
    Sexto:Sexto,
    //create: create,
}