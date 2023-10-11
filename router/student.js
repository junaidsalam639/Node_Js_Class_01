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

// add krne ke lye
app.post('/' , (req , res) =>{
  student.push({
    "id" : student.length + 1,
    "first_name" : req.body.first_name,
    "last_name" : req.body.last_name,
    "email" : req.body.email
  })
    res.send(student);
});

// update ke lye
app.put('/:id' , (req , res) =>{
  let a = req.params.id.toString() - 1;
  student[a].first_name = 'Zeeshan'
  student[a].last_name = 'Ahmed'
  student[a].email = 'Zeeshan@gmail.com'

    res.send(student);
});

// delete krne ke lye
app.delete('/:id' , (req , res) =>{
  let a = req.params.id.toString() - 1;
  student.splice(a , 1);
  res.send(student)
});

module.exports = app







