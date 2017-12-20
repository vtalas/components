import anime from 'animejs';

export const logoProto = {

    largeFrame() {

        const r = this.rect;
        const strokeWidth = 2.5 + '';
        const a = strokeWidth / 2;

        const top = this.dom.top;
        top.setAttribute('d', ['M', r.x - a, r.y, r.x + r.width + a, r.y].join(' '));
        top.setAttribute('stroke-width', strokeWidth);

        const bottom = this.dom.bottom;
        bottom.setAttribute('d', ['M', r.x - a, r.y + r.height, r.x + r.width + a, r.y + r.height].join(' '));
        bottom.setAttribute('stroke-width', strokeWidth);

        const line = anime.timeline();
        const aa = 62.5;
        const bb = 30.7;
        const easing = 'easeOutExpo';
        const offset = 500;

        line.add({
            targets: this.dom.g,
            offset: offset,
            opacity: 1,
            duration: 1000,
            easing: easing
        });

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

        this.textFadeIn(line);
    },

    textFadeIn(line) {

        const text = this.dom.path;
        line.add({
            targets: text, duration: 3000, offset: '-=1250', 'stroke-width': 0, easing: 'easeOutQuint',
        });
    },

    initLogo() {

        const sourceElement = document.querySelector('.logo');

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

        this.largeFrame();

        return this;
    }
};
