const express = require('express');
const app = express();
app.use(express.json());
const courses = [{id:1, name:'English'},
                 {id:2, name:'Math'}, 
                 {id:3, name:'History'},
                 {id:4, name:'Shop'}
                ];
function cap(item) {
    let third = `${item.charAt(0).toUpperCase()}${item.slice(1)}`;
    return third;
}

app.get('/', (req,res) => {
    res.send("HomePage");
   })

app.get("/page1", (req, res, next) => {
    res.json(["Toy","Lisa","Michael","Ginger","Food",{id:1, location: "home"}]);
});

app.get('/courses', (req,res) => {
    res.send(courses);
})

app.get('/courses/:name', (req,res) => {
  //  let thing =(cap(req.params.name));
    //console.log(thing);
    let course = courses.find(n => n.name === req.params.name);
   // console.log(course);
    if(!course) res.status(404).send('The course was not found');
    res.send(course);
})

app.post('/courses/', (req,res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})