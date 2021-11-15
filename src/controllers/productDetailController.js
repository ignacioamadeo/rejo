//DETALLE DE PRODUCTO:

//Llamo a la base de datos (en este caso objeto json) y la asigno a la variable db:

// const db = require('../db/baseProductos.json');
const db = require("../database/models");

//Renderizo el ejs correspondiente:

let productDetailController = {
  productDetail: (req, res) => {
    // let product = db.find(item => item.prodID == req.params.idProductDetail)
    db.Products.findByPk(req.params.idProductDetail)
      .then((product) => {
        res.render("products/productDetail", { product: product });
      })
      .catch((error) => res.send(error));
  },
};

/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:
module.exports = productDetailController;
