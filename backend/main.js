const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/apiTraces')
const { port } = require('./config');
require('./database/dbConfig.js');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());
app.use('/api', router);

app.listen(port, () => {
    console.log('Serwer listening on port: ' + port);
})