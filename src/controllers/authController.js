
// services 
const { validaLogin } = require('../services/authService');

const { generarJWT  } = require('../helpers/jwt');

const login = async (req, res) => {

    try {

        const { email , password  } = req.body;

        const result = await validaLogin(email , password);


        console.log("result", result);
        
        if(result.length > 0){

            const token = await generarJWT(result[0]);

            res.json({
                ok: true,

                token
            });

        }else{

            res.status(401).send({
                message: 'Usuario o contraseña incorrectos'
            });

        }

    } catch (error) {
        
        return res.status(500).json({
            message: 'Error al iniciar sesión',
            error
        });

    }
}

module.exports = {
    login
}