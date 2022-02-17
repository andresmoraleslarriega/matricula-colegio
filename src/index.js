require('dotenv').config();
const app = require('./server/app');
const port = process.env.PORT || 4001;
const logger = require('./server/logger');

const soap = require('./soap/index');
app.listen(port , () => {
  logger.info(`Servidor Iniciado en puerto ${port}`)

  //soap.listen(app, port , () => {
  //  logger.info(`SOAP Iniciado en puerto ${port}`)
  //  });
});