export const overlayProto = {

    init(template) {
        this.DOM = {};
        this.DOM.el = template.cloneNode(true);
        this.DOM.path = this.DOM.el.querySelector('path');

        return this;
    },

    open(opt) {

        this.DOM.el.style.opacity = 1;
        this.DOM.el.classList.add('active');

        let rect = opt.rect;
        let w = opt.w;
        let o = opt.o;
        let h = opt.h;

        var d = [
            'M', rect.left, rect.top,
            rect.left, rect.height + rect.top,
            rect.left + rect.width, rect.height + rect.top,
            rect.left + rect.width, rect.top
        ];

        this.DOM.path.setAttribute('opacity', 1);
        this.DOM.path.setAttribute('d', d.join(' '));

        var t = anime.timeline()
        t.add({
            targets: this.DOM.path,
            duration: 500,
            easing: 'easeOutQuad',
            elasticity: 250,
            d: [{
                value: [
                    'M', rect.left, rect.top,
                    0, h,
                    w, h,
                    rect.left + rect.width, rect.top
                ].join(' ')
            }
            ],
            complete: () => this.isAnimating = false
        }).add({
            targets: this.DOM.path,
            duration: 400,
            easing: 'easeOutQuad',
            elasticity: 250,
            offset: 100,
            d: [{
                value: [
                    'M', 0, o,
                    0, h,
                    w, h,
                    w, o
                ].join(' ')
            }
            ],
            complete: () => this.isAnimating = false
        })
    }
};


