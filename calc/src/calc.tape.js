const test = require('tape');
const i = require('./calc');

test('overeni s vypisem od ceske sporitelny za rok 2017', function(assert) {

    const total = 2295722.39;
    const rate = 2.79;
    const monthlyPayment = 10021;

    const calc = i.init(rate, monthlyPayment);

    const res = calc.aaa(total, 12);

    // vysledky za rok 2017
    const CS_SUM_END = 2239680.31;
    const CS_INTEREST_YEAR = 64209.92;
    const CS = [
        { rate: 5515.47, payment: 4505.53 }, //1
        { rate: 4971.94, payment: 4971.94 }, //2
        { rate: 5492.52, payment: 4528.48 }, //3
        { rate: 5304.81, payment: 4716.19 }, //4
        { rate: 5470.31, payment: 4550.69 }, //5
        { rate: 5283.27, payment: 4737.73 }, //6

        { rate: 5447.99, payment: 4573.01 }, //7
        { rate: 5437.01, payment: 4583.99 }, //8
        { rate: 5250.96, payment: 4770.04 }, //9
        { rate: 5414.53, payment: 4606.47 }, //10
        { rate: 5229.16, payment: 4791.84 }, //11
        { rate: 5391.95, payment: 4629.05 }, //12
    ];

    assert.equal(res.sum.interestYearly, CS_INTEREST_YEAR);
    assert.equal(res.sum.end, CS_SUM_END);
    for (var j = 0; j < res.payments.length; j++) {
        assert.equal(CS[j].rate - res.payments[j].rate, 0);
    }
    //
    assert.end();
});

test('CS nova , 2.89', function(assert) {

    const total = 2225035;
    const rate = 2.89;
    const monthlyPayment = 10474;

    const calc = i.init(rate, monthlyPayment);

    const res = calc.aaa(total, 12);

    console.log('sssssssssssssssssssssssssssss jistina ', res.sum.end.toLocaleString());
    console.log('sssssssssssssssssssssssssssss splaceno jistny', (res.sum.begin - res.sum.end).toLocaleString());
    console.log('sssssssssssssssssssssssssssss urok celkem', (res.sum.interestYearly).toLocaleString());
    assert.end();
});

test('KB nova , 2.39', function(assert) {

    const total = 2225035;
    const rate = 2.39;
    const monthlyPayment = 9884;

    const calc = i.init(rate, monthlyPayment);

    const res = calc.aaa(total, 12);

    console.log('sssssssssssssssssssssssssssss jistina ', res.sum.end.toLocaleString());
    console.log('sssssssssssssssssssssssssssss splaceno jistny', (res.sum.begin - res.sum.end).toLocaleString());
    console.log('sssssssssssssssssssssssssssss urok celkem', (res.sum.interestYearly).toLocaleString());
    assert.end();
});

test('KB nova , 2.29 !!!', function(assert) {

    const total = 2225035;
    const rate = 2.29;
    const monthlyPayment = 9773;

    const calc = i.init(rate, monthlyPayment);

    const res = calc.aaa(total, 60);

    console.log('sssssssssssssssssssssssssssss jistina ', res.sum.end.toLocaleString());
    console.log('sssssssssssssssssssssssssssss splaceno jistny', (res.sum.begin - res.sum.end).toLocaleString());
    console.log('sssssssssssssssssssssssssssss urok celkem', (res.sum.interestYearly).toLocaleString());
    assert.end();
});


