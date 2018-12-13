import Axios from 'axios';

var isDebug = false;
var debug = console.log.bind(window.console);
if (!isDebug) {
  debug = function() {}
}

export default {
  genericHandler : function(options, session_id, callback) {
      var service = options.url;
      var config = {
        method: options.method || 'GET',
        url: options.url,
        headers: {
          'Content-Type': options.headers
            ? options.headers['Content-Type']
            : 'application/json'
        },
        data: options.data || null,
        responseType: options.responseType || 'json'
      };
      if (options.authorization !== undefined) {
        config.headers['Authorization'] = options.authorization;
      }
      if (session_id)
        config.headers['Session-Id'] = session_id;
      Axios(config).then(function(response) {
        debug('successful call :: ' + (options.method || 'GET') + ' \'' + service + '\'', response.status, response.data);
        callback(null, response.data);
      }).catch(function(error) {
        if (error.response instanceof Error) {
          // Something happened in setting up the request that triggered an Error
          console.error('execution error :: ' + (options.method || 'GET') + ' \'' + service + '\'', error.response.message, error.response);
          callback(error.response.message, null);
        } else {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log( error );
          if ( ( error.response.status === 404 || error.response.statusText === "Not Found" ) ) {
            console.log( service );
            console.error('resource not found :: ' + (options.method || 'GET') + ' \'' + service + '\' [' + error.response.status + ']', (error.response.data || {}), error.response.statusText);
            callback( error.response.statusText, error.response.data );
          }
          else {
            console.error('API error :: ' + (options.method || 'GET') + ' \'' + service + '\' [' + error.response.status + ']', (error.response.data || {}), error.response.statusText);
            if( error.response.data ){
              if( error.response.data.error !== undefined ){
                if( error.response.data.error.errors ){
                  console.error( 'Unauthorized Error :: ' + ( options.method ) + ' \'' + service + '\' [' + error.response.status + ']', (error.response.data || {}), error.response.statusText );
                  callback( error.response.statusText, error.response.data, error.response.status );
                }
              }
            }
            callback(error.response.statusText, error.response.data, error.response.status);
          }
        }
    });
  }
}
