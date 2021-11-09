const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/views/index.html")
}); 

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/views/about.html")
});

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/public/views/works.html")
});

// Route not found (404)
app.use((req, res, next) => {
     res.status(404).send({ message: 'Route'+req.url+' Not found.' });
  });
  
// 500 - Any server error
app.use((err, req, res, next) => {
    res.status(500).send({ error: err });
  });

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
