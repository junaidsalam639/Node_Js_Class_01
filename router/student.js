const route = require('express');
const app = route.Router();

const student = [{
    "id": 1,
    "first_name": "Bradley",
    "last_name": "Baiden",
    "email": "bbaiden0@blog.com"
  }, {
    "id": 2,
    "first_name": "Dory",
    "last_name": "Fitchen",
    "email": "dfitchen1@trellian.com"
  }, {
    "id": 3,
    "first_name": "Vernice",
    "last_name": "Fick",
    "email": "vfick2@instagram.com"
  }, {
    "id": 4,
    "first_name": "Dorey",
    "last_name": "Lawty",
    "email": "dlawty3@soup.io"
  }, {
    "id": 5,
    "first_name": "Ellary",
    "last_name": "Haker",
    "email": "ehaker4@foxnews.com"
  }, {
    "id": 6,
    "first_name": "Audrye",
    "last_name": "Hucquart",
    "email": "ahucquart5@bluehost.com"
  }, {
    "id": 7,
    "first_name": "Robert",
    "last_name": "Farmiloe",
    "email": "rfarmiloe6@marketwatch.com"
  }, {
    "id": 8,
    "first_name": "Linoel",
    "last_name": "Hirche",
    "email": "lhirche7@ihg.com"
  }, {
    "id": 9,
    "first_name": "Freddi",
    "last_name": "Archibould",
    "email": "farchibould8@exblog.jp"
  }, {
    "id": 10,
    "first_name": "Leupold",
    "last_name": "Foukx",
    "email": "lfoukx9@independent.co.uk"
  }]
  


app.get('/' , (req , res)=>{
  res.send(student)
})

app.post('/' , (req , res) =>{
    res.send(student);
    console.log(req.body.last_name);
})

module.exports = app

