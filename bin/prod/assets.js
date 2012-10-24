// http://dojotoolkit.org/reference-guide/1.7/build/index.html (Documentation)
// http://dojotoolkit.org/reference-guide/1.7/build/qref.html (Reference for Optimization Build Program)
// http://dojotoolkit.org/documentation/tutorials/1.7/build/ (Creating Builds)
// http://www.sitepen.com/blog/2012/06/12/feature-detection-and-device-optimized-builds/ (Feature Detection and Device Optimized Builds)
// http://www.sitepen.com/blog/2012/06/11/dgrid-and-dojo-nano-build/
// http://jamesthom.as/blog/2012/08/03/finding-nano/
// http://dojotoolkit.org/reference-guide/1.8/build/localizationExample.html


var noopStuff = [];

var eventStuff = [
    "dojo/_base/connect",
    "dojo/on",
    "dojo/topic",
    "dojo/Evented",
    "dojo/aspect",
    "dojo/_base/event",
    "dojo/dom-geometry",
    "dojo/_base/window",
    "dojo/dom",
    "dojo/dom-style",
    "dojo/mouse",
    "dojo/_base/sniff",
    "dojo/keys"
];

var promiseStuff = [
    "dojo/Deferred",
    "dojo/promise/all",
    "dojo/promise/first",
    "dojo/promise/Promise",
    "dojo/when"
];

var browserStuff = [
    "dojo/ready",
    "dojo/_base/unload",
    "dojo/_base/window"
];

var ajaxStuff = [
    "dojo/_base/xhr"
];

var domCommonStuff = [
    "dojo/_base/html"
];

var domExtraStuff = [
    "dojo/_base/NodeList",
    "dojo/query"
];

var widgetCommonStuff = [
    "dijit/_TemplatedMixin"
];

var widgetExtraStuff = [
    "dijit/_Widget"
];

var formClickStuff = [
    "dijitive/Button",
    "dijitive/Checkbox",
    "dijitive/Option",
    "dijitive/Radio"
];

var formSelectStuff = [
    "dijitive/Select"
];

var formTextStuff = [
    "dijitive/Textarea",
    "dijitive/Textbox"
];

var baseStuff = noopStuff.concat(
    eventStuff,
    promiseStuff,
    browserStuff,
    ajaxStuff,
    domCommonStuff,
    domExtraStuff,
    widgetCommonStuff,
    widgetExtraStuff,
    formClickStuff,
    formSelectStuff,
    formTextStuff
);





