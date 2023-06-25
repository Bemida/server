//This is where you'll define the main route for ALL of the different entities (ישויות)
const express = require("express")
const router = express.Router()


router.use ('/template1', require ('../Router/template.route'))
// router.use ('/template2', require ('../Router/template.route'))
// router.use ('/template3', require ('../Router/template.route'))

module.exports = router;