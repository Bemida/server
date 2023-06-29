const {getDrawerPrice} = require('./item.service')

async function getFinalPayment(orderData){
    const drawersNumber = orderData.section1.drawers + orderData.section2.drawers
    const finalDrawerPrice = await getDrawerPrice(drawersNumber)//need to add here depth from nerri
    const finalPrice = finalDrawerPrice
    return finalPrice
}
async function getForgingPrice() {

}
async function getFormicaCladdingPrice() {

}
module.exports = {getFinalPayment}