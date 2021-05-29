const path = require('path');
const fs = require ('fs');
const { v4: uuidv4 } = require('uuid');
const { json } = require('express');

module.exports = (app) =>{
   app.get('/api/notes', (req, res) => {
       console.log('/API/NOTES' )
    fs.readFile('./db/db.json', (err, data) =>{
        if(err) throw err
        res.send(data)
    })
   });

app.post('/api/notes', (req,res) =>{
    fs.readFile('./db/db.json', (err,data) =>{
        if(err) throw err
        var jsonData= JSON.parse(data)
        req.body.id = uuidv4();
        jsonData.push(req.body)
        console.log(jsonData)
        fs.writeFile('./db/db.json', JSON.stringify(jsonData), err =>{
            if (err) throw err
            res.send ('Succes!')
        })
    })
})

};