var profile = {
    releaseDir: "../../_assets",
    basePath: ".",
    action: "release",
    cssOptimize: "comments",
    mini: true,
    optimize: "closure",
    layerOptimize: "closure",
    stripConsole: "none", // all|none
    selectorEngine: "acme",
    packages:[
        { name: "dojo", location: "../../assets/vendor/dojo/dojo" },
        { name: "dijit", location: "../../assets/vendor/dojo/dijit" },
        { name: "dobolo", location: "../../assets/vendor/sirprize/dobolo" },
        { name: "frontend", location: "../../assets/scripts" },
        { name: "frontend-styles", location: "../../assets/styles" }
    ],
 
    layers: {
        // This is the main loader module. It is a little special because it is treated like an AMD module even though
        // it is actually just plain JavaScript. There is some extra magic in the build system specifically for this
        // module ID.
        "dojo/dojo": {
            include: [
                //"dojo/main"
                "dojo/sniff",
                "dojo/has",
                "dojo/_base/array",
                //"dojo/_base/browser",
                "dojo/_base/config",
                //"dojo/_base/connect",
                "dojo/_base/declare",
                //"dojo/_base/Deferred",
                //"dojo/_base/event",
                //"dojo/_base/fx",
                //"dojo/_base/html",
                //"dojo/_base/json",
                "dojo/_base/kernel",
                "dojo/_base/lang",
                //"dojo/_base/loader",
                //"dojo/_base/NodeList",
                //"dojo/_base/query",
                //"dojo/_base/sniff",
                //"dojo/_base/unload",
                //"dojo/_base/url",
                //"dojo/_base/window",
                //"dojo/_base/xhr"
            ],
            // By default, the build system will try to include dojo/main in the built dojo/dojo layer, which adds a
            // bunch of stuff we don’t want or need. We want the initial script load to be as small and quick as
            // possible, so we configure it as a custom, bootable base.
            customBase: true
        },
        "frontend/layer/event": {
            include: eventStuff
        },
        "frontend/layer/promise": {
            include: promiseStuff,
            exclude: noopStuff.concat(eventStuff)
        },
        "frontend/layer/browser": {
            include: browserStuff,
            exclude: noopStuff.concat(
                eventStuff,
                promiseStuff
            )
        },
        "frontend/layer/ajax": {
            include: ajaxStuff,
            exclude: noopStuff.concat(
                eventStuff,
                promiseStuff,
                browserStuff
            )
        },
        "frontend/layer/dom-common": {
            include: domCommonStuff,
            exclude: noopStuff.concat(
                eventStuff,
                promiseStuff,
                browserStuff,
                ajaxStuff
            )
        },
        "frontend/layer/dom-extra": {
            include: domExtraStuff,
            exclude: noopStuff.concat(
                eventStuff,
                promiseStuff,
                browserStuff,
                ajaxStuff,
                domCommonStuff
            )
        },
        "frontend/layer/widget-common": {
            include: widgetCommonStuff,
            exclude: noopStuff.concat(
                eventStuff,
                promiseStuff,
                browserStuff,
                ajaxStuff,
                domCommonStuff,
                domExtraStuff
            )
        },
        "frontend/layer/widget-extra": {
            include: widgetExtraStuff,
            exclude: noopStuff.concat(
                eventStuff,
                promiseStuff,
                browserStuff,
                ajaxStuff,
                domCommonStuff,
                domExtraStuff,
                widgetCommonStuff
            )
        },
        "frontend/layer/form-click": {
            include: formClickStuff,
            exclude: noopStuff.concat(
                eventStuff,
                promiseStuff,
                browserStuff,
                ajaxStuff,
                domCommonStuff,
                domExtraStuff,
                widgetCommonStuff,
                widgetExtraStuff
            )
        },
        "frontend/layer/form-select": {
            include: formSelectStuff,
            exclude: noopStuff.concat(
                eventStuff,
                promiseStuff,
                browserStuff,
                ajaxStuff,
                domCommonStuff,
                domExtraStuff,
                widgetCommonStuff,
                widgetExtraStuff,
                formClickStuff
            )
        },
        "frontend/layer/form-text": {
            include: formTextStuff,
            exclude: noopStuff.concat(
                eventStuff,
                promiseStuff,
                browserStuff,
                ajaxStuff,
                domCommonStuff,
                domExtraStuff,
                widgetCommonStuff,
                widgetExtraStuff,
                formClickStuff,
                formSelectStuff
            )
        },
        "frontend/index": {
            include: [
                "dobolo/Affix",
                "dobolo/Scrollspy"
            ],
            exclude: baseStuff
        }
    },

    // Providing hints to the build system allows code to be conditionally removed on a more granular level than
    // simple module dependencies can allow. This is especially useful for creating tiny mobile builds.
    // Keep in mind that dead code removal only happens in minifiers that support it! Currently, ShrinkSafe does not
    // support dead code removal; Closure Compiler and UglifyJS do.
    staticHasFeatures: {
        // The trace & log APIs are used for debugging the loader, so we don’t need them in the build
        'dojo-trace-api':0,
        'dojo-log-api':0,

        // This causes normally private loader data to be exposed for debugging, so we don’t need that either
        'dojo-publish-privates':0,

        // We’re fully async, so get rid of the legacy loader
        'dojo-sync-loader':0,
        
        // dojo-xhr-factory relies on dojo-sync-loader
        'dojo-xhr-factory':0,

        // We aren’t loading tests in production
        'dojo-test-sniff':0
    }
};