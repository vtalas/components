const calc = require('./calc');
const utils = require('./utils');

const sumEl = document.querySelector('#sum');
const interestEl = document.querySelector('#interest');
const monthsEl = document.querySelector('#months');
const paymentEl = document.querySelector('#payment');

const Render = Object.create({

    init(result) {
        this.el = document.querySelector('#result');
        this.el.textContent = '';
        this.result = result;
        return this;
    },

    add(tag, value) {
        const x = document.createElement(tag);
        if (typeof  value === 'string') {
            x.textContent = `${value}`;
        } else if (Array.isArray(value)) {
            value.forEach(function(item) {
                x.appendChild(item)
            })
        } else {
            x.appendChild(value);
        }

        return this.el.appendChild(x);
    },

    textEl(tag, text, attrs) {
        const x = document.createElement(tag);
        x.textContent = text;
        Object.keys(attrs || {}).forEach(function(item) {
            x.setAttribute(item, attrs[item])
        });
        return x;
    },

    render() {

        const r = this.result;
        if (!r) {
            this.add('h4', 'zadej vsechny hodnoty');
            return;
        }
        this.add('h4', '---------------------------------------------------------');
        this.add('h3', `${(r.meta.interest).toLocaleString()}% / ${r.meta.months} měsíců / splatka: ${(r.meta.payment).toLocaleString()} Kc`);
        // this.add('h3', 'urok', (r.meta.interest).toLocaleString() + '%');
        // this.add('h3', 'pocet mesicu', (r.meta.months).toLocaleString());
        // this.add('h3', 'splatka', (r.meta.payment).toLocaleString());
        this.add('h4', '---------------------------------------------------------');

        this.add('span', 'jistina');
        this.add('h3', (r.sum.begin).toLocaleString());
        this.add('h3', (r.sum.end).toLocaleString());

        this.add('h4', ' ');
        this.add('span', 'zaplaceno jistiny celkem');
        this.add('h3', (r.sum.begin - r.sum.end).toLocaleString());
        this.add('h4', ' ');
        this.add('span', 'zaplaceny urok celkem');
        this.add('h3', (r.sum.interestYearly).toLocaleString());
        this.add('h4', ' ');
        this.add('div', '---------------------------------------------------------');

        const tableHeader = this.add('div', [this.textEl('span', '#splatka', { class: 's_1' }), this.textEl('span', 'urok'), this.textEl('span', 'jistina')]);
        tableHeader.setAttribute('class', 'list');
        this.add('div', '---------------------------------------------------------');
        for (var i = 0; i < r.payments.length; i++) {
            var a = r.payments[i];

            const tableContent = this.add('div', [
                this.textEl('span', i + 1, { class: 's_1' }),
                this.textEl('span', (a.rate).toLocaleString()),
                this.textEl('span', (a.payment).toLocaleString())
            ]);
            tableContent.setAttribute('class', 'list')
        }
    }
});


const getQuote = function() {

    const opt = {
        interest: interestEl.value,
        sum: sumEl.value,
        months: monthsEl.value,
        payment: paymentEl.value,
    };

    const x = calc.init(opt.interest, opt.payment);
    const result = x.aaa(opt.sum, opt.months);

    const render = Render.init(result);
    render.render();
};

const initialize = function() {

    const params = utils.q(window.location.href);

    let sum = parseFloat(params.sum);
    let interest = parseFloat(params.interest);
    let months = parseFloat(params.months);
    let payment = parseFloat(params.payment);

    sumEl.value = Number.isFinite(sum) ? sum : 0.0;
    interestEl.value = Number.isFinite(interest) ? interest : 0.0;
    monthsEl.value = Number.isFinite(months) ? months : 0.0;
    paymentEl.value = Number.isFinite(payment) ? payment : 0;

    // sum.value = 2295722.39;
    // interest.value = 2.79;
    // months.value = 12;
    // payment.value = 10021;
};

document.querySelector('#submit').addEventListener('click', function() {
    getQuote();
});

initialize();
getQuote();
