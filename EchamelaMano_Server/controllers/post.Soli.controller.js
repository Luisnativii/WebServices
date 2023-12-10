
const PostSoli = require("../models/Post.Soli.model")

const controller = { };

controller.saveSoli = async (req, res, next) => {
    try {
        const{ title_Soli, Nombre_Soli, Email_Soli, telefono_Soli, direccion_Soli, motivo_Soli, informacion_Soli, terminos_Soli } = req.body;
        const{ identifier } = req.params;
        
       

        /*const post = new Post({
            title_Soli: title_Soli,
            Email_Soli: Email_Soli,
            Nombre_Soli: Nombre_Soli,
            image_Soli: image_Soli,
            telefono_Soli: telefono_Soli,
            description_Soli: description_Soli,
            Tipo_Soli: Tipo_Soli,
            Cantidad_Soli: Cantidad_Soli,
         });*/


         //verifica si el post existe con un identifire de ID
         let postSoli = await  PostSoli.findById(identifier);

        //si el post no existe se crea uno nuevo
         if(!postSoli){
            postSoli = new PostSoli();
         }

         postSoli["title_Soli"] = title_Soli;
         postSoli["Nombre_Soli"] = Nombre_Soli;
         postSoli["Email_Soli"] = Email_Soli;
         postSoli["telefono_Soli"] = telefono_Soli;
         postSoli["direccion_Soli"] = direccion_Soli;
         postSoli["motivo_Soli"] = motivo_Soli;
         postSoli["informacion_Soli"] = informacion_Soli;
         postSoli["terminos_Soli"] = terminos_Soli;

        //comit de los cambios en la bace o actialziza los campos la funcion save
          const postSoliSave = await postSoli.save();
         
          //separando el errro interno del servidor con el errro creando el post
          if(!postSoliSave){
            //conflicto
            return res.status(409).json({error: "Error Creating post"})
          }

          return res.status(201).json(postSoliSave)
    } catch (error) {

        console.error(error);
        return res.status(500).json({error: "Internal server error"});
        
    }
}

controller.findAllSoli = async (req, res, next) => {
    try {
        
        const postsSoli = await PostSoli.find({ hidden: false });
        return res.status(200).json({ postsSoli });

    } catch (error) {

        console.error(error);
        return res.status(500).json({error: "Internar Server error"});
        
    }
}

controller.finSolieByIdSoli = async (req, res, next) => {
    try {
        const { identifier } = req.params;

        const postSoli = await PostSoli.findByIdSoli(identifier);

        if(!postSoli) {
            return res.status(404).json({erorr: "Post not found"})
        }



        return res.status(200).json(postSoli);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internar Server error"});
    }
}

controller.delateByIdSoli = async (req, res, next) => {

    try {
            const{ identifier} = req.params;

            const postSoli = await PostSoli.findByIdAndDelete(identifier);

            if(!postSoli){
                return res.status(404).json({error:"Post not found"});
            }

            res.status(200).json({message: "Post de Soliacion deleat"})

    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internar Server error"});
    }

}

module.exports = controller;