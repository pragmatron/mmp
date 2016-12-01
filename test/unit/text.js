    // Text functions

    const text = document.getElementsByClassName('func')[0].childNodes[1];

    text.onblur = function() {
        if( text.value === '' ) mmap.updateNode('name', text.value = 'Node');
    }

    text.onkeyup = function( e ) {
        e.key === "Enter" ? text.blur() : mmap.updateNode('name', text.value );
    };

    mmap.events.on('nodeselect', function( n ) {
        text.value = n.name;
    });

    mmap.events.on('nodedblclick', function( n ) {
        text.focus();
    });
