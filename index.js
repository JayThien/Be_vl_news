'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const newsRoutes = require('./routes/newsRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', newsRoutes.routes);
app.use('/api', userRoutes.routes);



app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port )
});