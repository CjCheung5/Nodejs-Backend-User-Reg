import express from 'express';
import findUser from './db/findUser.js';
import inserUser from './db/insertUser.js';
import updateUser from './db/updateUser.js';
import deleteUser from './db/deleteUser.js';
import bodyParser from 'body-parser';
import { response } from 'express';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/' , function (req, res) {

    res.send('Home Page');
});

app.post('/api/insertuser' , function (req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    res.send(inserUser(firstName, lastName));
});

app.get('/api/finduser/' , function (req, res) {
    var firstName = req.query.firstName;
    var lastName = req.query.lastName;
    res.send(findUser(firstName,lastName));

});

app.get('/api/updateuser/' , function (req, res) {
    var firstName = req.query.firstName;
    var lastName = req.query.lastName;
    res.send(updateUser(firstName,lastName));

});

app.get('/api/deleteuser/' , function (req, res) {
    var firstName = req.query.firstName;
    var lastName = req.query.lastName;
    res.send(deleteUser(firstName,lastName));

});


app.listen(8000, function(){
    console.log('Listening to port 8000');
});