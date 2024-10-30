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
})('bactm', 'targetClicks', typeof window !== 'undefined' ? window : null, function() {

    var parent                          = 'bactm'
      , ba                              = window[parent]
      , win                             = window
      , doc                             = document || {}
      , version                         = '2.0.4'
      , ddo                             = win.digitalData
      , LOG_LEVEL = {
            OFF     : 10
          , FATAL   : 5
          , ERROR   : 4
          , WARN    : 3
          , INFO    : 2
          , DEBUG   : 1
        };

    // We have no DDO, exit immediately.
    if(!ddo) return;

    // ===========================================================================
    // Core functions.
    // ===========================================================================

    /**
     * An event handler which can be attached to the document and processes all
     * rules for the element which was clicked.
     *
     * @private
     * @param {MouseEvent} event - The click event which to get its path.
     * @returns {void}
     */
    var _documentClickEventHandler = function(info) {
        var e       = info.e
          , path    = info.path;

        // ba._log('The path for the element clicked is:', path, LOG_LEVEL.DEBUG);

        var mbox = _getMboxDataInPath(path) || {}
          , mboxName = mbox.mboxName;

        if(mboxName) {
            ba._log('Adobe Target container clicked:', mboxName, LOG_LEVEL.DEBUG);

            var payload = {
                'mbox'                      : mboxName + '-clicked'
              , 'mboxPC'                    : _getTntIdFromCookie()
              , 'mboxSession'               : _getSessionIdFromCookie()
              , 'mboxVersion'               : '0.9.4'
              , 'mboxHost'                  : win.location.hostname
            }

            if(mbox.clickToken)  payload['mboxTarget'] = mbox.clickToken;

            if(ba.plugins.adobemid) {
                payload['mboxMCGVID']   = payload['marketingCloudVisitorId'] = ba.plugins.adobemid.get('d_mid');
                payload['mboxAAMB']     = ba.plugins.adobemid.get('d_blob');
                payload['mboxMCGLH']    = ba.plugins.adobemid.get('dcs_region');
            }

            var ajax = new ba.Ajax()
              , qs = new ba.QueryString('');

            qs.load(payload);

            ajax
                .get('https://bankofamerica.tt.omtrdc.net/m2/bankofamerica/mbox/json?' + qs.toString()
                  , { sync: true }
                )
                .then(function() {
                    ba._log('Click data sent to Adobe Target.', payload, LOG_LEVEL.DEBUG);
                });
        }
    }

    // ===========================================================================
    // Core functions.
    // ===========================================================================

    // ===========================================================================
    // Helper functions.
    // ===========================================================================

    var _getMboxDataInPath = function(path) {
        var foundAnchor = false;
        for(var i = 0, len = path.length; i < len; i++) {
            var el = path[i];

            if(el.tagName && el.tagName === 'A') foundAnchor = true;

            if(typeof el.getAttribute === 'function' && el.getAttribute('data-ad-container')
               && foundAnchor) {
                return {
                    mboxName: el.getAttribute('data-ad-container')
                  , clickToken: el.getAttribute('data-ad-click-token')
                };
            }
        }
    }

    /**
     * Get the "tntId" value from the mbox cookie. The "tntId" is value is found in the
     * "mbox" cookie and preceeded by pc#. A # seperates the value and the timestamp.
     *
     * @private
     * @returns {string} tntId
     */
    var _getTntIdFromCookie = function() {
        return _getValueFromMboxCookie('pc');
    }

    /**
     * Get session value out of Adobe mbox cookie.
     *
     * @private
     * @returns {string} sessionId
     */
    var _getSessionIdFromCookie = function() {
        return _getValueFromMboxCookie('session');
    }

    /**
     * Get values by key out of Adobe's mbox cookie.
     * Example of mbox cookie: PC#dd67f8e7eb4840f0863929085526e673.17_24#1565300237|session#3ed55127eec84cb3876f448c778147c1#1502057298
     *
     * @private
     * @param {string} key
     * @returns {string} value
     */
    var _getValueFromMboxCookie = function(key) {
        var c = new ba.Cookies()
          , mbox = c.get('mbox');

        if(!mbox || !key) return;

        var tntIdIndicator = mbox.toLowerCase().indexOf(key.toLowerCase() + '#');
        if(tntIdIndicator === -1) return;

        var tntIdStart = mbox.indexOf('#', tntIdIndicator) + 1
          , tntIdEnd = mbox.indexOf('#', tntIdStart);

        console.log(tntIdStart, tntIdEnd);

        return mbox.substring(tntIdStart, tntIdEnd);
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
        ba._log('bactm.plugin.targetClicks v' + version + ' initializing.', LOG_LEVEL.INFO);

        ba.on('documentClicked', _documentClickEventHandler);
    }

    /**
     * Initialize our plugin on library load.
     */
    _init();

    /**
     * Functions to return publicly.
     */
    return {
        version     : version
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
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_48' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_48' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("48", "bofa.main");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

