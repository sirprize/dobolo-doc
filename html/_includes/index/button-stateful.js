var button = new Button({
    type: 'submit',
    'class': 'btn btn-primary',
    label: 'Load',
    loadingText: 'Loading...',
    resetText: 'Loaded',
    onClick: function (ev) {
        var b = this;
        b.loading();
        setTimeout(function () {
            b.reset();
        }, 2000);
    }
}, 'my-button');

button.startup();