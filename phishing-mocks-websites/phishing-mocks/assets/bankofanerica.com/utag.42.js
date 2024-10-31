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
})('bactm', 'mboxCreate', typeof window !== 'undefined' ? window : null, function() {

    var parent                          = 'bactm'
        , ba                              = window[parent]
        , win                             = window
        , doc                             = document || {}
        , version                         = '1.3.3'
        , ddo                             = win.digitalData
        , mboxesCreated                   = []
        , LOG_LEVEL = {
        OFF     : 10
        , FATAL   : 5
        , ERROR   : 4
        , WARN    : 3
        , INFO    : 2
        , DEBUG   : 1
    };

    // If the window.digitalData object is not available. Nothing we can do. Exit.
    if(!ddo) return;

    // ===========================================================================
    // Core mbox create functions.
    // ===========================================================================

    var mboxParams = function () {
      try{
        var bactmCookie = null;
        document.cookie.split(";").forEach(function(e){
            e = decodeURIComponent(e);
            if (e.indexOf("bactm_lts") > -1)
                bactmCookie = JSON.parse(e.substr(e.indexOf("=") + 1, e.length));
        });
        if (bactmCookie !== null) {
            vid = bactmCookie.adobeMID;
            var mcMid = vid.d_mid;
            var mcBlob = vid.d_blob;
            var mcReg = vid.dcs_region;
            return {
                mboxMCGVID: mcMid,
                mboxAAMB: mcBlob,
                mboxMCGLH: mcReg
            }
        }
      } catch (err) {
        bactm.reportError(err);
      }
    }

    var getCookie = function (name) {
      try{
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
      } catch (err) {
        bactm.reportError(err);
      }
    };

    var _getTntIdFromCookie = function() {
        return _getValueFromMboxCookie('pc');
    };

    var _getSessionIdFromCookie = function() {
        var sessionId = _getValueFromMboxCookie('session');
        if(!sessionId) sessionId = _generateId();
        return sessionId;
    };

    var _getValueFromMboxCookie = function(key) {
        var mbox = getCookie('mbox');

        var tntIdIndicator = mbox.toLowerCase().indexOf(key.toLowerCase() + '#');
        if(tntIdIndicator === -1) return;

        var tntIdStart = mbox.indexOf('#', tntIdIndicator) + 1
            , tntIdEnd = mbox.indexOf('#', tntIdStart);

        return mbox.substring(tntIdStart, tntIdEnd);
    };

    var _generateId = function() {
        var e, t, n = [],
            r = "0123456789abcdef";
        for (e = 0; 36 > e; e++) n[e] = r.substr(Math.floor(16 * Math.random()), 1);
        return n[14] = "4", n[19] = r.substr(3 & n[19] | 8, 1), n[8] = n[13] = n[18] = n[23] = "-", t = n.join(""), t.replace(/-/g, "");
    };

    var _getWidth = function() {
        return Math.max(
            doc.body.scrollWidth
            , doc.documentElement.scrollWidth
            , doc.body.offsetWidth
            , doc.documentElement.offsetWidth
            , doc.documentElement.clientWidth
        );
    };

    var _getHeight = function() {
        return Math.max(
            doc.body.scrollHeight
            , doc.documentElement.scrollHeight
            , doc.body.offsetHeight
            , doc.documentElement.offsetHeight
            , doc.documentElement.clientHeight
        );
    };

    var _handlePageload = function(info) {
        if(typeof ddo.disable_pageviewOnLoad !== 'undefined' && ddo.disable_pageviewOnLoad) return;

        var details = {
            pageInfo: ddo.page.pageInfo[info.pageInfoArrayIndex]
        }

        _handlePageview(details);
    }

    var _handlePageview = function(details) {
        ba._log('bactm.plugins.mboxCreate handling a pageview.', details, LOG_LEVEL.DEBUG);
        if(!details.pageInfo) return;

        var pi = details.pageInfo
            , pa = ddo.page.attributes
            , mbox = {};

        if(pi.language === 'es') {
            mbox = _getParameters(pi, pa, 'es');
        } else {
            mbox = _getParameters(pi, pa);
        }

        if(pa && pa.mbox && pa.mbox.name === 'bac_consumer_cc_nonsolicited_conversion') {
            let creatingMboxFetchUrl = 'https://bankofamerica.tt.omtrdc.net/m2/bankofamerica/mbox/json?' +
                'screenHeight=' + window.screen.height +
                '&screenWidth=' + window.screen.width +
                '&colorDepth=' + window.screen.colorDepth +
                '&mboxPage=' + _generateId() +
                '&mboxVersion=1.8.0' +
                '&mboxHost=' + window.location.hostname +
                '&mboxUrl=' + escape(window.location.href) +
                '&mboxReferrer=' + escape(document.referrer) +
                '&mboxXDomain=enabled' +
                '&mboxAAMB=' +  mboxParams().mboxAAMB +
                '&mboxMCGLH=' + mboxParams().mboxMCGLH +
                '&mboxMCGVID=' + mboxParams().mboxMCGVID +
                '&mboxSession=' + _getSessionIdFromCookie() +
                '&mboxPC=' + _getTntIdFromCookie() +
                '&browserWidth=' + _getWidth() +
                '&browserHeight=' + _getHeight() +
                '&browserTimeOffset=' + new Date().getTimezoneOffset();
            const conversionUrl = creatingMboxFetchUrl + '&mbox=bac_consumer_cc_nonsolicited_conversion&orderId=' + pa.mbox.orderId + '&orderTotal=1.0.0' + '&productPurchasedId=' + pa.mbox.productPurchasedId + '&decision=' + pa.mbox.decision;
            fetch(conversionUrl)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    console.log(JSON.stringify(myJson));
                });
        }

        if(pa && pa.mbox && pa.mbox.name === 'bac_consumer_cc_nonsolicited_verification') {
            let creatingMboxFetchUrl = 'https://bankofamerica.tt.omtrdc.net/m2/bankofamerica/mbox/json?' +
                'screenHeight=' + window.screen.height +
                '&screenWidth=' + window.screen.width +
                '&colorDepth=' + window.screen.colorDepth +
                '&mboxPage=' + _generateId() +
                '&mboxVersion=1.8.0' +
                '&mboxHost=' + window.location.hostname +
                '&mboxUrl=' + escape(window.location.href) +
                '&mboxReferrer=' + escape(document.referrer) +
                '&mboxXDomain=enabled' +
                '&mboxAAMB=' +  mboxParams().mboxAAMB +
                '&mboxMCGLH=' + mboxParams().mboxMCGLH +
                '&mboxMCGVID=' + mboxParams().mboxMCGVID +
                '&mboxSession=' + _getSessionIdFromCookie() +
                '&mboxPC=' + _getTntIdFromCookie() +
                '&browserWidth=' + _getWidth() +
                '&browserHeight=' + _getHeight() +
                '&browserTimeOffset=' + new Date().getTimezoneOffset();
            const verificationUrl = creatingMboxFetchUrl + '&mbox=bac_consumer_cc_nonsolicited_verification&orderId=' + pa.mbox.orderId + '&orderTotal=1.0.0' + '&productPurchasedId=' + pa.mbox.productPurchasedId;
            fetch(verificationUrl)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    console.log(JSON.stringify(myJson));
                });
        }

        if(pa && pa.mbox && pa.mbox.name === 'bac_consumer_cc_nonsolicited_appstart') {
            let creatingMboxFetchUrl = 'https://bankofamerica.tt.omtrdc.net/m2/bankofamerica/mbox/json?' +
                'screenHeight=' + window.screen.height +
                '&screenWidth=' + window.screen.width +
                '&colorDepth=' + window.screen.colorDepth +
                '&mboxPage=' + _generateId() +
                '&mboxVersion=1.8.0' +
                '&mboxHost=' + window.location.hostname +
                '&mboxUrl=' + escape(window.location.href) +
                '&mboxReferrer=' + escape(document.referrer) +
                '&mboxXDomain=enabled' +
                '&mboxAAMB=' +  mboxParams().mboxAAMB +
                '&mboxMCGLH=' + mboxParams().mboxMCGLH +
                '&mboxMCGVID=' + mboxParams().mboxMCGVID +
                '&mboxSession=' + _getSessionIdFromCookie() +
                '&mboxPC=' + _getTntIdFromCookie() +
                '&browserWidth=' + _getWidth() +
                '&browserHeight=' + _getHeight() +
                '&browserTimeOffset=' + new Date().getTimezoneOffset();
            const appStartUrl = creatingMboxFetchUrl + '&mbox=bac_consumer_cc_nonsolicited_appstart' + '&orderTotal=1.0.0' + '&productPurchasedId=' + pa.mbox.productPurchasedId ;
            fetch(appStartUrl)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    console.log(JSON.stringify(myJson));
                });
        }

        if(mbox.mboxCreateParam) {
            _mboxCreate(mbox.mboxCreateParam, mbox.mboxCreateArgs);
        }

    };

    var _getParameters = function(pi, pa, lang) {
        lang = lang ? ('_' + lang) : '';
        var mboxParamKey = 'mboxCreateParam' + lang
            , mboxArgsKey = 'mboxCreateArgs' + lang
            , mboxCreateParam = pi[mboxParamKey] || pa[mboxParamKey]
            , mboxCreateArgs = pi[mboxArgsKey] || pa[mboxArgsKey];

        return {
            'mboxCreateParam'   : mboxCreateParam || ''
            , 'mboxCreateArgs'    : mboxCreateArgs
        }
    }

    var _mboxCreate = function(mboxCreateParam, mboxUpdateArgs, mBoxDivId) {
        if(!mboxCreateParam) return;
        if(mboxesCreated.indexOf(mboxCreateParam) > -1) return;

        mBoxDivId = mBoxDivId || 'mboxDiv';

        try {
            if(!doc.getElementById(mBoxDivId))
            {
                var d = doc.createElement('div');
                d.id = mBoxDivId;
                d.className = 'mboxDefault';
                doc.body.insertBefore(d, doc.body.firstChild);
            }

            mboxUpdateArgs = mboxUpdateArgs ? ba._asArray(mboxUpdateArgs) : [];
            mboxUpdateArgs.unshift(mboxCreateParam);

            if(typeof mboxDefine === 'function' && typeof mboxUpdate === 'function') {
                mboxDefine(mBoxDivId, mboxCreateParam);
                win['mboxUpdate'].apply(this, mboxUpdateArgs);

                mboxesCreated.push(mboxCreateParam);
            } else {
                ba._log('mboxUpdate is not a function. mbox not updated.', LOG_LEVEL.WARN);
            }
        } catch(e) {
            ba._log('There was an error when trying to create the mbox.', e, LOG_LEVEL.ERROR);
        }
    }

    // ===========================================================================
    // End core mbox create functions.
    // ===========================================================================

    // ===========================================================================
    // Helper functions.
    // ===========================================================================



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
        ba._log('bactm.plugins.mboxCreate v' + version + ' initializing.', LOG_LEVEL.INFO);

        // if we don't currently have access to the adobe target object and
        // we are loading at.js via Telium, fire once the event is raised that at.js has laoded.
        if(!(window.adobe && window.adobe.target) && ddo.load_adobetarget && String(ddo.load_adobetarget).toLowerCase() === 'true') {
            win.addEventListener('bactm-target-libload', _handlePageload);
        } else {
            ba.on('initTargetValues', _handlePageload);
        }
    }

    /**
     * Initialize our plugin on library load.
     */
    _init();

    /**
     * Functions to return publicly.
     */
    return { };

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
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_42' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_42' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("42", "bofa.main");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

