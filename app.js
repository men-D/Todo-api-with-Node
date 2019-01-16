var express     = require("express"),
    app         = express(),
    todosRoutes = require("./routes/todos"),
    bodyParser  = require("body-parser");
    

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/todos", todosRoutes);
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.sendFile("index.html");
});


var PORT = process.env.PORT;
app.listen(PORT, process.env.IP, function(){
    console.log("app is running on port " + PORT);
})