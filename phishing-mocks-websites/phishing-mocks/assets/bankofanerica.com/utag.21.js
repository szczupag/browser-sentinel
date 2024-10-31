//~~tv:20010.20140827
//~~tc: Tealium Custom Container

/*
  Tealium Custom Container Notes:
  - Add sending code between "Start Tag Sending Code" and "End Tag Sending Code".
  - Add JavaScript tag library code between "Start Tag Library Code" and "End Tag Library Code".
  - Add JavaScript code only, do not add HTML code in this file.
  - Remove any <script> and </script> tags from the code you place in this file.

  Loading external JavaScript files (Loader):
  - If you need to load an additional external JavaScript file, un-comment the singe-line JavaScript comments ("//") within the following Loader sections near the bottom of this file:
      - "Start Loader Function Call"
      - "End Loader Function Call"
      - "Start Loader Callback Function"
      - "End Loader Callback Function"
  - After un-commenting, insert the path to the external JavaScript file you want to load.
  - Finally, within the Loader callback function, insert the JavaScript code that should run after the external JavaScript file has loaded.
*/

/* Start Tag Library Code */
/* End Tag Library Code */

//tealium universal tag - utag.sender.custom_container ut4.0.202409180021, Copyright 2024 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Start Tealium loader 4.32
    // Please do not modify
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {'view' : 1};

    u.initialized = false;

      u.map={};
  u.extend=[function(a,b){ try{ if(1){
(function(parent, name, context, definition) {
    // Check if is used inside a "modern" browser, if not, return
    if (!context || !context[parent] || !Array.prototype.filter) {
        return;
    }

    context[parent]['plugins'][name] = definition();
})('bactm', 'dart', typeof window !== 'undefined' ? window : null, function() {

    var parent                          = 'bactm'
      , ba                              = window[parent]
      , win                             = window
      , doc                             = document || {}
      , version                         = '1.2.1'
      , ddo                             = win.digitalData
      , LOG_LEVEL = {
            OFF     : 10
          , FATAL   : 5
          , ERROR   : 4
          , WARN    : 3
          , INFO    : 2
          , DEBUG   : 1
        };

    /**
     * Global Site Tag Setup
     */
    window.gDataLayer = window.gDataLayer || [];

    window.gtag = function() {
        gDataLayer.push(arguments);
    }
    gtag('js', new Date());

    // If the window.digitalData object is not available. Nothing we can do. Exit.
    if(!ddo) return;

    // ===========================================================================
    // Core standard DART functions.
    // ===========================================================================

    var _handlePageview = function(details) {
        ba._log('Handling a pageview.', details, LOG_LEVEL.DEBUG);
        if(!details.pageInfo) return;

        var pi = details.pageInfo
          , pa = ddo.page.attributes
          , dart;

        // First, let's see if we can get DART tags from the page attributes.
        if(pi.language === 'es' && pa.standardDARTes && pa.standardDARTes.length > 0) {
            dart = _dartAsArray(pa.standardDARTes);
        } else if(pa.standardDART) {
            dart = _dartAsArray(pa.standardDART);
        }

        // Now let's see if there were any DART tags in the pageInfo object.
        if(pi.standardDART && pi.standardDART.length > 0) dart = _dartAsArray(pi.standardDART);

        if(pi.language === 'es' && pi.standardDARTes && pi.standardDARTes.length > 0) {
            dart = _dartAsArray(pi.standardDARTes);
        }

        if(dart) _processDartTags(dart);
    }

    var _processDartTags = function(dart) {
        ba._log('Processing the DART tags:', dart, LOG_LEVEL.DEBUG);
        if(!dart) return;

        for(var i = 0, len = dart.length; i < len; i++) {
            _fireDartTag(dart[i]);
        }
    }

    var _fireDartTag = function(dartUrl) {
        ba._log('Firing DART tag:', dartUrl, LOG_LEVEL.DEBUG);
        if(!dartUrl) return;

        if(!_isAcceptableUrl(dartUrl)) {
            ba._log('The DART Url provided is not a valid URL. No action was taken.', dartUrl, LOG_LEVEL.ERROR);
            return;
        }

        var ca = ddo.cart && ddo.cart.attributes;
        if (ca) {
            if (ca.sourceCode) dartUrl += ";u18=" + ca.sourceCode;
            if (ca.applicationId) dartUrl += ";u3=" + ca.applicationId;
        }

        var ranNum = Math.random() * 10000000000000;
        dartUrl += ";num=" + ranNum;

        _dartToGtag(dartUrl);
    }

    var _dartToGtag = function(dartUrl) {
        try {
            var options = {
                'allow_custom_scripts': true,
                'dc_custom_params': {}
            },
            params = dartUrl.split(';').slice(1);
    
            // Make sure src type and cat are present
            if (ba.polyfills.string.includes(dartUrl, 'src=') && ba.polyfills.string.includes(dartUrl, 'type=') && ba.polyfills.string.includes(dartUrl, 'cat=')) {
                var src,
                type,
                cat;
                params.forEach(function (param) {
                    if (ba.polyfills.string.includes(param, 'src=')) {
                        src = param.split('=')[1];
                    } else if (ba.polyfills.string.includes(param, 'type=')) {
                        type = param.split('=')[1];
                    } else if (ba.polyfills.string.includes(param, 'cat=')) {
                        cat = param.split('=')[1];
                    } else if (RegExp("u[0-9]+=.*").test(param)) {
                        options[param.split('=')[0]] = param.split('=')[1];
                    } else if (ba.polyfills.string.includes(param, 'qty=')) {
                        options.quantity = param.split('=')[1];
                    } else if (ba.polyfills.string.includes(param, 'cost=')) {
                        options.value = param.split('=')[1];
                    } else if (ba.polyfills.string.includes(param, 'dc_lat=')) {
                        options.dc_custom_params.dc_lat = param.split('=')[1];
                    } else if (ba.polyfills.string.includes(param, 'tag_for_child_directed_treatment')) {
                        options.dc_custom_params.tag_for_child_directed_treatment = param.split('=')[1];
                    } else return;
                });
                options.send_to = "DC-" + src + "/" + type + "/" + cat + "+unique";
                console.log(options);
            } else return;
    
            gtag('config', 'DC-' + src);
            gtag('event', 'conversion', options);    
        } catch (e) {
            ba._log('There was an error when trying to fire the DART tag.', e, LOG_LEVEL.ERROR);
        }    
    }

    // ===========================================================================
    // End core standard DART functions.
    // ===========================================================================

    // ===========================================================================
    // Core click DART functions.
    // ===========================================================================

    var _dartLookupTableToDDO = function() {
      try{
        var lookupTable = utag_data['dart_lookup_click_element'];
        if(typeof lookupTable === 'undefined') return;

        var ddoDART = _getDartFromDDO();
        lookupTable.split('|').forEach(function(dart) {
            ddoDART.push(dart);
        });
      } catch (err) {
        bactm.reportError(err);
      }
    }

    var _setupClickDart = function() {
        _dartLookupTableToDDO();

        var ddoDART = _getDartFromDDO();
        if(ddoDART.length === 0) return;

        for(var i = 0, len = ddoDART.length; i < len; i++) {
            var dart = ddoDART[i]
              , dartDetails = dart.split('-_-');
            if(dartDetails.length < 2) continue;

            var selector = dartDetails[0]
              , dartUrl = dartDetails[1];
            if(!_isAcceptableUrl(dartUrl)) continue;

            if(selector.indexOf('class>') > -1) {
                selector = selector.split('>')[1];
                var elements = doc.getElementsByClassName(selector);
                _addClickEventsToAll(elements, dartUrl);
                continue;
            }

            var element = doc.getElementById(selector);
            if(element) {
                _addClickEventListener(element, dartUrl);
                continue;
            }

            var elements = doc.getElementsByName(selector);
            _addClickEventsToAll(elements, dartUrl);
        }
    }

    var _addClickEventsToAll = function(elements, dartUrl) {
        if(!elements || elements.length === 0) return;

        for(var i = 0, len = elements.length; i < len; i++) {
            _addClickEventListener(elements[i], dartUrl);
        }
    }

    var _addClickEventListener = function(el, dartUrl) {
        if(el.addEventListener) {
            el.addEventListener('click', function() { _fireDartTag(dartUrl); });
        }
    }

    // ===========================================================================
    // End core click DART functions.
    // ===========================================================================

    // ===========================================================================
    // Helper functions.
    // ===========================================================================

    var _getDartFromDDO = function() {
        ddo.page = ddo.page || {};
        ddo.page.pageInfo = ddo.page.pageInfo || [];
        var pv = dataCollector.filter(function(d){return d.event === 'pageview'});
        var pageInfoKey = pv[pv.length -1].pageInfoKey;

        if(ddo.page.pageInfo.length > 0 && ddo.page.pageInfo[pageInfoKey] &&
            ddo.page.pageInfo[pageInfoKey].hasOwnProperty('clickDART')) return ba._asArray(ddo.page.pageInfo[pageInfoKey].clickDART);

        ddo.page.attributes = ddo.page.attributes || {};
        var ddoDART = ddo.page.attributes.clickDART = ddo.page.attributes.clickDART ?
                                                      ba._asArray(ddo.page.attributes.clickDART) :
                                                      [];

        return ddoDART;
    }

    var _dartAsArray = function(dart) {
        if(dart.indexOf(',') > -1) {
            dart = dart.split(',');
        } else {
            dart = ba._asArray(dart);
        }

        return dart;
    }

    var _isAcceptableUrl = function(str) {
        return str.indexOf('http') > -1 && str.indexOf('://') > -1;
    }

    // ===========================================================================
    // End helper functions.
    // ===========================================================================

    /**
     * Initialization function fired as soon as library loads.
     *
     * @private
     * @returns {void}
     */
    var _init = function() {
        ba._log('bactm.plugins.dart v' + version + ' initializing.', LOG_LEVEL.INFO);

        ba.on('setupDartTags', _handlePageview);
        ba.on('initClickAttributes', _setupClickDart);
    }

    /**
     * Initialize our plugin on library load.
     */
    _init();

    /**
     * Functions to return publicly.
     */
    return {
        '_processDartTags'  : _processDartTags
      , '_fireDartTag'      : _fireDartTag
      , 'version'           : version
    };

});

} } catch(e){ utag.DB(e) }  }];


    u.send = function(a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f, i;

        u.data = {
          /* Initialize default tag parameter values here */
          /* Examples: */
          /* "account_id" : "1234567" */
          /* "base_url" : "//insert.your.javascript.library.url.here.js" */
          /* A value mapped to "account_id" or "base_url" in TiQ will replace these default values. */
        };


        /* Start Tag-Scoped Extensions Code */
        /* Please Do Not Edit This Section */
        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};
        /* End Tag-Scoped Extensions Code */


        /* Start Mapping Code */
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        /* End Mapping Code */


        /* Start Tag Sending Code */

          // Insert your tag sending code here.

        /* End Tag Sending Code */


        /* Start Loader Callback Function */
        /* Un-comment the single-line JavaScript comments ("//") to use this Loader callback function. */

        //u.loader_cb = function () {
          //u.initialized = true;
          /* Start Loader Callback Tag Sending Code */

            // Insert your post-Loader tag sending code here.

          /* End Loader Callback Tag Sending Code */
        //};

        /* End Loader Callback Function */


        /* Start Loader Function Call */
        /* Un-comment the single-line JavaScript comments ("//") to use Loader. */

          //if (!u.initialized) {
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_21' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_21' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("21", "bofa.main");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

