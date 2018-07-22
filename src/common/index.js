const ELEMENT_TYPES = {
    CHART:'Chart',
    LABEL: 'Label',
    STAT:'Stat',
    TABLE: 'Table'
};

/**
 * The following method will execute a query against the server and pass in
 * the appropriate parameters
 * @param {string} serverUrl
 * @param {string} connection.client
 * @param {string} connection.version
 * @param {string} connection.user
 * @param {string} connection.host
 * @param {string} connection.password
 * @param {string} connection.port
 * @param {string} connection.database
 * @param {string} connection.sql
 * @param {array} connection.params
 */
const query = function( serverUrl,connection ){
    return fetch(serverUrl,{
        method: 'POST',
        body: JSON.stringify(connection),
        headers: {
          'Content-Type':'application/json'
        }
      }).then( (response) =>{
        return response.json();
      });
};

/**
 * 
 * @param {string} serverUrl 
 * @param {number} interval - Interval to send requests to the server
 * @param {array} requests - Contains request information
 * @param {object} requests.connection - See query function definition for connection
 * @param {string} requests.name - The name of the request
 * @param {function} updateResults
 */
const requestManager = function( serverUrl, interval, requests, updateResults ){

    debugger;
    function executeRequests(){
        debugger;
        let promises = requests.map( request =>{
            return query(serverUrl, request.connection);
        } );

        Promise.all( promises ).then( values =>{
            console.log( 'Requests', values);
            updateResults(values[0]);
        }).catch( err =>{
            console.error('Unexpected Error getting data', err);
        });
    }

    return setInterval(executeRequests,  interval);
}

module.exports = {
    ELEMENT_TYPES,
    query, 
    requestManager
}