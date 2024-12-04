require("dotenv").config();
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Vercel is running!');
});

app.get("/login",(req,res)=>{
    res.send("Noman Hassan")
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
