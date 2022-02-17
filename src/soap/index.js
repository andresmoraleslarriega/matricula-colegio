var soap = require('soap');
const path = require('path');


var url = path.join(__dirname, '../wsdl/server.wsdl');

var args = {name: 'value'};
soap.createClient(url, function(err, client) {
   //client.MyFunction(args, function(err, result) {
   //    console.log(result);
   //});
});

module.exports = soap;