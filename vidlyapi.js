const express = require('express');
const { json } = require('express');
const api = express();
api.use(express.json());
const Joi = require('joi');

let genres = [
    {id: 1, genre: 'movie', year: 2011},
    {id: 2, genre: 'comedy', year: 2010}
];

 function validateBody(body) {
     const schema = Joi.object({
         genre: Joi.string().min(3).required(),
         year: Joi.number().min(1950).max(2000).required()
     });
      return schema.validate(body) 
 }



api.get('/api/genres', (req,res) => {
    res.send(genres);
})



api.get('/api/genres/:id', (req,res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) res.status(404).send("No currently a valid genre");
    res.send(genre);
})

api.post('/api/genres', (req,res) => {
    let {error} = validateBody(req.body) 
    if(error) {
        res.status(404).send(error.details[0].message);
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


const port = process.env.PORT || 6000;
api.listen (port, () => console.log(`Listening on ${port}`));