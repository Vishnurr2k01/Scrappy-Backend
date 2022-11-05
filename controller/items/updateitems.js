const ItemsSchema = require("../../model/items/items");
module.exports.updateitems = async (req, res) => {
  const { id } = req.params;
  const { status, accepted, resolved } = req.body;
  try {
    const updateItems = await ItemsSchema.findByIdAndUpdate(
      id,
      {
        status,
        accepted,
        resolved,
      },
      { new: true }
    );
    //save in database
    await updateItems.save();

    //update the items

    return res.status(200).json({
      success: true,
      message: "Items updated successfully",
      updateItems,
    });
  } catch (err) {
    res.status(500).json({ err });
  }
};
