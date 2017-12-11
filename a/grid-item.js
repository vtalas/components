import m from 'marked'
import {WebImage} from './image/index';

export const gridItemProto = {
    name: 'grid item',

    init: function(data) {

        this.DOM = {};
        this.DOM.el = data.el;

        this.DOM.title = data.el.querySelector('.title');
        this.DOM.title.innerHTML = m(data.attributes.title);

        this.DOM.el.appendChild(WebImage(data.attributes.photos[0].file).render().el);

        this.data = data.attributes;
    }
};

