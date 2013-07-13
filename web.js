var express = require('express')
,   app = express()
,   fs = require('fs');
//should work

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
