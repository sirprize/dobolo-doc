var makeButton = function (id, label) {
    return new Button({
        'class': 'btn',
        label: label,
        mode: 'radio',
        group: 'my-group'
    }, id);
}

makeButton('l', 'Left').startup();
makeButton('m', 'Middle').startup();
makeButton('r', 'Right').startup();

