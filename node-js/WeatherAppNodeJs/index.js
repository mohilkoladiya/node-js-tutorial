const fs = require('fs')
const http = require('http')
var request = require('requests');


const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let temprature = tempVal.replace("{%tempval%}", orgVal.main.temp)
    temprature = temprature.replace("{%tempmin%}", orgVal.main.temp_min)
    temprature = temprature.replace("{%tempmax%}", orgVal.main.temp_max)
    temprature = temprature.replace("{%location%}", orgVal.name)
    temprature = temprature.replace("{%country%}", orgVal.sys.country)
    temprature = temprature.replace("{%tempStatus%}", orgVal.weather[0].main)
    return temprature
}

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        request('http://api.openweathermap.org/data/2.5/weather?q=Surat&appid=e952dab5ecdae4f43f783773d6113671')
            .on("data", (chunkData) => {
                const weatherData = [JSON.parse(chunkData)]
                const realTimeData = weatherData.map(val => replaceVal(homeFile, val)).join("")
                res.write(realTimeData)
            })
            .on("end", (err) => {
                if (err) console.log("connection closed due to errors", err);
                res.end()
            })
    }
});

server.listen(8000, "127.0.0.1")