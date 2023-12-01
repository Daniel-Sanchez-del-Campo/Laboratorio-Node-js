const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hala Madrid!!!');
});

app.get('/Alfonso',(req,res)=>{
    res.send('El Madrid va a ganar la Champion');
});

app.listen(3000,()=>{
    console.log('Mozo, te escucho por el puerto 3000');
});
