const calc = Object.create({

    init(rate, monthlyPayment) {
        this.rate = parseFloat(rate);
        this.monthlyPayment = parseFloat(monthlyPayment);
        return this;
    },

    getRate(sum) {

        return sum * this.rate / 100;
    },

    daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    },

    round(number, precision) {
        const x = Math.pow(10, precision);
        return Math.round(number * x) / x;
    },

    aaa: function(sum, months) {

        const res = {
            sum: {
                begin: Number.parseInt(sum, 10),
                end: null,
                interestYearly: null
            },
            meta: {
                interest: this.rate,
                months: months,
                payment: this.monthlyPayment,
            },
            payments: []
        };

        let interestYearly = 0;
        for (var i = 1, n = months; i <= n; i++) {

            let dailyRate = this.getRate(sum) / 360;
            let interestPayment = dailyRate * this.daysInMonth(i % 12, 2017);

            let payment = this.monthlyPayment - interestPayment;

            sum -= payment;
            interestYearly += interestPayment;
            res.payments.push({
                rate: this.round(interestPayment, 2),
                payment: this.round(payment, 2)
            })
        }

        res.sum.end = this.round(sum, 2);
        res.sum.interestYearly = this.round(interestYearly, 2);
        return res;
    }

});

module.exports = calc;

