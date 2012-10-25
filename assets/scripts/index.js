require([
    "dobolo/Affix",
    "dobolo/ScrollSpy",
    "dojo/_base/window",
    "dojo/query",
    "dojo/parser",
    "dojo/domReady!"
], function (
    Affix,
    ScrollSpy,
    baseWin,
    query,
    parser
) {
    "use strict";
    
    parser.parse();
    //hljs.initHighlightingOnLoad();
    window.prettyPrint && prettyPrint();
    
    var affix = new Affix({
        offsetTop: function () {
            return document.width <= 980 ? 245 : 195;
        }
    }, query('.bs-docs-sidenav')[0]);
    
    var scrollSpy = new ScrollSpy({
        targetSelector: '.bs-docs-sidenav',
        offsetNodeSelector: 'section.spy',
        offsetTop: 70,
        wait: 50
    }, baseWin.body());
});