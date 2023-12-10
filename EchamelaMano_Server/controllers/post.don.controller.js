//
const PostDon = require("../models/Post.don.model")
const debug = require("debug")("app:post-controller")

const controller = { };

controller.saveDon = async (req, res, next) => {

    //premisa la ruta save debe de estar authenticada 

    try {
        const{ title_don,Nombre_Don, Email_Don, telefono_don, description_don, Tipo_don, Cantidad_don, adicional_don } = req.body;
        const{ identifier } = req.params;

        //debug({ user})
        
       

        /*const post = new Post({
            title_don: title_don,
            Email_Don: Email_Don,
            Nombre_Don: Nombre_Don,
            image_don: image_don,
            telefono_don: telefono_don,
            description_don: description_don,
            Tipo_don: Tipo_don,
            Cantidad_don: Cantidad_don,
         });*/


         //verifica si el post existe con un identifire de ID
         let postDon = await  PostDon.findById(identifier);

        //si el post no existe se crea uno nuevo
         if(!postDon){
            postDon = new PostDon();
         }

         postDon["title_don"] = title_don;
         postDon["Nombre_Don"] = Nombre_Don;
         postDon["Email_Don"] = Email_Don;
         postDon["telefono_don"] = telefono_don;
         postDon["description_don"] = description_don;
         postDon["Tipo_don"] = Tipo_don;
         postDon["Cantidad_don"] = Cantidad_don;
         postDon["adicional_don"] = adicional_don;

        //comit de los cambios en la bace o actialziza los campos la funcion save
          const postDonSave = await postDon.save();
         
          //separando el errro interno del servidor con el errro creando el post
          if(!postDonSave){
            //conflicto
            return res.status(409).json({error: "Error Creating post"})
          }

          return res.status(201).json(postDonSave)
    } catch (error) {

        console.error(error);
        return res.status(500).json({error: "Internal server error"});
        
    }
}

controller.findAllDon = async (req, res, next) => {
    try {
        
        const postsDon = await PostDon.find({ hidden: false });
        return res.status(200).json({ postsDon });

    } catch (error) {

        console.error(error);
        return res.status(500).json({error: "Internar Server error"});
        
    }
}

controller.findOneByIdDon = async (req, res, next) => {
    try {
        const { identifier } = req.params;

        const postDon = await PostDon.findByIdDon(identifier);

        if(!postDon) {
            return res.status(404).json({erorr: "Post not found"})
        }



        return res.status(200).json(postDon);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internar Server error"});
    }
}

controller.delateByIdDon = async (req, res, next) => {

    try {
            const{ identifier} = req.params;

            const postDon = await PostDon.findByIdAndDelete(identifier);

            if(!postDon){
                return res.status(404).json({error:"Post not found"});
            }

            res.status(200).json({message: "Post de donacion deleat"})

    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internar Server error"});
    }

}

module.exports = controller;