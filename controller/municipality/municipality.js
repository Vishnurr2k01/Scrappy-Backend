const Municipality = require('../../model/municipality/municipality')

const addMunicipality = async (req, res) => {
    const { title, photo, date, location } = req.body
   
   try{ const municipality = new Municipality({
        title,
        photo,
        date,
        location
    })
    await municipality.save()
     return res.status(201).json({
            success:true,
            message:"complaint registered successfully",
            municipality
        })
    }
    catch(err){
        res.status(500).json({err})
    }   
}

const getMunicipality = async (req, res) => {
    try{
        const municipality = await Municipality.find()
        return res.status(200).json({
            success:true,
            message:"fetched successfully",
            municipality
        })
    }
    catch(err){
        res.status(500).json({err})
    }   
}

module.exports = {getMunicipality,addMunicipality}