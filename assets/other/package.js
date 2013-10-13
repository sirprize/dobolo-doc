var profile = (function () {

    var miniExcludes = {
            "other/package": 1
        },
        amdExcludes = {},
        isJsRe = /\.js/
    ;

    return {
        resourceTags: {
            test: function (filename, mid) {
                return false;
            },

            miniExclude: function (filename, mid) {
                return mid in miniExcludes;
            },

            amd: function (filename, mid) {
                return /\.js$/.test(filename) && !(mid in amdExcludes);
            },

            copyOnly: function (filename, mid) {
                return isJsRe.test(filename);
            }
        }
    };
})();