var uA = require('universeA');

uA(function(universeA) {
    echo_universe(universeA);
})

function echo_universe(Universe) {

    for (var person in Universe) {
        var p = Universe[person];
        if (typeof(p) == 'object') {
            console.log(__filename, ": person ", person, ', name: ', p.name);
            if (p.hasOwnProperty('universes')) {
                console.log(__filename, '... they have ', p.universes.length, ' universes');
                p.universes.forEach(function(u) {
                    console.log(__filename, ': universe ', u);
                })
            }
        }
    }
}