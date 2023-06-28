const express = require('express')
const router = express.Router()
const axios = require('axios');

const cutsServices = require('../BL/cuts.services')

// router.post("/leadAPI/ed", async (req, res) => {
//     try {
//         const apiResponse = await axios.post('https://api.smartcut.dev/v2/calculate', req.body);
//         res.send(apiResponse.data);
//     } catch (error) {
//         console.error('Error occurred:', error);
//         response.status(500).send('Internal Server Error');
//     }
// });
const apiKey = process.env.CUTS_API_KEY;

router.post('/newcutlist', async (req, res) => {
  try {
    // Axios POST request to external server
    const cutId = await axios.post('https://api.smartcut.dev/v2/calculate', req.body, {
      headers: {
        'Authorization': apiKey
      }
    });
    // Process the response from the external server
    res.send(cutId);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router