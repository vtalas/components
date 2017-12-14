import anime from 'animejs';
import m from 'marked';
import {WebImage} from './image/index';
import debounce from 'lodash.debounce';

export const proto = {

    init(template) {
        this.dom = {};
        this.dom.el = template.cloneNode(true);
        return this;
    }
};

export const closeProto = {

    initClose() {

        this.on('close-overlay', this.close.bind(this))
        return this;
    },

    close() {

        let opt = this.opt;
        let el = this.dom.el;

        let destination = opt.rect;

        el.classList.remove('active');

        anime({
            targets: this.dom.path,
            duration: 200,
            offset: 0,
            easing: 'easeOutQuad',
            elasticity: 250,
            d: [{
                value: [
                    'M', destination.left, destination.top,
                    destination.left, destination.height + destination.top,
                    destination.left + destination.width, destination.height + destination.top,
                    destination.left + destination.width, destination.top
                ].join(' ')
            }
            ],
            complete: () => {
                el.style.opacity = 0;
            }
        });

        anime({
            targets: this.dom.path,
            duration: 200,
            offset: 0,
            easing: 'easeOutQuad',
            elasticity: 250,
            d: [{
                value: [
                    'M', destination.left, destination.top,
                    destination.left, destination.height + destination.top,
                    destination.left + destination.width, destination.height + destination.top,
                    destination.left + destination.width, destination.top
                ].join(' ')
            }
            ],
            complete: () => {
                el.style.opacity = 0;
            }
        });

        opt.close();
    },
};

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

        let sourceRect = opt.rect;
        let w = opt.w;
        let o = opt.o;
        let h = opt.h;

        const dSource = [
            'M', sourceRect.left, sourceRect.top,
            sourceRect.left, sourceRect.height + sourceRect.top,
            sourceRect.left + sourceRect.width, sourceRect.height + sourceRect.top,
            sourceRect.left + sourceRect.width, sourceRect.top
        ];

        this.dom.path.setAttribute('opacity', 1);
        this.dom.path.setAttribute('d', dSource.join(' '));

        var t = anime.timeline()
        t.add({
            targets: this.dom.path,
            duration: 600,
            easing: 'easeOutQuad',
            elasticity: 250,
            d: [{
                value: [
                    'M', sourceRect.left, sourceRect.top,
                    0, h,
                    w, h,
                    sourceRect.left + sourceRect.width, sourceRect.top
                ].join(' ')
            }
            ],
            complete: () => this.isAnimating = false
        }).add({
            targets: this.dom.path,
            duration: 800,
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
                opt.done();
                this.openingAnimation = false;
            }

        })
    }
};

export const overlayScroll = {


    initScroll(scrollableElement) {

        const t = this.dom.gridItemTemplate;

        this.dom.floatHeader = t.querySelector('.header-container');
        this.dom.headerScroll = t.querySelector('.header-scroll');
        this.currentScroll = 0;

        const closeButton = document.querySelector('._templates .overlay-close').cloneNode(true);
        this.dom.floatHeader.appendChild(closeButton);

        closeButton.addEventListener('click', () => this.trigger('close-overlay'));
        scrollableElement.addEventListener('scroll', el => this.onScroll(el.target.scrollTop));
        this.on('overlay-data-changed', this.onDataChanged.bind(this));
    },

    onDataChanged(data) {
        this.dom.headerScroll.textContent = data.title;
    },

    onScroll(scrollOffset) {

        const triggerThreshold = 40;

        if (scrollOffset < 400) {
            this.showFloatHeader();
            return;
        }

        if (scrollOffset - this.currentScroll < -triggerThreshold) {
            this.showFloatHeader();
        }

        if (scrollOffset - this.currentScroll > triggerThreshold) {
            this.hideFloatHeader();
        }

        this.currentScroll = scrollOffset;
    },

    hideFloatHeader(force) {

        if (!this.hiddingInProgress || force) {

            this.showingInProgress = false;
            this.hiddingInProgress = true;

            anime({
                targets: this.dom.floatHeader,
                translateY: 0,
                duration: 1000,
                easing: 'easeOutExpo',
                onComplete: () => this.hiddingInProgress = false
            });
        }
    },

    showFloatHeader: function(force) {


        const translate = 100;
        if (!this.showingInProgress || force) {
            this.showingInProgress = true;
            this.hiddingInProgress = false;
            anime({
                targets: this.dom.floatHeader,
                translateY: translate,
                duration: 500,
                easing: 'easeInExpo',
                onComplete: () => this.showingInProgress = false
            });
        }
    },

};

export const overlayGridItemProto = {

    initGridItem() {

        this.dom.gridItemTemplate = document.querySelector('._templates .overlay-grid-item').cloneNode(true);
        this.dom.photo = document.querySelector('.overlay-grid-item-photo');

        const el = this.dom.el;
        const t = this.dom.gridItemTemplate;

        el.appendChild(t);

        this.dom.header = t.querySelector('.header');
        this.dom.text = t.querySelector('.text');
        return this;
    },

    showData(gridItem) {

        let data = gridItem.data;
        this.trigger('overlay-data-changed', data);

        this.dom.gridItemTemplate.style.display = 'block';
        // this.dom.header.textContent = data.title;

        this.dom.text.innerHTML = m(data.text);

        let itemsContent = this.dom.gridItemTemplate.querySelector('.items');
        itemsContent.innerHTML = '';

        const photo = this.dom.photo;
        photo.classList.add('intro')

        let i = 0, n = data.photos.length;
        for (; i < n; i++) {

            let photoClone = photo.cloneNode(true);
            photoClone.appendChild(WebImage(data.photos[i].file).render().el);
            itemsContent.appendChild(photoClone);
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

