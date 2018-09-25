const express = require('express');
const axios = require('axios');
const keys = require('./client/src/components/config.js')
const app = express();

var port = process.env.PORT || 5000;

app.get('/api', async (req, res) => {
    let { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${keys.reuters}`)
    res.send(data.articles)
});

app.get('/api/:category', async (req, res) => {
    let {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=`+req.params.category+`&apiKey=${keys.reuters}`)
    res.send(data.articles)
});

app.listen(port, function() {
    console.log(`Listening on port ${port}!`)
    })