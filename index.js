var express = require('express');
var Gpio = require('onoff').Gpio;
var path = require('path');

var relay1 = new Gpio(5,'out');
var relay2 = new Gpio(6,'out');
var relay3 = new Gpio(13,'out');
var relay4 = new Gpio(19,'out');

var relayStatus = [0,0,0,0];

app = express();

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', function(req,res) {
	res.render("index",{relayStatus:relayStatus});	
});
app.post('/relay1', function(req,res){
	relayStatus[0]=(relayStatus[0]) ? 0:1;
	relay1.writeSync(relayStatus[0]);
	res.render("index",{relayStatus:relayStatus});	
});
app.post('/relay2', function(req,res){
	relayStatus[1]=(relayStatus[1]) ? 0:1;
	relay2.writeSync(relayStatus[1]);		
	res.render("index",{relayStatus:relayStatus});	
});
app.post('/relay3', function(req,res){
	relayStatus[2]=(relayStatus[2]) ? 0:1;
	relay3.writeSync(relayStatus[2]);
	res.render("index",{relayStatus:relayStatus});	
});
app.post('/relay4', function(req,res){
	relayStatus[3]=(relayStatus[3]) ? 0:1;
	relay4.writeSync(relayStatus[3]);	
	res.render("index",{relayStatus:relayStatus});	
});

app.listen(3000,function(){
	console.log("Listening")	
});
