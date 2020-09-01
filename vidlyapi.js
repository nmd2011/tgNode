const express = require('express');
const { json } = require('express');
const api = express();
api.use(express.json());
const Joi = require('joi');

let genres = [
    {id: 1, genre: 'movie', year: 2011},
    {id: 2, genre: 'comedy', year: 2010}
];

// function validateBody(body) {
//     const schema = {
//         id: Joi.string().min(3).required(),
//         year: Joi.number().min(4).max(4).required()
//     };
//     const result = Joi.validate(body, schema);
// }



api.get('/api/genres', (req,res) => {
    res.send(genres);
})



api.get('/api/genres/:id', (req,res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) res.status(404).send("No currently a valid genre");
    res.send(genre);
})

api.post('/api/genres', (req,res) => {
    const schema ={
        genre: Joi.string().min(3).required(),
        year: Joi.number().min(4).max(4)
        };
    const result = Joi.validate(req.body, schema);
   // console.log(result);
    if(result.error) {
        res.status(404).send(result.error.details[0].message);
        return;
    }
    
    const genre = {
        id : genres.length + 1,
        genre : req.body.genre,
        year : req.body.year
    };
    genres.push(genre),
    res.send(genre);
    
})


const port = process.env.PORT || 5050;
api.listen (port, () => console.log(`Listening on ${port}`));