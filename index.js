var u = require('universes');


u('universeA', function(uA) {
    uA(echo_universe);
});

u('universeB', function(uB){
    uB(echo_universe);
})

function echo_universe(Universe) {

    for (var person in Universe) {
        var p = Universe[person];
        if (typeof(p) == 'object') {
            console.log(__filename, ": person ", person, ', name: ', p.name);
            if (p.hasOwnProperty('universes')) {
                console.log(__filename, '... they have ', p.universes.length, ' universes');
                p.universes.forEach(function(uname) {
                    u(uname, function(my_universe) {
                        console.log(__filename, '... and here is ', uname, ': ');
                        my_universe(console.log);
                    });
                })
            }
        }
    }
}