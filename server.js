var express = require('express'),
    wines = require('./routes/wines');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
});

app.get('/api/wines', wines.findAll);
app.get('/api/wines/:id', wines.findById);
app.post('/api/wines', wines.addWine);
app.put('/api/wines/:id', wines.updateWine);
app.delete('/api/wines/:id', wines.deleteWine);

app.listen(3000);
console.log('Listening on port 3000...');
