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

const TEMPLATES = {
    GRID_ITEM: document.querySelector('._templates .grid-item'),
    OVERLAY: document.querySelector('._templates .template-overlay')
};

const DOM = {
    BODY: document.querySelector('body'),
};

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

const overlayProto = {

    init() {
        this.DOM = {};
        this.DOM.el = TEMPLATES.OVERLAY.cloneNode(true);
        this.DOM.path = this.DOM.el.querySelector('path');

        DOM.BODY.appendChild(this.DOM.el);
        return this;
    },

    open(opt) {

        this.DOM.el.style.opacity = 1;
        this.DOM.el.classList.add('active');

        let rect = opt.rect;
        let w = opt.w;
        let o = opt.o;
        let h = opt.h;

        var d = [
            'M', rect.left, rect.top,
            rect.left, rect.height + rect.top,
            rect.left + rect.width, rect.height + rect.top,
            rect.left + rect.width, rect.top
        ];

        this.DOM.path.setAttribute('opacity', 1);
        this.DOM.path.setAttribute('d', d.join(' '));

        var t = anime.timeline()
        t.add({
            targets: this.DOM.path,
            duration: 500,
            easing: 'easeOutQuad',
            elasticity: 250,
            d: [{
                value: [
                    'M', rect.left, rect.top,
                    0, h,
                    w, h,
                    rect.left + rect.width, rect.top
                ].join(' ')
            }
            ],
            complete: () => this.isAnimating = false
        }).add({
            targets: this.DOM.path,
            duration: 400,
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
            complete: () => this.isAnimating = false
        })

    }
};

const Overlay = function() {
    let a = Object.create(overlayProto);
    return a.init();
};

const Media = function() {

    var proto = {
        getWidth: function() {
            if (!this.width) {
                this.width = window.innerWidth;
            }
            return this.width;
        },
        getHeight: function() {
            if (!this.height) {
                this.height = window.innerHeight;
            }
            return this.height;
        }
    }

    return Object.create(proto);
};

const media = Media();
const overlay = Overlay();

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











