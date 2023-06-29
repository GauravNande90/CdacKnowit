var exp = require('express');
var bp = require('body-parser');
var app = exp();

app.use(bp.urlencoded({extended: false }))

 
app.get('/getForm',function(req,resp){
    resp.sendFile(__dirname+"/getForm.html")
})

app.post('/getDataTable',function(req,resp){
     
    var name = req.body.name1;
    var bdate = req.body.bdate1;
    var email = req.body.email1;
    var qual = req.body.qual1;
    console.log(name);
   
    str="<table border=1 style ='border-collapse: collapse;'>"
    str+="<tr><td>"+name+"</td>"+"<td>"+bdate+"</td>"+"<td>"+email+"</td>"+"<td>"+qual+"</td></tr>";
    console.log(str)
    resp.send(str)
})

app.listen(9000,function(){
    console.log("Server 9000 is started.....")
})

