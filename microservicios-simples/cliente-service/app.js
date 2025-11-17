const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  const respuesta = await axios.get('http://saludo-service:3000/saludo');
  res.send('Cliente recibió: ' + respuesta.data);
});

app.listen(4000, () => console.log('Cliente-Service en puerto 4000'));
