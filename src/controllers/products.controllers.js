import productDAO from "../dao/products.dao.js";

const getAll = (req,res) =>{
    productDAO.getAll()
    .then(products=>{
        !products ? res.json({Status:"No data to show"}): res.json({products})
    })
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}
const getOne = (req,res) =>{
    const barcode= req.params.barcode
    productDAO.getOne(barcode)
    .then(result=>{
        !result?res.json({Status:`Barcode "${barcode}" Not Found :,(`}):res.json({Product:result})
    })
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}
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
