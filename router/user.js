
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

route.get('/' , (req , res) => {
    res.status(200).send({
        status : 200,
        message : user
    })
})

route.get('/:id' , (req , res) => {
    const find = user.find(data => req.params.id == data.id);
    if(find){
        res.status(200).send({
            status : 200,
            message : find
        })
    }
    if(!find){
        res.status(200).send({
            status : 500,
            message : 'User Not Found'
        })
    }
})

route.post('/' , (req , res) => {
    user.push({status : 200 , user : {id : user.length + 1 , name : req.body.name}});
    res.status(200).send({
        status : 200,
        id : user.length + 1, 
        message : req.body
    })
})

module.exports = route

// https://freefrontend.com/css-animated-backgrounds/






















