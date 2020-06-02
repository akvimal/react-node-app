const express = require('express');
const app = express();

app.get('/api/greeting',(req,res)=>{
    res.send({greeting:'Welcome React Node App'})
});

app.listen(process.env.PORT || 5000, () => {
    console.log('Node Server Up and Listening ...');
    
});