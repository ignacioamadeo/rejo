let loginController = {

    login:(req,res)=>{
        res.render('users/login') //al crear carpetas en views y agregarle archivos, la ruta en el controlador debera ser nombrada con el nombre de la carpeta a la que pertenece
    }


}


module.exports=loginController;