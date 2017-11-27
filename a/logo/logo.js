export const logoProto = {

    initLogo(sourceElement) {

        this.dom = {};
        this.dom.el = sourceElement;
        let top = this.dom.top = sourceElement.querySelector('.top');
        let left = this.dom.left = sourceElement.querySelector('.left');
        let bottom = this.dom.bottom = sourceElement.querySelector('.bottom');
        let right = this.dom.right = sourceElement.querySelector('.right');
        let path = this.dom.path = sourceElement.querySelector('#path3438');

        var o = { x: 1.5, y: 3.9 };
        var w = 93.2;
        var h = 24.1;
        var stroke = 2.6;

        var d = {
            left: ['M', o.x + stroke / 2, o.y + h, 'V', o.y],
            right: ['M', o.x + w - stroke / 2, o.y, 'V', o.y + h],
            top: ['M', o.x + w, o.y, 'H', o.x],
            bottom: ['M', o.x, o.y + h, 'H', o.x + w]
        };

        top.setAttribute('d', d.top.join(' '));
        top.setAttribute('stroke-width', stroke + '');

        bottom.setAttribute('d', d.bottom.join(' '));
        bottom.setAttribute('stroke-width', stroke + '');

        right.setAttribute('d', d.right.join(' '));
        right.setAttribute('stroke-width', stroke + '');

        left.setAttribute('d', d.left.join(' '));
        left.setAttribute('stroke-width', stroke + '');

        const line = anime.timeline();
        // anime({
        //     target: this.dom.el,
        //     scaleX: 0.01,
        //     scaleY: 0.01,
        //     transformOrigin: 'center'
        //
        // });

        return ;
        const duration = 500;
        const elasticity = 100;

        d.right[4] = o.y;
        line.add({
                targets: right,
                duration: duration,
                offset: duration / 4 * 1,
                d: d.right.join(' '),
                easing: 'easeOutQuad'
            }
        );

        d.left[4] = o.y + h;
        line.add({
                targets: left,
                duration: duration,
                offset: duration / 4 * 2,
                d: d.left.join(' '),
                easing: 'easeOutQuad'
            }
        );

        d.top[4] = 62.5;
        line.add({
                targets: top,
                duration: duration,
                offset: duration / 4 * 3,
                elasticity: elasticity,
                d: d.top.join(' ')
            }
        );

        d.bottom[4] = 30.7;
        line.add({
                targets: bottom,
                duration: duration,
                offset: duration / 4 * 4,
                elasticity: elasticity,
                d: d.bottom.join(' ')
            }
        );

        line.add({
                targets: path,
                duration: 1000,
                offset: duration / 16,
                'stroke-width': 0,
                easing: 'easeInExpo',
            }
        );

        return this;
    }
};

/*

var top = $('.top');
var bottom = $('.bottom');
var left = $('.left');
var right = $('.right');

var d = {
    left: ['M', o.x + sw / 2, o.y + h, 'V', o.y],
    right: ['M', o.x + w - sw / 2, o.y, 'V', o.y + h],
    top: ['M', o.x + w, o.y, 'H', o.x],
    bottom: ['M', o.x, o.y + h, 'H', o.x + w]
};
top.attr({ d: d.top.join(' '), 'stroke-width': sw });
bottom.attr({ d: d.bottom.join(' '), 'stroke-width': sw });
right.attr({ d: d.right.join(' '), 'stroke-width': sw });
left.attr({ d: d.left.join(' '), 'stroke-width': sw });
var ss = 1;

var ease = Power4.easeOut;
var tl = new TimelineLite();
tl.startTime(1);
tl.add(TweenLite.from($('.logo'), 0.5, {
    scaleX: 0.01,
    scaleY: 0.01,
    transformOrigin: 'center',
    ease: Expo.easeIn
}));

tl.add('end');
var rightto = d.right.slice();
rightto[4] = o.y;
tl.add(TweenLite.to(right, ss, { attr: { 'd': rightto.join(' '), }, ease: ease }), 'end');

var leftto = d.left.slice();
leftto[4] = o.y + h;
tl.add(TweenLite.to(left, ss, { attr: { 'd': leftto.join(' '), }, ease: ease }), 'end');

tl.add('aaa');
var topto = d.top.slice();
topto[4] = 62.5;
tl.add(TweenLite.to(top, ss, { attr: { 'd': topto.join(' '), }, ease: ease }), 'end');

var bottomTo = d.bottom.slice();
bottomTo[4] = 30.7;
tl.add(TweenLite.to(bottom, ss, { attr: { 'd': bottomTo.join(' '), }, ease: ease }), 'end');

tl.add(TweenLite.to($('#path3438'), ss, { 'stroke-width': 0, ease: Power4.easeOut }));

*/
