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
    keyDetect();
};

function keyDetect() {
    document.addEventListener('keydown', action);

    function action(keyPress) {
        
        var getColumn = document.querySelector('column');

        if (keyPress.code == 'KeyW') {
            console.log('You have pressed Up ' + keyPress.key);

            for(let i = 0; i < stylesheet.cssRules.length; i++) {
                if(stylesheet.cssRules[i].selectorText === '.column') {
                boxParaRule = stylesheet.cssRules[i];
                }
            }

            function moveTilesUp() {
                document.style.setproperty.getColumn('background-color', 'rgb'('555'));

                moveTilesUp();

            };
        
        } else {
            console.log('Nope ' + keyPress.key)
        }
        return;
    };
};

init();
