const app = require('express');
const route = app.Router();


const user = [
    {
        id : 1,
        name : 'Junaid'
    },
    {
        id : 2,
        name : 'Faiz'
    },
    {
        id : 3,
        name : 'Atta'
    },
    {
        id : 4,
        name : 'Taha'
    },
    {
        id : 5,
        name : 'Sahal'
    },
]

route.get('/' , (req , res) =>{
   res.status(200).send({
     status : 200,
     message : user,
   })
})


route.get('/:id' , (req , res) =>{
    const users = user.find(data => data.id == req.params.id)
    if (!users) {
        res.status(500).send({ status: 500, error: true, msg: "user not found" })
    }
    if (users) {
        res.status(200).send({ status: 200, users })
    }
})

route.post('/' , (req , res) =>{
   console.log(req.body);
   user.push({id : user.length + 1  , name : req.body.name })
    res.status(200).send({ status: 200, user : {name :req.body.name , id : user.length + 1 } });
    console.log(user);
})


module.exports = route


// https://freefrontend.com/css-animated-backgrounds/


