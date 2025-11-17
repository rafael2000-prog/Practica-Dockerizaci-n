const express = require('express');
const app = express();

app.get('/saludo', (req, res) => {
  res.send('👋 Hola desde el servicio de saludo!');
});

app.listen(3000, () => console.log('Saludo-Service en puerto 3000'));
