var express=require('express');
var router=express.Router();
var mysql=require('mysql');

router.get('/get-name',function(req,res){
    res.send("Hellow...Sachin");
})

//url:http://localhost:2020/std/get-name
//method:get

router.get('/get-std',function(req,res){
    //take the data from req
    const {name,loc} =req.query;
    //var output="this is...."+name + "  am from " +loc;
    var output=`this is....${name}    am from  ${loc}`
    res.send(output);
})

router.post('/std-reg',function(req,res){
    const {name,uid,pwd,gender,hobbies,country,address}   =req.body;
    var con=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'school',
        port:3306
    })
    con.connect(function(err){
        if(err){
            res.send('db con error')
        }else{
           var q=`INSERT into student(name,uid,pwd,gender,hobbies,country,address) VALUES('${name}','${uid}','${pwd}','${gender}','${hobbies}','${country}','${address}')`
           con.query(q,function(e,s){
               if(e){
                   res.send(e);
               }else{
                   res.send(s);
               }
           })
        }
    })

})
module.exports=router;

/*
url: http://localhost:2020/std/std-reg
method:post
input={
   "name":"s2",
   "uid":"u2",
   "pwd":"p2",
   "gender":"F",
   "hobbies":"FB",
   "country":"US",
   "address":"Tx"
}
output:{
"fieldCount": 0,
"affectedRows": 1,
"insertId": 2,
"serverStatus": 2,
"warningCount": 0,
"message": "",
"protocol41": true,
"changedRows": 0
}

*/