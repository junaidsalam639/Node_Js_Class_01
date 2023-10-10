const express = require('express');
const app = express();
const userRoutes = require('./router/user');
const morgan = require('morgan');
const port = 3000;

const middleware = (request , response , next) => {
    console.log('I am Middleware');
    next();
}

app.use(morgan('tiny'));
app.use(express.json());
app.use('/user' , userRoutes);
app.use(middleware);

app.get('/' , (request , response)  => {
   response.send({
    status : 200,
    message : 'This is Node Js'
});
});


//Dynamic id / params
app.get('/:id' , (request , response)  => {
    response.send({
     status : 200,
     message : 'You Path Is ' + request.params.id
 });
 });

// About ke route Jese hi aeega mera middleware chal jaega
app.get('/about'  , (request , response)  => {
   response.send({
    status : 200,
    message : 'This is a About Page'
});
});


app.listen(port , ()=>{
    console.log('Terminal Is On ' + port);
})



// asynchronous / non-blocking 
// synchronous  / blocking 
// we have four types of request on server / Get / Put / Post / Delete / Patch
//command 
// step 01 : npm init
// step 02 : npm i express
// step 03 : npm i nodemon -g
// step 04 : Run Terminal / node index.js
// step 05 : Run Terminal / nodemon index.js
// step 06 : Install Thunder Client
// step 07 : npm i morgan

// Javascript Client Side rendering
// Node.js Server Side rendering

// user ne request kya router ke pass aya phir request gae controller ke pass controller ne bheja service ke pass phir service ne response dya phir response gya controller ke pass controller ne response bhej dya user ko

// request se service ke pass arha he service se response ja rha he
//service /  route / controller



//Get / Dikhane ke lye
//Put / Update Krne ke lye
//Post / Add krne ke lye
//Delete / Delete krne lye

