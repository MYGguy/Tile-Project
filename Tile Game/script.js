// function wMessage(doubleu) {
//     if (doubleu == 119) {
//             console.log('You have pressed Up ' + doubleu);
//         } else {
//             console.log('Nope');
//         }
//     return;
// };

// function wDectection(ww) {
//     if (wPress === ww) {
//         console.log('You have pressed Up wDectection ' + ww + ' ' + ww); 
//         } else {
//             console.log('Nope wDetection ' + ww);
//         };
//         return;
// };

//---------

// function wPress(w) {
//     document.addEventListener('keydown', wMessage); {
//     // if (wPress === w) {
//     //     console.log('You have pressed Up wDectection ' + w + ' ' + w); 
//     //     } else {
//     //         console.log('Nope wDetection ' + w);
//     //     }
//     };
//     return;
// };

// function wMessage(w) {
//     if (wPress === w) {
//         console.log('You have pressed Up wMessage ' + w + ' ' + w); 
//         } else {
//             console.log('Nope wMessage ' + w);
//         }
//     };

// function init() {
//     wPress(119);
//     wMessage(119);
// };

//--------------

function init() {
    keyDetect(119);
};

function keyDetect() {
    document.addEventListener('keydown', action);

    function action(key) {
        if (key.key == 'w') {
            console.log('You have pressed Up ' + key.key)
        } else {
            console.log('Nope ' + key.key)
        }
        return;
    };
};


init();
