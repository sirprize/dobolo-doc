var button = new Button({
    type: 'submit',
    'class': 'btn btn-primary',
    label: 'Load',
    loadingText: 'Loading...',
    resetText: 'Loaded',
    onClick: function (ev) {
        this.loading();
        setTimeout(lang.hitch(this, function () {
            this.reset();
        }), 2000);
    }
}, 'my-button');

button.startup();