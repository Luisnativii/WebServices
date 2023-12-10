const Mongoose = require("mongoose")
const Schema = Mongoose.Schema;

const PostDonSchema = new Schema({
    title_don: {
        type: String,
        trim: true,
        required: true,
    },
    Nombre_Don:{
        type: String,
        trim: true,
        require: true,
    },
    Email_Don:{
        type: String,
        trim: true,
        require: true,
    },
    telefono_don:{
        type: String,
        require: true,
    },
    description_don: {
        type: String,
        trim: true,
        required: true,
    },
    Tipo_don: {
        type: String,
        trim: true,
        required: true,
    },
    Cantidad_don: {
        type: String,
        trim: true,
        required: true,
    },
    adicional_don: { 
        //url de la imagen 
        type: String,
        required: true,
    },
    //no mostrar post y actvar o descativar 
    hidden: {
        type: Boolean,
        default: false
    },
},{ timestamps: true });

module.exports = Mongoose.model("postDon", PostDonSchema);