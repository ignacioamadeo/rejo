//ÍNDICE DE TODOS LOS PRODUCTOS:

//1º Ejecuto paquetes:
const express=require('express');
const router=express.Router();

//2º Importo controlador: 
const productIndexController=require('../controllers/productIndexController.js');

//3º Llamo a la propiedad de ese controlador:
router.get('/maquinas', productIndexController.productIndex);

router.get('/yoga', productIndexController.productYoga);

router.get('/barras', productIndexController.productBarras);

router.get('/indumentaria', productIndexController.productIndumentaria);

router.get('/desatcado', productIndexController.destacado);


//4º Exporto todo:
module.exports=router;