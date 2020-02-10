export const StringFormatter = function () {

    /**
     * usage: var greeting = StringFormatter("Hi, {0}", name);
     */

    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
}