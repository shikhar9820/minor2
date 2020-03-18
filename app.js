/* -------------------------------------------------------------------------- */
/* Define port number and IP address and other constants */
const APP_PORT = 3000;
const APP_IP = "127.0.0.1";
const INCONVENIENCE = "<br/><br/>\
    <h2 style='text-align: center;'>Sorry For The Inconvenience</h2>";
/* -------------------------------------------------------------------------- */
/* Required Packages */
var express    = require("express");
var bodyParser = require("body-parser");
//var mongoose   = require("mongoose");

const app = express();

//mongoose.set("useNewUrlParser", true);
//mongoose.set("useUnifiedTopology", true);
//mongoose.connect("mongodb://localhost/CO_dot_io");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));

/* -------------------------------------------------------------------------- */
/* Routes goes here */
app.get("/", function(req, res){
    res.render("index",function(err, htm){
        if(err){
            res.send(INCONVENIENCE);
            console.log(err);
        }
        else {
            res.send(htm);
            console.log("Index page called.");
        }
    });
});


app.get("/login", function(req, res){
    res.render("login",function(err, htm){
        if(err){
            res.send(INCONVENIENCE);
            console.log(err);
        }
        else {
            res.send(htm);
            console.log("Login page called.");
        }
    });
});



app.get("/register", function(req, res){
    res.render("register",function(err, htm){
        if(err){
            res.send(INCONVENIENCE);
            console.log(err);
        }
        else {
            res.send(htm);
            console.log("Register page called.");
        }
    });
});


/* -------------------------------------------------------------------------- */
/* App Listens */
app.get("*", function(req, res){
    res.render("error404",function(err,htm){
        if(err){
            res.send(INCONVENIENCE);
            console.log(err);
        }
        else {
            res.send(htm);
            console.log("Error page called.");
        }
    });
});


app.listen(APP_PORT,
    APP_IP,
    () => console.log(
        "CO.io is listening at:\n - Port: " + APP_PORT +
        "\n - IP: " + APP_IP + 
        "\n\nClick: http://"+APP_IP+":"+APP_PORT +
        "\n\n"
    ));
/* -------------------------------------------------------------------------- */
