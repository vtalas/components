const gridItemProto = {
    name: 'grid item',

    init: function(data) {

        this.DOM = {};
        this.DOM.el = data.el;
        this.DOM.title = data.el.querySelector('.title');
        this.DOM.title.textContent = data.attributes.title;
        this.DOM.path = data.el.querySelector('.xxx');
    }
};


const GridItem = function(data) {
    let gridItem = Object.create(gridItemProto);
    gridItem.init(data);
    return gridItem;
};

export default GridItem;