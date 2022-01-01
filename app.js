const express=require('express');
const app = express();

app.use(express.static("Public"));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/Index.html");
});

app.listen(process.env.PORT || 7000, ()=>{
    console.log("server running on port 7000");
});