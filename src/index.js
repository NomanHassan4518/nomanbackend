require("dotenv").config();
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Vercel is running!');
});

app.get("/login",(req,res)=>{
    res.send("Noman Hassan")
})

app.get("/twitter",(req,res)=>{
    res.send("NomanHassan.com")
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
