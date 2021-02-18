const express=require('express');
const app = express();

app.use(express.static("Public"));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("server running on port 3000");
});