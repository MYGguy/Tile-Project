//keypress2 = new KeyboardEvent('keydown', 'KeyW');

/*
function keypress() {
    addEventListener.KeyboardEvent('keydown', 119);
    return Boolean;
};
*/
// numw = 119;

// class keypress {
//     constructor(key) {
//         this.key = key;
//     }
// }

// new keypress('119');

// '119'.keypress();


keys = 0x0011;

function keypress(keys) {
    if (
    document.addEventListener('keydown', keys)) {
        console.log('You have pressed Up');
    } else {
        console.log('Nope')
    };
    return Boolean;
};

function message() {
        if (keypress == true) {
        console.log('You have pressed Up');
    } else {
        console.log('Nope');
    };
};

keypress(keys);

message();

//The second parameter of the event listener is a function.
