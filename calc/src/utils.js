

const q = function(url) {
    var query = url.split('?')[1];
    var params = {};
    if (typeof query === 'string') {
        var args = query.split('&');

        params = args.reduce(function(res, item) {
            var x = item.split('=');
            res[x[0]] = x[1];
            return res;
        }, {});
    }

    return params;
};



module.exports = {
    q: q
};