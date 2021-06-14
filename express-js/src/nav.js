const express = require('express');
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.write("<h1>welcome to my home page</h1>")
    res.send()
})
app.get("/about", (req, res) => {
    console.log(res);
    res.status(200).send("Welcome to my about page")
})
app.get("/contact", (req, res) => {
    res.send("welcome to my contact page")
})
app.get("/temp", (req, res) => {
    res.json(
        [
            {
                id: 1,
                name: 'mohil'
            },
            {
                id: 1,
                name: 'mohil'
            },

        ]
    )
})
app.listen(port, () => {
    console.log("server listning");
})