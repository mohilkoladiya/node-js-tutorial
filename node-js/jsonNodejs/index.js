const fs = require('fs');
const bioData = {
    name: "Mohil",
    age:20,
    hobby:"boxing"
}

const jsonData = JSON.stringify(bioData);

fs.writeFile("json1.json" , jsonData , (err) => {
    console.log("done");
})

fs.readFile("json1.json" ,"utf-8" ,  (err ,data) => {
    const fileData = JSON.parse(data)
    console.log(fileData);
})