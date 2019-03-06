
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var Usuario = require('../models/usuario.model');

exports.getUsuarios = function(req, res) {
    
    Usuario.find({}, (err, usuarios) => {
        if (err) {
            res.status(400).json(err);
        }

        res.json(usuarios);
    });
};

exports.getUsuario = function(req, res) {
    Usuario.findOne({_id: req.params.id}, ( err, usuario ) => {
        if (err) {
            res.status(400).json(err);
        }

        res.json(usuario);
    });
};

exports.crearUsuario = function(req, res) {
    
    var nuevoUsuario = new Usuario(req.body);

    nuevoUsuario.password = bcrypt.hashSync(nuevoUsuario.password, 10);

    nuevoUsuario.save( (err, usuariodb) => {

        if (err) {
            res.status(400).json(err);
        }

        res.json(usuariodb);
    });
};

exports.actualizaUsuario = function(req, res) {
   
    Usuario.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, usuario) => {
       
        if (err) {
            res.status(400).json(err);
        }

        res.json(usuario);
    });
};

exports.eliminaUsuario = function(req, res) {

    Usuario.findByIdAndRemove(req.params.id, (err, usuario) => {
        
        if (err) {
            res.status(400).json(err);
        }

        res.json(usuario);
    });
};


exports.login = function(req, res) {

        var body = req.body;
        console.log('hihi', req.body);
        return Usuario.findOne( { username: body.username } )
        .then(usuarioDB => {

            console.log(usuarioDB);
            if (!usuarioDB) {
                return res.status(401).json({
                    ok: false,
                    mensaje: 'usuario incorrectas',
                    body: body
                });
            }

            if (!bcrypt.compareSync(body.password, usuarioDB.password)) {

                return res.status(401).json({
                    ok: false,
                    mensaje: 'Credenciales incorrectas',
                    body: body
                });

            }

            //creamos el token
            //usuarioDB.password = ':-)';
            var token = jwt.sign({ usuario: usuarioDB }, 'esto es un seed dificil', { expiresIn: 14400 }); // 4 horas

            res.status(200).json({
                ok: true,
                mensaje: 'Se ha localizado al usuario y ha validado contraseña',
                usuario: usuarioDB,
                id: usuarioDB.id,
                token: token

            });

           

        }).catch(err => {
            res.status(500).json({
                ok: false,
                mensaje: 'error en la petición',
                error: err
            });
        });
};


