
var express         = require('express');
var usuarioCtrl     = require('../controllers/usuario.controller');
var articuloCtrl    = require('../controllers/articulo.controller');
var familiaCtrl     = require('../controllers/familia.controller');
var movimientoCtrl  = require('../controllers/movimiento.controller');

router = express.Router();

router.post     ( '/login', usuarioCtrl.login                   );  // login de usuario

// Usuarios
router.get      ( '/usuarios', usuarioCtrl.getUsuarios          );  //Devuelve todos los usuarios
router.get      ( '/usuarios/:id', usuarioCtrl.getUsuario       );  // Devuelve ususario con el id pasado como parametro.
router.post     ( '/usuarios', usuarioCtrl.crearUsuario         );  // Crea un nuevo usuario
router.put      ( '/usuarios/:id', usuarioCtrl.actualizaUsuario );  // Actualiza el usuario
router.delete   ( '/usuarios/:id', usuarioCtrl.eliminaUsuario   );  // Elimina el usuario

// Familias
router.get      ( '/familias', familiaCtrl.getFamilias          );  //Devuelve todos los familias
router.get      ( '/familias/:id', familiaCtrl.getFamilia       );  // Devuelve el Familia con el id.
router.post     ( '/familias', familiaCtrl.crearFamilia         );  // Crea un nuevo Familia
router.put      ( '/familias/:id', familiaCtrl.actualizaFamilia );  // Actualiza el Familia
router.delete   ( '/familias/:id', familiaCtrl.eliminaFamilia   );  // Elimina el Familia


// Articulos
router.get      ( '/articulos', articuloCtrl.getArticulos          );  //Devuelve todos los articulos
router.get      ( '/articulos/:id', articuloCtrl.getArticulo       );  // Devuelve el articulo con el id.
router.post     ( '/articulos', articuloCtrl.crearArticulo         );  // Crea un nuevo articulo
router.put      ( '/articulos/:id', articuloCtrl.actualizaArticulo );  // Actualiza el articulo
router.delete   ( '/articulos/:id', articuloCtrl.eliminaArticulo   );  // Elimina el articulo
router.get      ( '/articulos/:busqueda', articuloCtrl.busqueda    );  // Busqueda de referencias

// Movimientos
router.get      ( '/movimientos', movimientoCtrl.getMovimientos          );  //Devuelve todos los movimientos
router.get      ( '/movimientos/:id', movimientoCtrl.getMovimiento       );  // Devuelve el movimiento con el id.
router.post     ( '/movimientos', movimientoCtrl.crearMovimiento         );  // Crea un nuevo movimiento
router.put      ( '/movimientos/:id', movimientoCtrl.actualizaMovimiento );  // Actualiza el movimiento
router.delete   ( '/movimientos/:id', movimientoCtrl.eliminaMovimiento   );  // Elimina el movimiento

module.exports  = router;