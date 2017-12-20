import m from 'marked'
import {WebImage} from './image/index';
import anime from 'animejs';

export const gridItemProto = {
    name: 'grid item',

    init: function(data) {

        this.DOM = {};
        this.DOM.el = data.el;

        this.DOM.title = data.el.querySelector('.title');
        this.DOM.title.textContent = data.attributes.title;

        const imageEl = WebImage(data.attributes.photos[0].file).render().el;
        this.DOM.el.appendChild(imageEl);

        anime({
            targets: [this.DOM.title, imageEl],
            duration: 600,
            easing: 'easeOutExpo',
            delay: (target, index) => {
                return index * 60;
            },
            translateY: (target, index, total) => {
                return [50, 0];
            },
            opacity: [0, 1]
        });

        this.data = data.attributes;
    }
};

