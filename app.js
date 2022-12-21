const { response } = require('express');
const express = require('express');
const https = require ('https');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req,res)=>{
    const querry = req.body.cityName
    const apiKey = 'daed2e29e3f0b7f6015dec4fb96f94aa'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+querry+'&appid='+apiKey+'&units=metric#'
    https.get(url, (response)=>{
        // console.log(response.statusCode);
        response.on('data', (data)=>{
            // console.log(data);
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.main.temp;
            const des = weatherData.weather[0].description
            // console.log(des);
            res.send("<h2>Temperature in "+querry+" is " + temp + "°c</h2><p>The Weather Description is " + des +"</p>")
        })
    })

})


app.listen(3000,()=>console.log("Server Running"))