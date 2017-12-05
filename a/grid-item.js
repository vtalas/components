export const gridItemProto = {
    name: 'grid item',

    init: function(data) {

        this.DOM = {};
        this.DOM.el = data.el;
        this.DOM.title = data.el.querySelector('.title');
        this.DOM.title.textContent = data.attributes.title;
        this.DOM.path = data.el.querySelector('.largeFrame');

        this.data = data.attributes;
    }
};

