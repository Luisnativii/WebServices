const User = require("../models/User.model");
const {createToken, verifyToken} = require("./../utils/jwt.tools");


const controller = {};

controller.register = async (req, res, next) => {

    try {

        //obtener la info
        const { username, dui,tel, password} = req.body;

        //verificacion de la existencia del user y verificar usuario creando con el mismo DUI
        const user = 
            await User.findOne({ $or: [{username: username},{dui: dui}]})

            if (user){
                res.status(409).json({ error: "El usuario ya existe "})
            }

        const newUser = new User({
            username: username,
            dui: dui,
            tel: tel,
            password: password
        })

        await newUser.save();

    } catch (error) {
        console.error(error)
    }


}

controller.login = async (req, res, next) => {

    try {
        //obetenr la info identificador, password
        const { identifire, password} = req.body;

        //verificamos si el usuario existe el usuario puede logear con dui y con username
        
        const user =  await User.findOne({ $or: [{username: identifire},{dui: identifire}]})
        //si no existe retornar 404

        if(!user){
            return res.status(404).json({error: "usuario no encontrado"})
        }

        //si existe verificar la password

        if(!user.comparePassword(password)){
            return res.status(401).json({error: "Contraseña incorrecta"})
        }
        

        //creando un token

        const token = await createToken(user._id);
        // almacenando token verificar la integrida de los tokens actuales 

        //veridicar la existencia de 5 tokens 
        let _tokens =  [ ... user.tokens];
        const _verifyPromises = _tokens.map(async (_t) =>{
            const status = await verifyToken(_t);

            return status ?_t : null;

        });

        _tokens = (await Promise.all(_verifyPromises))
            .filter(_t => _t)
            .slice(0, 4);


        _tokens = [token, ..._tokens]
        user.tokens = _tokens;

        await user.save();



        //devolver token
        //si la password no coinside retornar 401
        return res.status(200).json({ token });

        //si la password coincide logear (todo) return 200


    } catch (error) {
        console.error(error)
        return res.status(500).json({error: "Internal server error login "})
    }
}

module.exports = controller;