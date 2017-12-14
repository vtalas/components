import * as client from './content';

import Media from './media';
import {gridItemProto} from './grid-item';
import {logoProto} from './logo/logo';
import * as over from './overlay';
import BackboneEvents from 'backbone-events-standalone';

const TEMPLATES = {
    GRID_ITEM: document.querySelector('._templates .grid-item'),
    OVERLAY: document.querySelector('._templates .template-overlay'),
    OVERLAY_SVG: document.querySelector('._templates .overlay-svg')
};
const SOURCE_EL = {
    LOGO: document.querySelector('.logo'),
    ITEMS: document.querySelector('.grid-item-container')
};

const DOM = {
    BODY: document.querySelector('body'),
    HTML: document.querySelector('html'),
};

const media = Media();

const Overlay = function() {
    const proto = Object.assign(
        over.proto,
        over.svgProto,
        over.closeProto,
        over.overlayGridItemProto,
        over.overlayScroll,
        BackboneEvents,
    );

    let overlay = Object.create(proto)
        .init(TEMPLATES.OVERLAY)
        .initGridItem()
        .initSvg(TEMPLATES.OVERLAY_SVG)
        .initClose()

    overlay.initScroll(overlay.dom.gridItemTemplate);
    DOM.BODY.appendChild(overlay.dom.el);

    return overlay;
};

const overlay = Overlay();

const GridItem = function(data) {

    const proto = Object.assign(gridItemProto, {
        onClick() {

            let el = this.DOM.el;
            let rect = el.getBoundingClientRect();

            const w = media.getWidth();
            const h = media.getHeight();
            const o = 0;

            overlay.open({
                rect, w, h, o,
                done: () => {
                    DOM.HTML.style.overflow = 'hidden';
                    overlay.showData(this, rect);
                },
                close: () => {
                    this.DOM.el.style.opacity = 1;
                    overlay.hideData();
                    DOM.HTML.style.overflow = 'auto';
                }
            });

            this.DOM.el.style.opacity = 0;
        }
    });

    let gridItem = Object.create(proto);
    gridItem.init(data);
    return gridItem;
};

// import {WebImage} from './image/index';

client.getEntries().then(function(data) {

    // const x = WebImage(Object.values(data)[0].photos[0].file);
    // x.render();
    // const div = document.querySelector('.web-image').appendChild(x.el);
    // console.log(x.el);

    const items = Object.values(data).map(function(attributes) {
        let el = TEMPLATES.GRID_ITEM.cloneNode(true);
        SOURCE_EL.ITEMS.appendChild(el);
        let gridItem = GridItem({ el, attributes });
        el.addEventListener('click', gridItem.onClick.bind(gridItem));
        return gridItem;
    });

    // items[0].onClick()
});


const logo = function() {
    return Object.create(logoProto).initLogo(SOURCE_EL.LOGO);
}();


