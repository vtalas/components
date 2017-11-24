let data = {
    aaa: {
        title: 'title aaa',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    bbb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
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

import Media from './media';
import GridItem from './grid-item';
import {overlayProto} from './overlay';

const TEMPLATES = {
    GRID_ITEM: document.querySelector('._templates .grid-item'),
    OVERLAY: document.querySelector('._templates .template-overlay')
};

const DOM = {
    BODY: document.querySelector('body'),
};


const media = Media();

const Overlay = function(template) {
    let a = Object.create(overlayProto).init(template);
    DOM.BODY.appendChild(a.DOM.el);
    return a;
};

const overlay = Overlay(TEMPLATES.OVERLAY);

const items = Object.values(data).map(function(attributes) {
    let el = TEMPLATES.GRID_ITEM.cloneNode(true);
    DOM.BODY.appendChild(el);
    let gridItem = GridItem({ el, attributes });

    el.addEventListener('click', function() {

        var rect = this.getBoundingClientRect();

        const w = media.getWidth();
        const h = media.getHeight();
        const o = 50;
        overlay.open({ rect, w, h, o });

        this.style.opacity = 0;

    });

    return gridItem;
});


//////////////////////////////
//////////////////////////////
//////////////////////////////

var proto = Object.assign({
        xxx: 'jsjsjsjsjssj',
        b: function() {
            console.log(this.xxx + 'bbbbbbb');
        }
    },
    {
        a: function() {
            console.log(this.xxx + 'kjbaskjdbs');
        }
    });

const test = Object.create(proto);
test.a()
test.b()


console.log(items);











