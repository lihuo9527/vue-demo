exports.install = function (Vue) {
    Vue.prototype.ip = function () {
        return "http://127.0.0.1";
    };
    Vue.prototype.http_get = function (url, isAbsolutePath) {
        let ip = isAbsolutePath ? url : this.ip() + url;
        return this.$http.get(ip);
    };
    Vue.prototype.http_post = function (url, params, type, isAbsolutePath) {
        let boolean = type == "form" ? false : true;
        let ip = isAbsolutePath ? url : this.ip() + url;
        return this.$http.post(ip, params, { emulateJSON: boolean });
    };
}