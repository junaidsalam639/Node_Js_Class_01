
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

// Add Krne ke Lye
route.post('/' , (req , res) => {
     user.push({id : user.length + 1 , name : req.body.first_name + " " + req.body.last_name});
    res.status(200).send({
        id : user.length, 
        name : req.body.first_name + " " + req.body.last_name
    })
});


// Delete Krne ke Lye
route.delete('/:id' , (req , res)=>{
    user.splice(req.params.id - 1 , 1);
    res.status(200).send({
        status : 200,
        message : user
    })
})


// Update Krne ke Lye
route.put('/:id' , (req , res)=>{
    if([req.params.id - 1]){
        user[req.params.id - 1].name = 'Edit Change'
        res.status(200).send({
            status : 200,
            message : user
        })
    }
    else{
      res.send({
        status : 500,
        message : 'User Not Found'
      })
    }
})


module.exports = route

// https://freefrontend.com/css-animated-backgrounds/






















