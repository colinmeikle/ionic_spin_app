
var appRouter = function(app) {
    
   app.get("/data",function(req,res) {
  var data = {
        "speed": "27",
        "revs": "1234",
        "temp": "20",
        "wheeltemp": "24"
    }
   
        return res.send(data);
});
 

app.post("/reset", function(req, res) {   
    //could reset to a value ?
  var data = {
        "speed": "0",
        "revs": "0",
        "temp": "20",
        "wheeltemp": "24"
    }
  console.log("reset done");
   return res.send(data);
});
    
}
module.exports = appRouter;