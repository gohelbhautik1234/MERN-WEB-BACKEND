const productmodel=require('../models/Product')

const getproduct= async (req, resp) => {
    let data = await productmodel.find();
    if (data.length > 0) {
        resp.send(data)
    }
    else {
        resp.send([])
    }
}

const addproduct= async (req, resp) => {
    let product = new productmodel(req.body);
    let data = await product.save();
    if (typeof (data) == 'object') {
        resp.send('Add Data Successfully');
    }
    else {
        resp.send(false);
    }
}

const editproduct=async (req, resp) => {
    let data = await productmodel.findOne({ _id: req.params.id }, { name: 1, price: 1, category: 1, company: 1, _id: 0 });
    if (data) {
        resp.send(data)
    }
    else {
        resp.send(undefined)
    }
}

const deleteproduct=async (req, resp) => {
    await productmodel.deleteOne({ _id: req.params.id });
    resp.send("Data Deleted Successfully")
}

const updateproduct = async (req, resp) => {
    await productmodel.updateOne({ _id: req.body.Id }, { $set: req.body });
}

const searchproduct = async (req, resp) => {
    let data = await productmodel.find({ $or: [{ name: { $regex: req.params.key } }] })
    resp.send(data);
}
module.exports = {getproduct,addproduct,editproduct,updateproduct,deleteproduct,searchproduct};
