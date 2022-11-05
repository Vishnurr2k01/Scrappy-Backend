const ItemsSchema = require("../../model/items/items");
module.exports.setitems=async (req,res)=>{
    const {items,photo,date,time,address}=req.body;
    try{
        const newItems=new ItemsSchema({
            items,
            photo,
            date,
            time,
            address
        })
        await newItems.save();
        return res.status(201).json({
            success:true,
            message:"Items added successfully",
            newItems
        })
    }
    catch(err){
        res.status(500).json({err})
    }   
}