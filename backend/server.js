const express = require("express")
const app = express();

app.use(express.static('public'));

app.get('/' , function (req, res) {

    res.send('Home Page');
});

app.listen(3000, function(){
    console.log('Listening to port 3000');
});