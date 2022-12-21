const { response } = require('express');
const express = require('express');
const https = require ('https');

const app = express();

app.get('/', (req,res)=>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Irosin&appid=daed2e29e3f0b7f6015dec4fb96f94aa&units=metric#'
    https.get(url, (response)=>{
        // console.log(response.statusCode);
        response.on('data', (data)=>{
            // console.log(data);
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.main.temp;
            const des = weatherData.weather[0].description
            console.log(des);
            
        })
    })
    res.send("Testing")
})

app.listen(3000,()=>console.log("Server Running"))