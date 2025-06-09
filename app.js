const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const plantsRouter = require('./routes/plants');
const plantController = require('./controllers/plantsController');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/plants', plantsRouter);

app.get('/', (req, res) => {
    const latestPlants = plantController.getLatestPlants();
    res.render('index', {
        title: 'HGA',
        latestPlants
    });
});

app.listen(3000, () => {
    console.log('🌱 App is running at http://localhost:3000');
});