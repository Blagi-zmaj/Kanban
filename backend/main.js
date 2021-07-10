const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/apiTraces')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());
app.use('/api', router);

app.listen(process.env.PORT || 3000, () => {
    console.log('Serwer listening on port 3000');
})