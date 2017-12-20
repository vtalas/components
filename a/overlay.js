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
            duration: 200,
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
            duration: 200,
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

        const closeButton = document.querySelector('._templates .overlay-close').cloneNode(true);
        this.dom.floatHeader.appendChild(closeButton);

        closeButton.addEventListener('click', () => this.trigger('close-overlay'));

        this.currentScroll = 0;
        this.showHeader = null;

        scrollableElement.addEventListener('scroll', el => this.onScroll(el.target.scrollTop));
        this.on('overlay-data-changed', this.onDataChanged.bind(this));
    },

    onDataChanged(data) {
        this.dom.headerScroll.textContent = data.title;

        this.timeline = anime.timeline().add({
            targets: this.dom.floatHeader,
            translateY: -100,
            duration: 300,
            easing: 'easeOutExpo',
        });

        this.showHeader = false;
        this.timeline.pause();
    },

    onScroll(scrollOffset) {

        const triggerThreshold = 5;

        if (scrollOffset < 400) {
            this.toggleHeader(true);
            return;
        }

        if (scrollOffset - this.currentScroll < -triggerThreshold) {
            this.toggleHeader(true);
        }

        if (scrollOffset - this.currentScroll > triggerThreshold) {
            this.toggleHeader(false);
        }

        this.currentScroll = scrollOffset;
    },

    toggleHeader(value) {

        if (value !== this.showHeader) {
            this.timeline.pause();
            this.timeline.reverse();
            this.timeline.play();
            this.showHeader = value;
        }
    }

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

        this.dom.text.innerHTML = m(data.text);

        let itemsContent = this.dom.gridItemTemplate.querySelector('.items');
        itemsContent.innerHTML = '';

        const photo = this.dom.photo;
        photo.classList.add('intro');

        const targetsToAnimate = [this.dom.text];
        let i = 0, n = data.photos.length;
        for (; i < n; i++) {

            let photoClone = photo.cloneNode(true);
            photoClone.appendChild(WebImage(data.photos[i].file).render().el);
            itemsContent.appendChild(photoClone);
            targetsToAnimate.push(photoClone)
        }

        anime({
            targets: targetsToAnimate,
            duration: 600,
            easing: 'easeOutExpo',
            delay: (target, index) => {
                return index * 60;
            },
            translateY: [50, 0],
            opacity: 1
        });
    },

    hideData() {
        this.dom.gridItemTemplate.style.display = 'none';
    }
};

