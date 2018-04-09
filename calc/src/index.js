const calc = require('./calc');

const sum = document.querySelector('#sum');
const interest = document.querySelector('#interest');
const months = document.querySelector('#months');
const payment = document.querySelector('#payment');

sum.value = 2295722.39;
interest.value = 2.79;
months.value = 12;
payment.value = 10021;

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

        console.log(r);
    }
});

const get = function() {


    const x = calc.init(interest.value, payment.value);
    const result = x.aaa(sum.value, months.value);

    const render = Render.init(result);

    render.render();
};
document.querySelector('#submit').addEventListener('click', function() {
    get();
});

get();

console.log(calc);