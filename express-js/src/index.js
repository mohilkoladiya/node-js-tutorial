const express = require('express');
const app = express();
const port = 8000;
const hbs = require('hbs')
const requests = require('requests')
//built in middleware ===============>
// app.use(express.static("../public"));

// app.get("/", (req, res) => {
//     res.send("Hello world from the notorious")
// })
// app.get('/about', (req, res) => {
//     res.send("Hello my self mohil koladiya im the ceo of google")
// })
// app.listen(8000, () => {
//     console.log("server listning");
// })


// built in  middleware========================> 

// app.use(express.static("../public"));


//set a partial for reusable javascript component


// to set the view engine
app.set('view engine', 'hbs');
app.set('views', '../templates/views');
hbs.registerPartials("../templates/partials")

app.get("/", (req, res) => {
    res.render("index");
})
app.get("/about", (req, res) => {
    // res.render("about");
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=e952dab5ecdae4f43f783773d6113671`)
        .on("data", (chunkData) => {
            const weatherData = JSON.parse(chunkData)
            const arrData = [weatherData]
            console.log(`city name is  ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
            res.write(arrData[0].name)
        })
        .on("end", (err) => {
            if (err) console.log("connection closed due to errors", err);
            res.end()
        })
})
app.get("*", (req, res) => {
    res.render('404', {
        errorComment: "Page not found"
    })
})

app.get("/", (req, res) => {
    res.send('hello from the express server')
})

app.listen(port, () => {
    console.log(`listning to the port ${port}`);
})

