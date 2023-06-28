const express = require('express')
const router = express.Router()
const axios = require('axios');

const cutsServices = require('../BL/cuts.services')
const apiKey = process.env.CUTS_API_KEY;
const apiURL = process.env.CUTS_API_URL;

//data: { id: 19064 }

const schema ={
    saw: {
      bladeWidth: 10
    },
    stock: [
      {
        name: "Pine",
        l: 2440,
        w: 1220,
        t: 20,
        material: "Pine plywood",
        q: 2,
        cost: 150
      }
    ],
    parts: [
      {
        name: "Right Door",
        l: 100,
        w: 75,
        t: 20,
        material: "Pine plywood",
        q: 1
      }
    ]
  };


router.post('/newcutlist', async (req, res) => {
  try {
    // Axios POST request to external server
    const cutId = await axios.post('https://api.smartcut.dev/v2/calculate', schema, {
      headers: {
        'Authorization': apiKey
      }
    });
    // Process the response from the external server
    console.log(cutId.data)
    res.send(cutId.data);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/listoutput', async (req, res) => {
  try {
  const listOutput = await axios.get('https://api.smartcut.dev/v2/result/', {
    headers: {
      'Authorization': apiKey
    },
    params : {
      id : 19085
    }
  });
  console.log(listOutput.data.metadata)
  res.send(listOutput.data.metadata)
} catch (err) {
  res.status(400).send(err);
}
})
module.exports = router