function keypress(press) {
    if (press == 119) {
        console.log('You have pressed Up');
    } else {
        console.log('Nope');
    }
        return;
};

var press = addEventListener('keydown', keypress);

keypress();
