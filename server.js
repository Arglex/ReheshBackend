var express = require('express');
const { connect } = require('http2');
var sql = require("mysql");
var app = express();

app.get('/', function(req, res){
    
    var config = {
        user: 'ReportServerViewer',
        password: 'ReportServerViewer',
        server: '180.108.100.51',
        database: 'FLOW',
        port: 1433
    };

    sql.connect(config, function(err){
        if (err) console.log(err);

        var request = new sql.Request();

        request.query('select * from Soldier', function (err, recordset){

            if (err) console.log(err)

            res.send(recordset);
        });
    });
})