const express = require('express');
const bodyParser= require('body-parser');
const routes = require('./Routes/api');

// var list = new Array();
//set up express
const app = express();

app.use(bodyParser.json());

//initialize routes
app.use('/api',routes);

//Error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({
        error:err.message
    })
});

// app.get('/api', function(req , res){
//     console.log('GET Request')
//     res.send({
//         name:'Naveen'
//     });
// })

//listen for requests
app.listen(process.env.port ||4000, function(){
    console.log('Now listening!');
})
