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
/**
 * @author Montier Elliott
 * @email montier.elliott@bofa.com
 * @author Kevin Conway
 * @email kconway2@bofa.com
 * @file bactm.plugin.glance
 * @date 03.02.2022
 */
try {
  (function (parent, name, context, definition) {
    if (!context || !context[parent] || !Array.prototype.filter) return;
    context[parent]['plugins']['glance'] = definition();
  })('bactm', 'glance', typeof window !== 'undefined' ? window : null, function () {

    var parent = 'bactm';
    var ba = window[parent];
    var win = window;
    var doc = document || {};
    var version = '2.0.0';
    var ddo = win.digitalData;
    var LOG_LEVEL = {
      OFF: 10,
      FATAL: 5,
      ERROR: 4,
      WARN: 3,
      INFO: 2,
      DEBUG: 1
    };

    if (!ddo) return;

    /**
     * @method masking
     * @public
     */
    var masking = function (maskSelectors = window.digitalData.page.attributes.glance.maskSelectors) {
      try {
        const allElementsToMask = []
        maskSelectors.forEach(selector => {
          const allOfThisSelector = document.querySelectorAll(selector);
          allOfThisSelector.forEach(item => allElementsToMask.push(item));
        });

        allElementsToMask.forEach(element => {
          element.classList.add("glance_masked")
        })
      } catch (err) {
        console.log("Error: glance_masked");
        bactm.reportError(err);
      }
    };

    /**
     * @method addGlanceLoadedClass
     * @private
     */
    var addGlanceLoadedClass = function () {
      try {
        const $glanceButtons = document.querySelectorAll('.glance-button');
        for (var i = 0; i < $glanceButtons.length; i++) {
          $glanceButtons[i].classList.add('glance_available');
        }
      } catch (err) {
        console.log("Error: glance available");
        bactm.reportError(err);
      }
    };

    /**
     * @method addGlanceLoadedClass
     * @private
     */
    var addGlanceNotLoadedClass = function () {
      try {
        console.log('bactm.plugin.glance: Glance Not Loaded classes');
        const $glanceButtons = document.querySelectorAll('.glance-button');
        for (var i = 0; i < $glanceButtons.length; i++) {
          $glanceButtons[i].classList.add('glance_unavailable');
        }
      } catch (err) {
        console.log("Error: glance_unavailable");
        bactm.reportError(err);
      }

    };

    /**
     * @method auth
     * @param params {object}
     * @public
     */
    var authSetup = function (params) {
      console.log('bactm.plugin.glance: Auth Setup called', params);
      const presencevisitor = new GLANCE.Presence.Visitor({
        visitorid: params || digitalData.user.PartyID
      });
      presencevisitor.presence();
      presencevisitor.connect();
    };

    /**
     * @method unauth
     * @param params {object}
     * @public
     */
    var startServer = function (params) {
      console.log('bactm.plugin.glance: Start Server called', params);
    };

    /**
     * @method addButtonListeners
     * @public
     */
    const addButtonListeners = () => {
      try {
        var glanceLinks = document.getElementsByClassName('browse-with-specialist');
        var cobrowseLink = document.getElementById('cobrowse');
        var glanceTrigger = () => GLANCE.Cobrowse.Visitor.showTerms({video: 'off'});
        if (window.spaParams) { // Check if sparta page
          for (let j = 0; j < glanceLinks.length; j++) {
            glanceLinks[j].addEventListener('click', glanceTrigger);
          }
        } else { // Borneo page
          if (cobrowseLink) {
            cobrowseLink.addEventListener('click', glanceTrigger)
          } else {
            console.log('Glance Button not available.')
          }
        }
      } catch (err) {
        console.log('Error: Glance Trigger')
        bactm.reportError(err)
      }
    }

    /**
     * @method appendGlanceScriptAndPrepCallback
     * @public
     */
    const appendGlanceScriptAndPrepCallback = (callback) => {
      const {ws, groupID, src, env} = digitalData?.page?.attributes?.glance;
      var glance = document.createElement('script');
      var head = document.getElementsByTagName('head')[0];
      glance.id = 'glance-cobrowse';
      glance.type = 'text/javascript';
      glance.src = src;
      glance.setAttribute('data-site', env)
      glance.setAttribute('data-presence', 'api')
      // set groupID for prod/staging
      glance.setAttribute('data-groupid', groupID)
      // set data-ws for prod/staging
      glance.setAttribute('data-ws', ws)

      // once glance script is fully initiated, run our callback functions
      glance.onload = () => {
        // we need to wait for the subsequent script loaded from GlanceCobrowseLoader
        bactm.scriptReady('GlancePresenceVisitor', { childList: true }, callback)
      };
      head.appendChild(glance)
    }

    // you can run this code block to set dummy cookies for testing.
    // Presence:
    // const bananas = new bactm.Cookies();
    // bananas.set('cb_session', 'bananas');
    // bananas.set('cb_type', 'presence');
    // Code:
    // const bananas = new bactm.Cookies();
    // bananas.set('cb_type', 'code');

    /**
     * @method init
     * @public
     */
    var _init = function () {
      ba._log('glance plugin v' + version + ' initializing.', LOG_LEVEL.INFO);
      const cookies = new ba.Cookies();
      const cbTypeCookie = cookies.get('cb_type')
      const cbSessionCookie = cookies.get('cb_session');
      const ddoPartyID = window?.digitalData?.user?.PartyID;

      const presenceScript = (cb) => {
        if (!cb) return;
        const scripts = document.getElementsByTagName('script');
        const scriptsArray = Array.from(scripts);
        const presenceScript = scriptsArray.filter(script => script.src.includes('GlancePresenceVisitor'));
        if (presenceScript.length > 0) return presenceScript[0].onload = () => { cb(); };
        return;
      }

      let mobilePartyID = (cbTypeCookie === 'presence' && cbSessionCookie.length > 0) ? cbSessionCookie : false;
      // prefer to use MDA-passed value from cookie. Else use DDO value, else return false.
      const evaluatePartyID = () => (mobilePartyID ? mobilePartyID : (ddoPartyID ? ddoPartyID : false));
      // trigger masking. Most masking is done via the salesforce glance dashboard, but this has always been around, so not removing it.
      masking();
      // if Glance defined, allow button to show. This is just on one page owned by Global Tenants team.
      if (!window.GLANCE) return addGlanceNotLoadedClass();
      addGlanceLoadedClass();
      // mobile partyID passed from MDA, use that, else use DDO partyID, else return false;
      var glancePartyID = evaluatePartyID();
      // proactively show code. This is mobile use-case only.
      if (cbTypeCookie === 'code' && GLANCE?.Cobrowse?.Visitor?.startSession) {
        // show code
        GLANCE.Cobrowse.Visitor.startSession();
        // delete cookie so we don't show it again on subsequent page loads.
        cookies.remove('cb_type');
      }
      // if we have a partyID, wait until presence script fully loaded, then publish presence.
      if (glancePartyID) return presenceScript(()=> {authSetup(glancePartyID)})
      return
    };

    /**
     * Run init
     */
    try {
      addButtonListeners();
      appendGlanceScriptAndPrepCallback(_init);
      bactm.on('vendor:glance:auth', authSetup)
    } catch (e) {
      bactm.reportError(e)
    }

    /**
     * Public methods
     */
    return {
      startServer: startServer,
      addGlanceLoadedClass: addGlanceLoadedClass
    };

  });
} catch (e) {
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
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_108' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_108' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("108", "bofa.main");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

