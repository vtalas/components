import Backbone from 'backbone';
import _ from 'lodash';

var mm = mm || {}
mm.i18 = {
    t: (a) => a
}


const ServiceModel = Backbone.Model.extend({
    name: '',
    icon: ''
});

const BasicView = Backbone.View.extend({

    render() {
        const model = this.model;
        console.log(model.get('name'));
    }
});

const servicesProto = {

    getServices() {

    },

    listServices() {

    },

    addService() {

    }
};

const fileManagerProto = _.assign(
    {
        initialize() {
            console.log('init model');
        },
        getCurrentList() {
            return [
                new ServiceModel({ name: 'google' }),
                new ServiceModel({ name: 'box' }),
                new ServiceModel({ name: 'ones' }),
            ];
        }
    },
    servicesProto
);


const sevicesViewProto = {
    initServiceView() {
        console.log("init service view");
    }
};

const viewFactoryProto = {

    createView(model) {
        return new BasicView({ model });
    }
}

const fileManagerViewProto = _.assign({

        initialize() {

            this.initServiceView();
        },

        render() {
            this.renderFiles();
            return this;
        },

        renderFiles: function() {

            var $maps = this.$maps = $('<div/>', {
                'class': 'maps',
                'data-no-files-title': mm.i18n.t('filemanager.noFilesYet'),
                'data-no-matching-files': mm.i18n.t('filemanager.noFilesMatching')
            });
            var $mapsContainer = this.$mapsContainer = $('<div/>', { 'class': 'maps-container' });

            mm.diagramIndex.each(this.renderFile, this);

            this.renderDummyFillFiles();
            this.updateSearchResults();

            $mapsContainer.append($maps).appendTo(this.$content);
        },

        renderCurrentList() {

            var list = this.model.getCurrentList();

            for (var i = 0, n = list.length; i < n; i++) {
                const itemModel = list[i];
                let view = this.createView(itemModel);
                view.render();


            }
        }
    },
    sevicesViewProto,
    viewFactoryProto
);


var FileManager = Backbone.Model.extend(fileManagerProto);

var FileManagerView = Backbone.View.extend(fileManagerViewProto);


var model = new FileManager();
var view = new FileManagerView({ model: model });

console.log(view.render().el);





