const {getDrawerPrice, getHandlesPrices, getHaningRodPrice} = require('./item.service')

async function getFinalPayment(orderData){
    let totalPrice = 0;   
    const drawersNumber = orderData?.section1.drawers + orderData?.section2?.drawers
    if(drawersNumber){// need to add depth
        const finalDrawerPrice = await getDrawerPrice(drawersNumber, 20)//need to add here depth from nerri
        finalDrawerPrice && (totalPrice += finalDrawerPrice)
    }
    const handlesQuantity = 2
    if(handlesQuantity){
        const handlesPrice = await getHandlesPrices(orderData.handleId, handlesQuantity)
        handlesPrice && (totalPrice += handlesPrice)
    }
    const hangingRodQuantity = 2;
    if(hangingRodQuantity){
        const hangingRodPrice = await getHaningRodPrice(hangingRodQuantity)
        hangingRodPrice && (totalPrice += hangingRodPrice)
    }
    return totalPrice
}
async function getForgingPrice() {

}
async function getFormicaCladdingPrice() {

}
module.exports = {getFinalPayment}