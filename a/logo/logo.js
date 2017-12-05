export const logoProto = {

    rectToD(r, stroke) {
        return ['M',
            r.x, r.y + r.height + stroke / 2,
            r.x, r.y,
            r.x + r.width, r.y,
            r.x + r.width, r.y + r.height,
            r.x, r.y + r.height,
        ];
    },

    smallFrame() {

        const frame = this.dom.frame;
        const center = this.center;
        const s = 3;
        const r = { x: center.x - s, y: center.y, width: 2 * s, height: 2 * s };
        const strokeWidth = 2.6;

        frame.setAttribute('d', this.rectToD(r, strokeWidth).join(' '));
        frame.setAttribute('opacity', 1);
        frame.setAttribute('stroke-dasharray', 300 + '');
        frame.setAttribute('stroke-dashoffset', (300 - strokeWidth) + '');

        var timeLine = anime.timeline();
        timeLine.add({
            targets: frame,
            delay: 100,
            duration: 2500,
            easing: 'easeInOutQuint',
            'stroke-dashoffset': 0,
            complete: () => frame.removeAttribute('stroke-dasharray')
        });

        timeLine.add({
            targets: frame,
            easing: 'easeInQuint',
            offset: '-=2000',
            d: this.rectToD(this.rect, strokeWidth).join(' '),
            complete: () => {
                frame.setAttribute('opacity', 0);
                this.largeFrame();
            }
        });
    },

    largeFrame() {

        const r = this.rect;
        const strokeWidth = 2.5 + '';
        const a = strokeWidth / 2;

        this.dom.g.setAttribute('opacity', 1 + '');

        const top = this.dom.top;
        top.setAttribute('d', ['M', r.x - a, r.y, r.x + r.width + a, r.y].join(' '));
        top.setAttribute('stroke-width', strokeWidth);

        const bottom = this.dom.bottom;
        bottom.setAttribute('d', ['M', r.x - a, r.y + r.height, r.x + r.width + a, r.y + r.height].join(' '));
        bottom.setAttribute('stroke-width', strokeWidth);

        const left = this.dom.left;
        left.setAttribute('d', ['M', r.x, r.y + r.height, r.x, r.y].join(' '));
        left.setAttribute('stroke-width', strokeWidth);

        const right = this.dom.right;
        right.setAttribute('d', ['M', r.x + r.width, r.y + r.height, r.x + r.width, r.y].join(' '));
        right.setAttribute('stroke-width', strokeWidth);

        const line = anime.timeline();

        const aa = 62.5;
        const bb = 30.7;
        const easing = 'easeOutExpo';
        const offset = 100;

        line.add({
            targets: top,
            offset: offset,
            d: ['M', aa, r.y, r.x + r.width + a, r.y].join(' '),
            duration: 1500,
            easing: easing
        });

        line.add({
            targets: bottom,
            offset: offset,
            d: ['M', r.x - a, r.y + r.height, bb, r.y + r.height].join(' '),
            duration: 1500,
            easing: easing,
        });

        line.add({
            targets: right,
            offset: offset,
            d: ['M', r.x + r.width, r.y, r.x + r.width, r.y].join(' '),
            duration: 1500,
            easing: easing,
        });

        line.add({
            targets: left,
            offset: offset,
            d: ['M', r.x, r.y + r.height, r.x, r.y + r.height].join(' '),
            duration: 1500,
            easing: easing,
        });

        const text = this.dom.path;
        line.add({
            targets: text, duration: 2000, offset: '-=1250', 'stroke-width': 0, easing: 'easeOutQuint',
        });
    },

    initLogo(sourceElement) {

        this.dom = {};
        this.dom.el = sourceElement;
        this.dom.top = sourceElement.querySelector('.top');
        this.dom.left = sourceElement.querySelector('.left');
        this.dom.bottom = sourceElement.querySelector('.bottom');
        this.dom.right = sourceElement.querySelector('.right');
        this.dom.path = sourceElement.querySelector('#path3438');
        this.dom.frame = sourceElement.querySelector('.frame');
        this.rect = { x: 1.5, y: 3.9, width: 93.2, height: 24.1 };

        this.dom.g = sourceElement.querySelector('#layer2');
        this.center = { x: 46, y: 10 };

        this.smallFrame();

        return this;
    }
};
