//This is where you'll define the main route for ALL of the different entities (ישויות)
const express = require("express")
const router = express.Router()

router.use('/api/orders', require('../Router/order.route'))
router.use ('/api/items', require ('../Router/items.route'))
router.use ('/api/others', require ('../Router/others.route'))//creator:yosef sch
router.use('/api/payment', require('../Router/payment.route'))
router.use ('/api/cuts', require ('../Router/cuts.route'))//RotemR
router.use("/api/hardware", require("../Router/hardware.route"))

module.exports = router;