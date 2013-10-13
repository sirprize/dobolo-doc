var dp = new DatepickerInput({
    value: new Date(),
    format: 'full',
    'class': 'form-control'
}, 'my-datepicker-input');

dp.on('show-calendar', function (ev) {
    console.info('Calendar is now shown');
});

dp.on('hide-calendar', function (ev) {
    console.info('Calendar is now hidden');
});

dp.watch('date', function (prop, oldVal, val) {
    console.info('Date is now ' + val);
});

dp.startup();