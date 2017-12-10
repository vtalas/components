const Media = function() {

    var proto = {
        init() {
            window.addEventListener('resize', () => {
                this.width = null;
                this.height = null;
            });
            return this;
        },
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
    };


    return Object.create(proto).init();
};

export default Media;