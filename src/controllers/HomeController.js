function Home(req,res){

    res.render('home.html');
}
/*function create(rec, res){
    res.render('estudiante/create')
}*/

module.exports={
    Home: Home,
    //create: create,
}