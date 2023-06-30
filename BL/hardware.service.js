const hardwareController = require("../DL/Controller/hardware.controller")

const addHardwarePricing =  async (data) => {
    const newPricing = await hardwareController.create(data)
    return newPricing
}
const changeHardwarePricing = async (filter, data) => {
    const updatedPricing = await hardwareController.update(filter, data)
    return updatedPricing
}
const getHardwarePrice = async (height, doorsQuantity) => {
    let hardware = await hardwareController.readOne({height: height, isActive: true})
    if(!hardware){
        hardware = await  hardwareController.readOne({height: { $gt: height }, isActive: true})
    }
    if(hardware){
        const price = hardware.doors.find(door => door.quantity === doorsQuantity).price
        return price
    }
    //what should happen if there is no doors? and if there is more then 4 doors? 
    // or greater height then the biggest one in the db?
}
module.exports = {addHardwarePricing, changeHardwarePricing, getHardwarePrice}