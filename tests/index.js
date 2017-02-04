// IMPORT MODULES
var Jasmine = require( 'jasmine' );


// DECLARE AND CONFIGURE
var jasmine = new Jasmine();

jasmine.loadConfigFile( __dirname + '/spec/support/jasmine.json' );
jasmine.onComplete( ( passed ) => {
    if ( passed ) {
        console.log( 'All tests passed.' );
    } else {
        console.log( 'Whoops! Not all tests passed.' );
    }
} )


// RUN TESTS
jasmine.execute();