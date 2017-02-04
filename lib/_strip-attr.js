module.exports = function( content, attrs ) {
    if ( !content || !attrs ) {
        return null;
    }

    /// TODO:
    // - Update `reduce()` callback to handle non-string values. 
    var attrString = attrs.reduce( ( a1, a2 ) => { return `${a1}|${a2}`} );

    var pattern = `\\s?(${attrString})\=\"[^"]*\"`;

    var expression = new RegExp( pattern, 'gmi' );

    return content.replace( expression, '' );
}