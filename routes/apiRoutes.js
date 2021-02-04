const router = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json')
const util = require('util');

router.get('/notes', (req, res) => {
    res.json(db);
});


router.post('/notes', (req, res) => {
    const {title, text} = req.body;
    const newNote = {
        title: title,
        text: text
    }

router.delete()

    let tempdb = [...JSON.parse(fs.readFileSync('db/db.json', 'utf-8'))];
    console.log(`tempdb: ${tempdb}`)

    tempdb.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(tempdb)); 
    res.redirect(req.get('referer'));
    res.end();
})
    
module.exports = router;