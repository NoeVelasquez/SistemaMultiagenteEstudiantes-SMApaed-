function index(req,res){

    res.render('estudiante/index');
}
function create(req, res){
    res.render('estudiante/create')
}

module.exports={
    index: index,
    create: create,
}