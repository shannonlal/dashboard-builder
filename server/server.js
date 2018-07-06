'use strict';
const {query} = require('./connection');


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


query( connection ).then( rst =>{
    console.log( 'RST', rst);
});