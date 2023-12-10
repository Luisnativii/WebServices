const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const crypto = require("crypto");
const debug = require("debug")("app:user-model")

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    dui: {
        type: String,
        trim: true,
        required: true,
    },
    tel: {
        type: String,
        trim: true,
        required: true,
    },



    //la pasword no tinee que ser un string por vulerabilidades
    //se utilizara crypto que viene con express
    hashedPassowrd: {
        type: String,
        require: true,
    },

    
    //desencriptador para comprar el hashedpasword
    salt: {
        type: String,
    },
    
    tokens:{
        type: [String],
        default: []
    },


   

}, { timestamps: true });

// se declarda methods porque son 2 o mas methodos XD
userSchema.methods = {
    encrypPassword: function (password) {
        if (!password) return "";

        try {
            const _password = crypto.pbkdf2Sync(

                //constantes requeridas por la funcion crypto 
                password,
                this.salt,
                1000, 64,
                `sha512`
            ).toString("hex");

            return _password;

        } catch (error) {
            debug({ error });
            return ""
        }
    },

    makeSalt: function(){
        return crypto.randomBytes(16).toString("hex");

    },

    comparePassword: function(password){
        return this.hashedPassowrd === this.encrypPassword(password);
    }
}

userSchema
.virtual("password")
    // seteo de funciones para ahcer random todo 
    .set(function(password = crypto.randomBytes(16).toString()) {

        this.salt = this.makeSalt();

        this.hashedPassowrd = this.encrypPassword(password);


    });


module.exports = Mongoose.model("User", userSchema);