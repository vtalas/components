import m from 'marked'

export const gridItemProto = {
    name: 'grid item',

    init: function(data) {

        this.DOM = {};
        this.DOM.el = data.el;

        this.DOM.title = data.el.querySelector('.title');
        this.DOM.title.innerHTML = m(data.attributes.title);

        this.data = data.attributes;
    }
};

