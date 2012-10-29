var dp = new Calendar({
    date: new Date(),
    weekStart: 1
}, 'my-calendar');

dp.watch('date', function (prop, oldVal, val) {
    console.info('New date is ' + val);
});

dp.startup();
dp.show();