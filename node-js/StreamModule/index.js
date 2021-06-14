const fs = require('fs')
const http = require('http');
const server = http.createServer();

server.on("request", (req, res) => {

    // 1.Normal reading

    // fs.readFile("input.txt" , "utf-8",(err, data) => {
    //     if(err) return console.log(err);
    //     res.end(data.toString())
    // })

    // 2.READING FROM Stream
    // const rstream = fs.createReadStream("input.txt");
    // rstream.on("data", (chunkData) => {
    //     res.write(chunkData);
    // });
    // rstream.on("end", () => {
    //     res.end();
    // })
    // rstream.on("error", (err) => {
    //     console.log(err);
    //     res.end("File not found");
    // })

    // 3. third way
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res)
})

server.listen(8000, "127.0.0.1")