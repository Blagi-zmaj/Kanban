const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Main page works!');
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Serwer listening on port 3000');
})