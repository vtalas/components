export const WebImage = function(image) {

    return Object.create({

        init(image) {
            this.image = image;
            this.el = document.createElement('img');
            return this;
        },

        render() {
            const img = this.el;
            const fullSize = new Image();

            fullSize.addEventListener('load', () => {
                img.setAttribute('src', fullSize.src);
            });

            fullSize.src = this.image.getUrl({ width: 1200 });

            img.setAttribute('src', this.image.getUrl({ width: 10 }));

            return this;
        }
    }).init(image);
}