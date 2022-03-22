function MenuFun(req,res){

    res.render('Funciones/Funciones');
}
function PrimerFun(req,res){

    res.render('Funciones/PrimerFun');
}
function SegundaFun(req,res){

    res.render('Funciones/SegundaFun');
}
function TerceraFun(req,res){

    res.render('Funciones/TerceraFun');
}
function CuartaFun(req,res){

    res.render('Funciones/CuartaFun');
}
function QuintaFun(req,res){

    res.render('Funciones/QuintaFun');
}
function SextaFun(req,res){

    res.render('Funciones/SextaFun');
}
/*function create(rec, res){
    res.render('estudiante/create')
}*/

module.exports={
    MenuFun: MenuFun,
    PrimerFun:PrimerFun,
    SegundaFun:SegundaFun,
    TerceraFun:TerceraFun,
    CuartaFun:CuartaFun,
    QuintaFun:QuintaFun,
    SextaFun:SextaFun,
    //create: create,
}