const knex = require( 'knex');


let db = require('./db.json')[process.env.NODE_ENV]
let knex = require('knex')({
	client: 'pg',
	version: '7.2',
	connection: db
})
module.exports = {
	knex: knex
}
