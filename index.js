const express = require('express');
const app = express();

const port = 3000;
const obj = {
    status : 2,
    message : 'This is Node Js'
}

app.get('/' , (request , response)  => {
   response.send('Hello I am Nodeman I am Object ' + obj.message);
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

// Javascript Client Side rendering
// Node.js Server Side rendering
























