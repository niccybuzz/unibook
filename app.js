const express = require("express");
const app = express();


app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    
    let url = `http://universities.hipolabs.com/search`;

    let response = await fetch(url);
    let unis = await response.json(); 
  
    
    res.render("index", {uni_data: unis});
});

app.get("/:country", async (req, res) => {
    
    let country = req.params.country;
    let url = `http://universities.hipolabs.com/search?country=${country}`;

    

    let response = await fetch(url);
    let unis = await response.json(); 
  
    
    res.render("index", {uni_data: unis});
});

app.listen(3000, () => {
    console.log("Server is listening on port localhost:3000");
});