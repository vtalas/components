export const logoProto = {

    initLogo(sourceElement) {

        this.dom = {};
        this.dom.el = sourceElement;
        let top = this.dom.top = sourceElement.querySelector('.top');
        let left = this.dom.left = sourceElement.querySelector('.left');
        let bottom = this.dom.bottom = sourceElement.querySelector('.bottom');
        let right = this.dom.right = sourceElement.querySelector('.right');
        let path = this.dom.path = sourceElement.querySelector('#path3438');
        let g = this.dom.g = sourceElement.querySelector('#layer2');

        var o = { x: 1.5, y: 3.9 };
        var w = 93.2;
        var h = 24.1;
        var stroke = 2.6;

        var square = 5;
        let center = { x: 46, y: 10 };

        var ddd = {
            left: ['M', center.x - square - stroke / 2, center.y + square + stroke, 'V', center.y + square],
            right: ['M', center.x + square - stroke / 2, center.y - square, 'V', center.y - square],
            top: ['M', center.x - square - stroke, o.y, 'H', center.x - square - stroke],
            bottom: ['M', center.x + square, center.y + square, 'H', center.x + square]
        };

        var dd = {
            left: ['M', center.x - square - stroke / 2, center.y + square + stroke / 2, 'V', center.y - square - stroke / 2],
            right: ['M', center.x + square - stroke / 2, center.y - square, 'V', center.y + square],
            top: ['M', center.x + square, o.y, 'H', center.x - square - stroke],
            bottom: ['M', center.x - square - stroke, center.y + square, 'H', center.x + square]
        };

        var d = {
            left: ['M', o.x + stroke / 2, o.y + h, 'V', o.y],
            right: ['M', o.x + w - stroke / 2, o.y, 'V', o.y + h],
            top: ['M', o.x + w, o.y, 'H', o.x],
            bottom: ['M', o.x, o.y + h, 'H', o.x + w]
        };

        top.setAttribute('d', ddd.top.join(' '));
        top.setAttribute('stroke-width', stroke + '');

        bottom.setAttribute('d', ddd.bottom.join(' '));
        bottom.setAttribute('stroke-width', stroke + '');

        right.setAttribute('d', ddd.right.join(' '));
        right.setAttribute('stroke-width', stroke + '');

        left.setAttribute('d', ddd.left.join(' '));
        left.setAttribute('stroke-width', stroke + '');

        const line = anime.timeline();
        line.add({
            targets: g,
            opacity: 1,
            duration: 1500,
            easing: 'linear',
        });

        let xx = 100
        const durDraw = (el, i) => {
            xx += 100;
            console.log(arguments);
            return xx;
        };
        const easDraw = 'easeInOutExpo';
        const offsetDraw = '-=20';
        line
            .add({ offset: offsetDraw, duration: durDraw, easing: easDraw, targets: left, d: dd.left.join(' ') })
            .add({ offset: offsetDraw, duration: durDraw, easing: easDraw, targets: top, d: dd.top.join(' ') })
            .add({ offset: offsetDraw, duration: durDraw, easing: easDraw, targets: right, d: dd.right.join(' ') })
            .add({ offset: offsetDraw, duration: durDraw, easing: easDraw, targets: bottom, d: dd.bottom.join(' ') });

        const offsetA = 2600;
        const durationA = 1400;
        const easA = 'easeInOutExpo';
        line.add({ targets: right, duration: durationA, offset: offsetA, d: d.right.join(' '), easing: easA })
            .add({ targets: top, duration: durationA, offset: offsetA, d: d.top.join(' '), easing: easA })
            .add({ targets: bottom, duration: durationA, offset: offsetA, d: d.bottom.join(' '), easing: easA })
            .add({ targets: left, duration: durationA, offset: offsetA, d: d.left.join(' '), easing: easA });

        const offsetB = 3900;
        const elasticity = 100;
        const durationB = 1500;
        d.right[4] = o.y;
        line.add({
            targets: right, duration: durationB / 4, offset: offsetB, d: d.right.join(' '), easing: 'easeOutQuad'
        });

        d.left[4] = o.y + h;
        line.add({
            targets: left, duration: durationB / 4, offset: offsetB, d: d.left.join(' '), easing: 'easeOutQuad'
        });

        d.top[4] = 62.5;
        line.add({
            targets: top, duration: durationB, offset: offsetB, elasticity: elasticity, d: d.top.join(' ')
        });

        d.bottom[4] = 30.7;
        line.add({
            targets: bottom, duration: durationB, offset: offsetB, elasticity: elasticity, d: d.bottom.join(' ')
        });

        line.add({
            targets: path, duration: 1000, offset: offsetB, 'stroke-width': 0, easing: 'easeInExpo',
        });

        return this;
    }
};
