import * as client from './content';

/*
let data = {
    aaa: {
        title: 'title aaa',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    bbb: {
        title: 'Aadf dkjbfkjdbk',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a kjaskfjbkjas bdkjfbkjdsab kjbdsafkbsadkfbk baskdbfkbdsak jbdsakfjb kasbdfkb ksajbdkfj sadkflakdsnflkjdsaljf klkdsajf lkjdsaf',
    },
    abbxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    bxbxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    bbxxxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    xbbxssdb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    abbxxxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    wbbbddf: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    ebbxxxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    aSSS: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    SDSS: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    sdsd: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    rrbbxssdb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    tbbxxxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    ybbbddf: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    }
};
*/

import Media from './media';
import {gridItemProto} from './grid-item';
import {logoProto} from './logo/logo';
import * as over from './overlay';

const TEMPLATES = {
    GRID_ITEM: document.querySelector('._templates .grid-item'),
    OVERLAY: document.querySelector('._templates .template-overlay'),
    OVERLAY_GRID_ITEM: document.querySelector('._templates .overlay-grid-item'),
    OVERLAY_SVG: document.querySelector('._templates .overlay-svg'),
    OVERLAY_CLOSE: document.querySelector('._templates .overlay-close')
};
const SOURCE_EL = {
    LOGO: document.querySelector('.logo')
}

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
        over.overlayGridItemProto
    );
    let a = Object.create(proto)
        .init(TEMPLATES.OVERLAY)
        .initGridItem(TEMPLATES.OVERLAY_GRID_ITEM)
        .initSvg(TEMPLATES.OVERLAY_SVG)
        .initClose(TEMPLATES.OVERLAY_CLOSE)
    DOM.BODY.appendChild(a.dom.el);

    return a;
};

const GridItem = function(data) {

    const proto = Object.assign(gridItemProto, {
        onClick() {

            let el = this.DOM.el;
            let rect = el.getBoundingClientRect();

            const w = media.getWidth();
            const h = media.getHeight();
            const o = 0;

            DOM.HTML.style.overflow = 'hidden';

            overlay.open({
                rect, w, h, o,
                done: () => {
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

client.getEntries().then(function(data) {

    const items = Object.values(data).map(function(attributes) {
        let el = TEMPLATES.GRID_ITEM.cloneNode(true);
        DOM.BODY.appendChild(el);
        let gridItem = GridItem({ el, attributes });
        el.addEventListener('click', gridItem.onClick.bind(gridItem));
        return gridItem;
    });
});

const overlay = Overlay();


const logo = function() {
    return Object.create(logoProto).initLogo(SOURCE_EL.LOGO);
}();











