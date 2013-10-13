var alert = new Alert({
    'class': 'alert fade in',
    content: "<strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.",
    closable: true
}, 'my-alert');

alert.startup();

alert.on('close', function (ev) {
    console.info('Alert about to be closed');
});

alert.on('closed', function (ev) {
    console.info('Alert is now closed');
});