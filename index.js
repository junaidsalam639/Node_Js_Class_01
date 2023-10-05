const express = require('express');
const app = express();


const port = 2000;

app.get('/' , (req , res ) => {
     res.send('Hello World nodemon!'); 
});

app.listen(port , ()=>{
    console.log(`Terminal Run is ${port}`);
});


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


















