
const insertOne = (req,res) =>{
    const product= req.body
    productDAO.insertOne(product)
    .then(result=>{
        res.json({Status:"Product inserted correctly"})
    })
    .catch(err=>console.log("ño"))
}
const updateOne = (req,res) =>{
    productDAO.updateOne(req.params.barcode,req.body)
    .then(result=>{
        !result?res.json({Status:`Barcode "${req.params.barcode}" Not Found :,(`}):res.json({estatus:"Data update sucessfully"})
    })
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}
const deleteOne = (req,res) =>{
    productDAO.deleteOne(req.params.barcode)
    .then(result=>{
        !result?res.json({Status:`Barcode "${req.params.barcode}" Not Found :,(`}):res.json({estatus:"Data was delete sucesfully"})
    })
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}

export {getAll,getOne,insertOne, updateOne, deleteOne}
