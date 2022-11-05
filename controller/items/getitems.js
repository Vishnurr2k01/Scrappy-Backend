const ItemsSchema = require("../../model/items/items");

module.exports.getitems=async(req,res)=>{
    try{
        const items=await ItemsSchema.find({});
        return res.status(200).json({
            success:true,
            message:"all shares",
            items
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({err})
    }
}
