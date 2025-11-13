const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 5000;

app.set('view engine', 'pug');

app.set('views','./views');

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req,res)=>{
    res.render('index');
});

app.listen( port , ()=>{
    console.log(`Servern är igång på port ${port}`);
});


