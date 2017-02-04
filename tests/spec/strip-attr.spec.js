var stripAttr = require( '../../lib/_strip-attr' );

describe( 'Test `stripAttr()` Function', () => {

    it( 'Should remove the target attribute', () => {
        var html = '<img src="file.jpg">';
        var attrs = [ 'src' ];

        expect( stripAttr( html, attrs ) ).toBe( '<img>' );
    } );


    it( 'Should not affect "untargeted" attributes.', () => {
        var html = '<a href="http://www.shortfuture.co" class="the-class" target="_blank">Text</a>';
        var attrs = [ 'href', 'class' ];

        expect( stripAttr( html, attrs ) ).toBe( '<a target="_blank">Text</a>' );
    } );

} );