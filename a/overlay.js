export const proto = {

    init(template) {
        this.dom = {};
        this.dom.el = template.cloneNode(true);
        return this;
    }
}

export const closeProto = {

    initClose(template) {

        this.dom.closeButon = template.cloneNode(true);
        this.dom.el.appendChild(this.dom.closeButon);

        this.dom.closeButon.addEventListener('click', this.close.bind(this));
        return this;
    },

    close() {

        let opt = this.opt;
        let el = this.dom.el;

        let rect = opt.rect;

        el.classList.remove('active');

        anime({
            targets: this.dom.path,
            duration: 200,
            easing: 'easeOutQuad',
            elasticity: 250,
            d: [{
                value: [
                    'M', rect.left, rect.top,
                    rect.left, rect.height + rect.top,
                    rect.left + rect.width, rect.height + rect.top,
                    rect.left + rect.width, rect.top
                ].join(' ')
            }
            ],
            complete: () => {
                el.style.opacity = 0;
            }
        });

        opt.close();
    },

}

export const svgProto = {

    initSvg(template) {

        this.dom.svg = template.cloneNode(true);
        this.dom.el.appendChild(this.dom.svg);
        this.dom.path = this.dom.el.querySelector('path');

        return this;
    },

    open(opt) {

        if (this.openingAnimation) {
            return;
        }

        this.openingAnimation = true;

        this.opt = opt;
        let el = this.dom.el;

        el.style.opacity = 1;
        el.classList.add('active');

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

        this.dom.path.setAttribute('opacity', 1);
        this.dom.path.setAttribute('d', d.join(' '));

        var t = anime.timeline()
        t.add({
            targets: this.dom.path,
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
            targets: this.dom.path,
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
            complete: () => {
                opt.done()
                this.openingAnimation = false;
            }

        })
    }
};

export const overlayGridItemProto = {

    initGridItem(template) {

        this.dom.gridItemTemplate = template.cloneNode(true);

        const el = this.dom.el;
        const t = this.dom.gridItemTemplate;

        el.appendChild(t);

        this.dom.header = t.querySelector('.header');
        this.dom.text = t.querySelector('.text');
        return this;
    },

    showData(gridItem, rect) {

        let data = gridItem.data;

        this.dom.gridItemTemplate.style.display = 'block';
        this.dom.text.textContent = data.text;
        this.dom.header.textContent = data.title;

        let itemsContent = this.dom.gridItemTemplate.querySelector('.items');
        let count = 10;

        var intro = document.createElement('div');
        intro.classList.add('intro')

        for (var i = 0, n = count; i < n; i++) {
            let x = intro.cloneNode(true);
            x.textContent = 'daaaaaa ' + i;
            itemsContent.appendChild(x);
        }

        anime({
            targets: [this.dom.text, this.dom.header],
            duration: 600,
            easing: 'easeOutExpo',
            delay: (target, index) => {
                return index * 60;
            },
            translateY: (target, index, total) => {
                return index !== total - 1 ? [50, 0] : 0;
            },
            scale: (target, index, total) => {
                return index === total - 1 ? [0, 1] : 1;
            },
            opacity: 1
        });
    },

    hideData() {
        this.dom.gridItemTemplate.style.display = 'none';
    }
};

