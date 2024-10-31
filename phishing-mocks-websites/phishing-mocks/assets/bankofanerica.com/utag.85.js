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
  u.extend=[function(a,b){ try{ if(1){b['reportURI']='https://glassbox-hlx-igw.bankofamerica.com/glassbox/reporting/aab600df-ed6d-5f46-dada-9c5376520067/cls_report'} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){
(function (parent, name, context, definition) {
  // Check if is used inside a "modern" browser, if not, return
  if (!context || !context[parent] || !Array.prototype.filter) {
    return;
  }
  context[parent]['plugins'][name] = definition();
})('bactm', 'glassbox', typeof window !== 'undefined' ? window : null, function () {
  try {
    var parent = 'bactm',
      ba = window[parent],
      win = window,
      doc = document || {},
      version = '1.2.3',
      ddo = win.digitalData,
      udo = b,
      LOG_LEVEL = {
        OFF: 10,
        FATAL: 5,
        ERROR: 4,
        WARN: 3,
        INFO: 2,
        DEBUG: 1
      };
    if (!ddo) return;

    const _setWinCLSConfig = function () {
      const defaultArgs = {
        domRecordEnabled: false,
        reportURI: udo.reportURI,
        interceptAjax: true,
        ajaxRecordMetadata: "always",
        ajaxRecordRequestBody: "never",
        ajaxRecordRequestHeaders: "always",
        ajaxRecordResponseBody: "never",
        ajaxRecordResponseHeaders: "always",
        ajaxRecordStats: "always",
        ajaxCaptureRequestCookie: true,
        ajaxResponseBodyMaxLength: -1,
        ajaxMaskRequestBody:
          [
            {
              predicate: "always",
              transformations:
                [
                  { type: "jsonfield", search: "dateOfBirth", replace: "XXXXX" },
                  { type: "jsonfield", search: "newPassword", replace: "XXXXX" },
                  { type: "jsonfield", search: "securityPin", replace: "XXXX" },
                  { type: "jsonfield", search: "answer", replace: "XXXX" },
                  { type: "jsonfield", search: "pin", replace: "XXXX" },
                  { type: "jsonfield", search: "displayId", replace: "XXXX" },
                  { type: "jsonfield", search: "taxId", replace: "XXXX" },
                  { type: "jsonfield", search: "id", replace: "XXXX" },
                  { type: "jsonfield", search: "tin", replace: "XXXX" },
                  { type: "jsonfield", search: "accountNumber", replace: "XXXX" },
                  { type: "jsonfield", search: "accountnumber", replace: "XXXX" },
                  { type: "jsonfield", search: "debitCardAccountNumber", replace: "XXXX" },
                  { type: "jsonfield", search: "debitCardExpMonth", replace: "XXXX" },
                  { type: "jsonfield", search: "debitCardExpYear", replace: "XXXX" },
                  { type: "jsonfield", search: "debitCardCVV", replace: "XXXX" },
                  { type: "jsonfield", search: "birthDateDisplay", replace: "XXXX" }
                ]
            }
          ],
        ajaxMaskResponseBody:
          [
            {
              predicate: "always",
              transformations:
                [
                  { type: "jsonfield", search: "dateOfBirth", replace: "XXXXX" },
                  { type: "jsonfield", search: "newPassword", replace: "XXXXX" },
                  { type: "jsonfield", search: "securityPin", replace: "XXXX" },
                  { type: "jsonfield", search: "answer", replace: "XXXX" },
                  { type: "jsonfield", search: "pin", replace: "XXXX" },
                  { type: "jsonfield", search: "displayId", replace: "XXXX" },
                  { type: "jsonfield", search: "taxId", replace: "XXXX" },
                  { type: "jsonfield", search: "id", replace: "XXXX" },
                  { type: "jsonfield", search: "tin", replace: "XXXX" },
                  { type: "jsonfield", search: "number", replace: "XXXX" },
                  { type: "jsonfield", search: "accountNumber", replace: "XXXX" },
                  { type: "jsonfield", search: "accountnumber", replace: "XXXX" },
                  { type: "jsonfield", search: "fromAccountNum", replace: "XXXX" },
                  { type: "jsonfield", search: "formattedAccountNumber", replace: "XXXX" },
                  { type: "jsonfield", search: "routingNumber", replace: "XXXX" },
                  { type: "jsonfield", search: "wireRoutingNumber", replace: "XXXX" },
                  { type: "jsonfield", search: "displayId", replace: "XXXX" },
                  { type: "jsonfield", search: "taxIDNumber", replace: "XXXX" },
                  { type: "jsonfield", search: "birthDateDisplay", replace: "XXXX" }
                ]
            }
          ],
        /* END ajax */
        /* BEGIN behavior */
        idleEventTimeInterval: -1,
        iframesAutoInject: true,
        recordHovers: true,
        recordMouseMoves: true,
        recordScrolls: true,
        reportToStorageAfterUnload: true,
        /* END behavior */
        /*BEGIN MASKING*/
        //Value Masking (INPUT)
        valueMaskingMode: "whitelist",
        maskWhitelistValueById: [],
        maskBlacklistValueById: [],
        maskWhitelistValueByClass: ["gb_unmask"],
        maskBlacklistValueByClass: ["gb_mask"],
        valueWhitelistMaskSimpleSelector: [],
        valueBlacklistMaskSimpleSelector: [],
        //DOM Masking
        domMaskingMode: "blacklist",
        domWhitelistMaskContentById: [],
        domBlacklistMaskContentById: [],
        domWhitelistMaskContentByClass: ["gb_unmask"],
        domBlacklistMaskContentByClass: ["gb_mask"],
        domWhitelistMaskSimpleSelector: [],
        domBlacklistMaskSimpleSelector:
          [
            "#ssn",
            "#ssNumber",
            "img[src^='https://smetrics'\]",
            ".gis-mask", ".tl-private",
            ".gis-mask-original",
            ".gis-mask-input",
            ".gis-mask-value",
            "[data-field-type='mmddyyyy']",
            "[data-field-type= 'ssn']",
            '[data-field-type="email"]',
            '[data-field-type="phonePrefill"]',
            '[data-field-type="phone"]',
            '[data-field-type="date"]',
            ".gis-masked",
            ".gis-masking",
            "#zz_ssn",
            "#zz_ssn_show",
            "#account_number_masked_gen3"
          ],
        /*END MASKING*/
        /* BEGIN extra */
        captureGlobalObjects: [],
        clientAttributesEnabled: true,
        clientAttributeMaxLength: 500,
        resourcesRecordEnabled: true,
        domIncludeCSSSelector: true,
        // resource recording
        resourcesRecordEnabled: true,
        resourceRecordCssOnly: false, //set to false to enable all resouce recording
        resourcesRecordCount: 1, // max 5
        resourcesRecordChance: 0.5, // between 0-1 def:0.5
        resourcesRecordAllowCors: false, //defalut false
        /* Struggle Recording start*/
        collectStruggles: true,
        collectFormStruggles: true,
        /* Struggle Recording end*/
        /* BEGIN page performance */
        resourceTimingRecordEnabled: true,
        resourceTimingRecordEnabledByChance: 0.05,
        webVitalsRecordEnabled: true,
        /* END page performance */

        /* BEGIN exposure */
        recordScrollReach: true,
        /* END exposure */

        /* BEGIN form tracking IM */
        domFormAnalysisReporting: true,
        domFormValidationTracking: true,
        /* END form tracking IM */

        /* BEGIN window property */
        pageAttributesEnabled: true,
        /* END window property */
        /* BEGIN callbacks */
        onReadyCallback: function (clss, clsv) {
          if (ddo?.page?.attributes?.glassbox?.gbProfile === "credit_cards") {
            window.addEventListener("popstate", (event) => {
              if (window.location.href.indexOf("/#/") > -1) {

                function waitingForGB(count, delay, tries, gbdelay) {

                  var count_local;
                  var delay_local;
                  var tries_local;
                  var gb_delay;
                  var elementExistGB = document.querySelector('#spinnerComplete');

                  count_local = count;
                  delay_local = delay;
                  tries_local = tries;
                  gb_delay = gbdelay;

                  if (elementExistGB) {
                    if (digitalData.cart.attributes.status) {
                      _detector.triggerCustomEvent("GB_CCApplicationStatus", digitalData.cart.attributes.status);
                    }
                    if (digitalData.cart.attributes.campaignId) {
                      _detector.triggerCustomEvent("GB_CCCampaignId", digitalData.cart.attributes.campaignId);
                    }
                    if (digitalData.cart.attributes.applicationId) {
                      _detector.triggerCustomEvent("GB_CCAppRefNum", digitalData.cart.attributes.applicationId);
                    }
                    setTimeout(function () {
                      _detector.triggerCustomEvent("customDomUpdate", "SpinnerDOMUpdate", undefined, true);
                    }, gb_delay);
                  } else if (count_local < tries_local) {
                    // GB detector does not exist yet
                    setTimeout(function () {
                      waitingForGB(count_local + 1, delay_local, tries_local)
                    }, delay_local);
                  } else {
                    _detector.triggerCustomEvent("SpinnerLengthyTime", ">30seconds");
                  }
                }

                waitingForGB(0, 300, 100, 750);
              }
            });
          };
        },
        /* END callbacks
        /* END extra */
        /* END Configuration */
      };

      const glassbox = ddo?.page?.attributes?.glassbox;
      const profileOverrides = ddo?.environmentVariables?.glassboxProfiles[glassbox?.gbProfile];
      const pageOverrides = glassbox?.overrides;

      if (window.location.href.indexOf("review-submit.go") > -1) {
        defaultArgs.domBlacklistMaskContentByClass.push("c8")
      }

      window._cls_config = _handleConfigOverrides(defaultArgs, { ...profileOverrides }, pageOverrides);
      return undefined;
    }

    const _handleConfigOverrides = function (baseConfig, profileConfig, overrideConfig) {

      const reducer = (accumulator, currentVal) => {
        if (accumulator[currentVal] !== undefined) {
          accumulator[currentVal] = handleMerge(accumulator, currentVal)
          return accumulator
        }
        accumulator[currentVal] = baseConfig[currentVal]
        return accumulator
      }

      const modifyConfig = (initialConfig, overrideConfig) => {
        baseConfig = Object.keys(initialConfig).reduce(reducer, overrideConfig);

      }

      const handleMerge = (obj, val) => {
        if (typeof obj[val] === typeof baseConfig[val]) {
          switch (typeof obj[val]) {
            case "string":
            case "number":
            case "boolean":
            case "function":
              return obj[val];
            case "object":
              return Array.isArray(obj[val]) ?
                baseConfig[val].concat(obj[val]) :
                Object.assign(baseConfig[val], obj[val]);
            default:
              console.error(`GLASSBOX OVERRIDE ERROR:\nYou have provided a type which cannot be overwritten. Default value for ${val} will be used.`);
              return baseConfig[val];
          }
        } else {
          console.error(`GLASSBOX OVERRIDE ERROR:\nYou are attempting to modify the type value of ${val}. This is not allowed. Default value will be used.`)
          return baseConfig[val];
        }
      }

      if (profileConfig) modifyConfig(baseConfig, profileConfig);
      if (overrideConfig) modifyConfig(baseConfig, overrideConfig);
      return baseConfig;
    }

    const _initGlassbox = function () {

      const isProd = window.bactm_envSelector === "prod";

      const script = document.createElement('script');
      const { tealium_profile, tealium_environment } = window.utag_data;
      const tag = (tealium_profile === "olb" ? 'utag.40.js' : 'utag.119.js'); const tealiumScript = 'https://tags.tiqcdn.com/utag/bofa/' + tealium_profile + '/' + tealium_environment + '/' + tag + "?utv=" + utag_data['ut.version'];

      const regexHelix = /(?:-)(.*)(?=-helix)/;
      const helixLLE = window.location.href.match(regexHelix);
      const isSecure = window.location.hostname.includes('secure') ? 'secure' : 'www';
      const domain = (isProd ? "https://" + isSecure + ".bankofamerica.com" : (helixLLE && !isProd ? 'https://' + isSecure + '-' + helixLLE[1] + '-helix.ecnp.bankofamerica.com' : 'https://' + isSecure + '-sit1a-helix.ecnp.bankofamerica.com'));

      script.setAttribute('id', '_cls_injector');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', tealiumScript);
      document.head.appendChild(script);
    };

    /**
     * Initialization function fired as soon as library loads.
     */
    var _init = function () {
      ba._log('glassbox plugin v' + version + ' initializing.', LOG_LEVEL.INFO);
      // modifies new _cls.config JSON if there are customized properties set by page owners in the DDO.attributes
      _setWinCLSConfig();
      _initGlassbox();
    }
    /**
     * Initialize our plugin on library load.
     */
    _init();

    /**
     * Functions to return publicly.
     */
    return { init: _initGlassbox };
  } catch (e) {
    bactm.reportError(e)
  }

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
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_85' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_85' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("85", "bofa.main");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

