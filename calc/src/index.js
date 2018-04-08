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

    add(tag, label, value) {
        const x = document.createElement(tag);
        x.textContent = `${label} \t ${value || ''}`;
        this.el.appendChild(x);
    },

    render() {

        const r = this.result;
        this.add('span', 'castka');
        this.add('h3',  (r.sum.begin).toLocaleString());

        this.add('h3', 'urok', (r.meta.interest).toLocaleString() + '%');
        this.add('h3', 'pocet mesicu', (r.meta.months).toLocaleString());
        this.add('h3', 'splatka', (r.meta.payment).toLocaleString());
        this.add('h3', '---------------------------------------------------------');
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