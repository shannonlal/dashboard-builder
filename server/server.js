'use strict';
const express = require( 'express');
const {query} = require('./connection');
const SERVER_PORT = 3000;


//TODO define parameters

//Look at parsing algorithm

var connection = {
    client: 'pg',
    connection : {
        user: 'masteruser',
        password: 'connecttoplotly',
        database: 'plotly_datasets',
        port: 5432,
        host: 'readonly-test-postgres.cwwxgcilxwxw.us-west-2.rds.amazonaws.com'
    },
    query:{
        sql:'SELECT * FROM alcohol_consumption_by_country_2010 LIMIT 10',
        params:[]
    }
};

const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));


/**
 * @swagger
 * /
 * post:
 *      description: Executes Query based on parameters
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: client
 *            description: Database Client
 *            in: params
 *            required: true
 *            type: string  
 *          - name: version
 *            description: Database Version
 *            in: params
 *            required: false
 *            type: string  
 *          - name: user
 *            description: DB User
 *            in: params
 *            required: true
 *            type: string  
 *          - name: host
 *            description: DB host
 *            in: params
 *            required: true
 *            type: string 
 *          - name: port
 *            description: DB port
 *            in: params
 *            required: true
 *            type: string 
 *          - name: password
 *            description: DB password
 *            in: params
 *            required: true
 *            type: string 
 *          - name: database
 *            description: DB Name
 *            in: params
 *            required: true
 *            type: string 
 *          - name: sql
 *            description: SQL to execute
 *            in: params
 *            required: true
 *            type: string
*           - name: params
 *            description: SQL parameters
 *            in: params
 *            required: true
 *            type: string 
 *      responses:
 *          200:
 *              description: Notification sent
 *          400:
 *              description: Invalid Parameters
 *          500:
 *              description: Unexpected Error
 */
app.post('/', function(req, res) {

    let params = {
        client: req.body.client,
        version: req.body.version,
        connection:{
            user:req.body.user,
            host:req.body.host,
            password:req.body.password,
            port:req.body.port,
            database:req.body.database
        },
        query:{
            sql:req.body.sql,
            params:req.body.params
        }
    }

    query( params ).then( response =>{
        res.header("Content-Type", "application/json");
        //logger.info("post /api/shopscreen/devices/deviceactivity/notifydevice");
        res.status(200).send(response);
    }).catch( err =>{
        //logger.error('post /api/shopscreen/devices/deviceactivity/notifydevice', err);
        //let error = JSON.parse(err);
        res.header("Content-Type", "application/json");
        res.status(400).send(err);
    });

});

app.listen(SERVER_PORT, () => console.log(`Server started on port ${SERVER_PORT}`));
