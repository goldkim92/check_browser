var express = require('express'),
	useragent = require('express-useragent');

var app = express();


app.set('port',process.env.PORT || 9000);

app.use(useragent.express());

app.get("/",function(req,res) {
	var source = req.headers['user-agent'];
	var output = JSON.stringify(useragent.parse(source));
	//res.send("<h1>Hello from EC2</h1>");
	res.send(output);
});

app.listen(80);

