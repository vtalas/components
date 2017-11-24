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

export default Media;