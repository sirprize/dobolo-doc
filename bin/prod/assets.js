// http://dojotoolkit.org/reference-guide/1.7/build/index.html (Documentation)
// http://dojotoolkit.org/reference-guide/1.7/build/qref.html (Reference for Optimization Build Program)
// http://dojotoolkit.org/documentation/tutorials/1.7/build/ (Creating Builds)
// http://www.sitepen.com/blog/2012/06/12/feature-detection-and-device-optimized-builds/ (Feature Detection and Device Optimized Builds)
// http://www.sitepen.com/blog/2012/06/11/dgrid-and-dojo-nano-build/
// http://jamesthom.as/blog/2012/08/03/finding-nano/
// http://dojotoolkit.org/reference-guide/1.8/build/localizationExample.html


var baseStuff = [
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
    //"dojo/_base/xhr",

    "dojo/date",
    "dojo/date/locale",
    "dojo/cldr/supplemental",
    "dojo/i18n",
    "dojo/regexp",
    "dojo/NodeList-traverse",

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
    "dojo/keys",

    "dojo/Deferred",
    "dojo/promise/all",
    "dojo/promise/first",
    "dojo/promise/Promise",
    "dojo/when",

    "dojo/ready",
    "dojo/_base/unload",
    "dojo/_base/window",

    "dojo/_base/xhr",

    "dojo/_base/html",

    "dojo/_base/NodeList",
    "dojo/query",

    "mijit/_TemplatedMixin",
    "mijit/_WidgetBase",
    "mijit/_WidgetsInTemplateMixin",
    "mijit/Destroyable",
    "mijit/main",
    "mijit/registry",

    "dojo-form-controls/Button",
    "dojo-form-controls/Checkbox",
    "dojo-form-controls/Option",
    "dojo-form-controls/Radio",
    "dojo-form-controls/Select",
    "dojo-form-controls/Textarea",
    "dojo-form-controls/Textbox",
    "dojo-form-controls/MappedTextbox",

    "dobolo/Affix",
    "dobolo/Alert",
    "dobolo/Button",
    "dobolo/Calendar",
    "dobolo/DatepickerInput",
    "dobolo/ScrollSpy",
    "dobolo/ScrollTopSpyHelper",
    "dobolo/Util"
];





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
        { name: "mijit", location: "../../assets/vendor/sirprize/mijit" },
        { name: "dojo-form-controls", location: "../../assets/vendor/sirprize/dojo-form-controls" },
        { name: "dobolo", location: "../../assets/vendor/sirprize/dobolo" },
        { name: "frontend", location: "../../assets/scripts" },
        { name: "frontend-styles", location: "../../assets/styles" },
        { name: "other", location: "../../assets/other" }
    ],
 
    layers: {
        // This is the main loader module. It is a little special because it is treated like an AMD module even though
        // it is actually just plain JavaScript. There is some extra magic in the build system specifically for this
        // module ID.
        "dojo/dojo": {
            include: baseStuff,
            // By default, the build system will try to include dojo/main in the built dojo/dojo layer, which adds a
            // bunch of stuff we don’t want or need. We want the initial script load to be as small and quick as
            // possible, so we configure it as a custom, bootable base.
            customBase: true
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