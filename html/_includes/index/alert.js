var alert = new Alert({
    'class': 'alert-success fade in',
    content: "<strong>Oh yeah!</strong> That's just lookin' fine",
    closable: true
}, 'my-alert');

alert.startup();

alert.on('close', function (ev) {
    console.info('Alert about to be closed');
});

alert.on('closed', function (ev) {
    console.info('Alert is now closed');
});