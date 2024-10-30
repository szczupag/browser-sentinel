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
try{
  (function(parent, name, context, definition) {
  // Check if is used inside a "modern" browser, if not, return
  if (!context || !context[parent] || !Array.prototype.filter) {
  return;
  }
    
  context[parent]['plugins']['feedback'] = definition();
  })('bactm', 'feedback', typeof window !== 'undefined' ? window : null, function() {
    
  var parent                        = 'bactm'
  , ba                              = window[parent]
  , win                             = window
  , doc                             = document || {}
  , version                         = '1.0.0'
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
    
  
      const launchMedallia = function(a, b) {
          try {
            // Standard
            const baseMedalliaURL = "https://resources.digital-cloud-bofa.medallia.com/direct/form.html?region=digital-cloud-bofa&websiteId=547&formId=37";
            // Staging
            if (document.URL.indexOf('medalliastaging=true') > -1) {
                var stgMedalliaURL = "https://resources.digital-cloud-us-stg.medallia.com/direct/form.html?region=digital-cloud-us-stg&websiteId=10805&formId=1016";
                }
            // Small business
            if (typeof utag_data.load_sb_medallia){
                if (utag_data.load_sb_medallia === "true"){
                    var sbMedalliaURL = "https://resources.digital-cloud-bofa.medallia.com/direct/form.html?region=digital-cloud-bofa&websiteId=547&formId=239";
                }
            }
            // Preferred rewards
            if (typeof utag_data.load_pr_medallia){
                if (utag_data.load_pr_medallia === "true") {
                    var prMedalliaURL = "https://resources.digital-cloud-bofa.medallia.com/direct/form.html?region=digital-cloud-bofa&websiteId=547&formId=238";
                }
            }
            const medalliaURL = sbMedalliaURL || prMedalliaURL || stgMedalliaURL || baseMedalliaURL;
            const medalliaRef = "&referringURL=" + window.location.href;
            let pageLanguage = document.documentElement.lang.toLowerCase();
            const userGSID = (typeof bactm._readCookie != 'undefined' && typeof bactm._readCookie('GSID') != 'undefined') ? "&gsidcookie=" + bactm._readCookie("GSID") : "&gsidcookie=abc123";
            pageLanguage = pageLanguage.includes("es") ? "es-us" : "en";
            const medalliaLanguage = "&languageLocale=" + pageLanguage;
            
            // Constructing entire Medallia URL
            const constructedMedalliaUrl = medalliaURL + medalliaLanguage + medalliaRef + userGSID;
            // Medallia default settings
            const urlSettings = "height=730,width=530,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes";
            
            Window = window.open(constructedMedalliaUrl, "popUpWindow1", urlSettings);
          } catch(e) {
              bactm.reportError(e);
          }
      }
  
  
  
    
    
  // ===========================================================================
  // Core functions.
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
  ba._log('medallia plugin v' + version + ' initializing.', LOG_LEVEL.INFO);
    
  // ba.ready();
  }
    
  /**
  * Initialize our plugin on library load.
  */
  _init();
    
  /**
  * Functions to return publicly.
  */
  return { 
      "launch": launchMedallia
  };
    
  });
} catch(e){
  bactm.reportError(e)
}
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
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_102' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_102' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("102", "bofa.main");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

