'use strict'
const knex = require('knex');
const co = require('co');
//const logger = require('winston');


/**
 * The following method will open a connection to the appropriate
 * datasource to perform the query
 * 
 * @param {object} param
 * @param {string} params.client
 * @param {string} params.version
 * @param {string} params.connection.user
 * @param {string} params.connection.host
 * @param {string} params.connection.password
 * @param {string} params.connection.port
 */ 
const connect = function( params ){
    var client = require('knex')(params);
    return client;
};

/**
 * The following method will extra the key elements from a knex sql 
 * response
 * @param {object} resp 
 * @param {array} resp.fields
 * @param {array} resp.rows
 * @return {columnNames, rows}
 */
const parseKnexSQL = function( resp ){

    let rows = [];
    let columnNames = [];
    if( typeof resp !== 'undefined' && typeof resp.rows !== 'undefined' && resp.fields !== 'undefined'){

        columnNames = resp.fields.map( field => {
            return {name: field.name, type: field.format};
        })
        rows = resp.rows;
    }
    return {columnNames, rows};

}

/**
 * The following method will open a connection to the provided datasource
 * and execute a query
 * @param {object} param
 * @param {string} params.client
 * @param {string} params.version
 * @param {string} params.connection.user
 * @param {string} params.connection.host
 * @param {string} params.connection.password
 * @param {string} params.connection.port
 * @param {string} params.connnection.database
 * @param {string} params.query.sql
 * @param {array} params.query.params
 */
const query = function(params){
    return co(function*() {
        try{
            let client = connect( params );
            
            let resp = yield client.raw( params.query.sql, params.query.params);

            return parseKnexSQL( resp );
        }catch( err ){
             //logger.error(`Unexpected error query ${err}`);
             console.log( 'error',err);
             throw err;
        }
 
    });
}


module.exports = {
    query: query,
}
