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
  u.extend=[function(a,b){ try{ if(1){b['adobeAnalyticsEndpoint']='https://smetrics.bankofamerica.com/b/ss/baamprod/5/boaCustom041918a'} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){
var _definePlugin = function (parent, name, context, udo, definition) {
  // Check if is used inside a "modern" browser, if not, return
  if (!context || !context[parent] || !Array.prototype.filter) {
    return;
  }

  context[parent]['plugins'][name] = definition();
}
var _initAdobeSensei = function() {
  _definePlugin('bactm', 'adobesensei', typeof window !== 'undefined' ? window : null, b, function () {
    var parent = 'bactm'
        , ba = window[parent]
        , win = window
        , doc = document || {}
        , version = '2.0.0'
        , ddo = win.digitalData
        , udo = b
        , LOG_LEVEL = {
            OFF: 10
            , FATAL: 5
            , ERROR: 4
            , WARN: 3
            , INFO: 2
            , DEBUG: 1
          }
        , baseUrl = udo.adobeAnalyticsEndpoint
        , bh = win.innerHeight
        , bw = win.innerWidth
        , sw = win.screen.availWidth
        , sh = win.screen.availHeight
        , ce = 'UTF-8'
        , ndh = 1
        , ns = document.location.host
        , r = document.referrer
        , v0 = bactm.QueryString(document.location.href).get('cm_mmc')
        , bactmCookie = new bactm.Cookies()
        , aamlh = ''
        , aamb = ''
        , pageID = ''
        , pageName = '';

    if (!ddo) return;

    /**
     * Returns Adobe Sensei Base URL along with cache buster
     * @returns {String}
     */
    var _getBaseUrl = function () {
      return baseUrl + '/s' + Date.now().toString();
    };

    /**
     * Returns the total number of dots in a domain.
     * @param {String} domain
     * @returns {Number}
     */
    var _getDotsInDomain = function (domain) {
      if (domain.indexOf('ecnp.bankofamerica') > -1) {
        return 2;
      }
      return domain.split('.').length - 1;
    };

    /**
     * Returns time in dd/mm/yy hh:mm:ss D OFFSET
     * D is a number in the range 0-6 specifying day of the week.
     * OFFSET is offset from GMT in hours * 60 * -1
     * @returns {String}
     */
    var _getTime = function () {
      var date = new Date();

      var year = date.getYear();
      year = year.length === 3 ? year.substr(1, year.length) : year;
      var month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;

      var day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;

      var hours = date.getHours().toString();
      hours = hours.length > 1 ? hours : '0' + hours;

      var minutes = date.getMinutes().toString();
      minutes = minutes.length > 1 ? minutes : '0' + minutes;

      var seconds = date.getSeconds().toString();
      seconds = seconds.length > 1 ? seconds : '0' + seconds;

      var D = date.getDay().toString();
      var offset = date.getTimezoneOffset() / 60 * -1;

      return (day + '/' + month + '/' + year + ' ' + hours + ':' +
          minutes + ':' + seconds + ' ' + D + ' ' + offset);
    };

    /**
     * Sets pageName value by attempting to retrieve page id from Sparta and Borneo configs
     */
    var _getPageId = function (key) {
      var pageID = '';
      var pattern = new RegExp(".+:.+:.+;.+");
      try {
        if ( // default placement
          typeof bactm !== 'undefined' 
          && bactm.polyfills.object.exists(ddo, 'page.pageInfo[' + key + '].pageID') 
          && pattern.test(ddo.page.pageInfo[key].pageID)
        ) {
          pageID = ddo.page.pageInfo[key].pageID;
        } else if ( // check udo
          typeof bactm !== 'undefined' 
          && bactm.polyfills.object.exists(udo, 'current_page') 
          && pattern.test(udo.current_page)
        ) {
          pageID = udo.current_page;
        } else if ( // possible Borneo placement
          typeof cm_options !== 'undefined' 
          && typeof bactm !== 'undefined'
          && bactm.polyfills.object.exists(cm_options, 'pageId') 
          && pattern.test(cm_options.pageId)
        ) {
          pageID = cm_options.pageId;
        } else {
          bactm._log('Adobe Analytics - _getPageId() - Page ID not found. Returning an empty string.', LOG_LEVEL.DEBUG);
          bactm.reportError('Adobe Analytics - _getPageId() - Page ID not found. Returning an empty string.');
        }
      } catch (e) {
        bactm._log(e, LOG_LEVEL.DEBUG);
        bactm.reportError(e);
      }
      return pageID;
    };

    /**
     * Converts key-value pairs in an object to an URL encoded query string parameters
     * @param {Object} obj
     * @returns {String}
     */
    var _getQueryStringParamFromObject = function (obj) {
      var qs = '';
      var keys = Object.keys(obj);
      if (keys.length === 0) return qs;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (i === 0) {
          qs += key + '=' + encodeURIComponent(obj[key]);
        } else {
          qs += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
        }
      }

      return qs;
    };

    /**
     * Returns adobe marketing id
     * @returns {String}
     */
    var _getAdobeMID = function () {
      try {
        var c = new bactm.Cookies();
        var bactmLts = c.get('bactm_lts') || null;
        var bactmCookie = JSON.parse(bactmLts);
        if (!bactmCookie) return '';
        aamlh = bactmCookie.adobeMID.dcs_region || '';
        aamb = bactmCookie.adobeMID.d_blob || '';
    
        return bactmCookie.adobeMID.d_mid;
      } catch (e) {
        bactm._log(e, LOG_LEVEL.DEBUG);
        bactm.reportError(e);
      }
    };

    /**
     * Grabs the adobe site promotion value from the dataCollector
     * @returns {string}
     */
    var _getSitePromotionString = function () {
      try {
        var sitePromotions = bactm.polyfills.array.from(document.querySelectorAll('a')).filter(function(anchor) {
          const spContents = anchor?.dataset?.impressionhref?.includes('cm_sp') ? anchor.dataset.impressionhref : false;
          const spHrefContents = anchor?.attributes?.href?.value?.includes('cm_sp') ? anchor.attributes.href.value : false;
          return (spContents || spHrefContents)
        });
        var spArr = [];
        var coidArr = [];
        
        // Gather collected site promotion values into an array
        if (sitePromotions.length >= 1) {
          sitePromotions.map(promotion => promotion.dataset.impressionhref || promotion?.attributes?.href?.value).forEach(function(sp){
              var spHref = bactm.QueryString(sp);
              if(spHref.get('cm_sp')){
                spArr.push(spHref.get('cm_sp'));
              } else {
                bactm._log('Issue with site promotion query string: ' + spHref.get('cm_sp'), LOG_LEVEL.DEBUG);
              }
          });
        }
        else {
          return ['',''];
        }
        // Collect unique COIDs from site promotion array
        for (var i = 0; i < spArr.length; i++) {
          var spSplit = spArr[i].split("-_-");
          if (spSplit.length >= 3 && coidArr.indexOf(spSplit[2].substr(0,8)) === -1) {
            coidArr.push(spSplit[2].substr(0,8));
          }
        }
        return [spArr.join("|"), coidArr.join("|")];  
      } catch (e) {
        bactm._log(e, LOG_LEVEL.DEBUG);
        bactm.reportError(e);
        return ['',''];
      }
    };

    /**
     * Builds the query string variable based on an object key/value assessment
     * @param {object} { "key": value } or { "key": [value, altAssign] }
     * @param {string} key
     * @param {string} value
     * @param {string} altAssign (optional) Replaces value in final mapping
     */
    function _buildQs(mappings) {
      var qs = {},
          keys = Object.keys(mappings);
      for (var i = 0; i < keys.length; i++) {
        if (Array.isArray(mappings[keys[i]])) {
          processMappings(keys[i], mappings[keys[i]][0], mappings[keys[i]][1]);
        } else if (typeof mappings[keys[i]] === 'string' || typeof mappings[keys[i]] === 'number') {
          processMappings(keys[i], mappings[keys[i]]);
        }
      }
      return qs;

      function processMappings(key, value, altAssign) {
        if (value !== 'undefined' && value !== null && value !== '' && value !== {} && value !== '/'){
          if (altAssign && altAssign !== 'undefined' && altAssign !== null && altAssign !== '' && altAssign !== {} && altAssign !== '/') {
            qs[key] = altAssign;
          } else {
            qs[key] = value;
          }
        }
      }
    }

    /**
     * Returns the pageInfoKey.
     */
    var _getPageInfoKey = function (){
      var pv = dataCollector.filter(function(d) {
        return d.event === 'pageview'
      });
      if(pv.length === 1) {
        return pv[0]?.pageInfoKey || 0;
      }
      else {
      return pv[pv.length - 1]?.pageInfoKey;
      }
    };

    /**
     * Fires a pageview Adobe Tag
     * @param {Object} event
     * @returns {void}
     */
    var _pageview = function () {
      try {
        var qs = {};
        var cv = {};
        var pageUrl = encodeURI(document.location.href);
        var cdp = _getDotsInDomain(document.location.origin);
        var g = pageUrl.substr(0, 255);
        var _g = '';
        var guID = bactm.ddo.get('user.olb3rdpartyid', null);
        var gsid = bactm._readCookie('GSID') ? bactm._readCookie('GSID') : '';
        var mmid = ddo.user.mmid ? ddo.user.mmid : '';
        var t = _getTime();
        var pageInfoKey = _getPageInfoKey();
        var pageID = _getPageId(pageInfoKey);
        var pageName = pageID;
        var pageType = bactm.polyfills.object.exists(digitalData, 'page.attributes.pageType') ? digitalData.page.attributes.pageType : '';
        if (pageType === 'errorPage') {
          pageName = '';
        }
        var c_errorCode = bactm.polyfills.object.exists(digitalData, 'page.attributes.errorCode') ? digitalData.page.attributes.errorCode : '';
        
        var sitePromotions = _getSitePromotionString();
        if (pageUrl.length > 255) {
          _g = pageUrl.substr(256, pageUrl.length);
        }
    
        var mid = _getAdobeMID();
        if (!mid) {
          bactm.log('Adobe Experience ID is not set');
          return;
        }

        var uriParams = (function () {
          var bits = bactm.decomposeUri(encodeURI(window.location.href));
          var params = {};
          if (bits.uriParams && bits.uriParams !== {}) {
            for (x in bits.uriParams) {
              params[x] = decodeURIComponent(bits.uriParams[x]);
            }
          }
          return JSON.stringify(params) !== "{}" ? JSON.stringify(params) : "";
        })();
        
        // grab boa.mainpageurl
        const mainpageurl = () => {
          const currentURL = window.location.href
          return (currentURL.includes('?') ? currentURL.slice(0, currentURL.indexOf('?')) : currentURL);
        }
    
        var qsMappings = {
          "bh": bh,
          "bw": bw,
          "cdp": cdp,
          "ce": ce,
          "g": g,
          "mid": mid,
          "ndh": ndh,
          "ns": ns,
          "pageName": pageName,
          "pageType": pageType,
          "r": encodeURI(r),
          "t": t,
          "s": sw + "x" + sh,
          "aamlh": aamlh,
          "aamb": aamb
        };
    
        var cvMappings = {
          "coid": sitePromotions[1], // string with all COIDs separated by pipes
          "guid": guID,
          "gsid": gsid,
          "mmid": mmid,
          "celebrussn": typeof celebrussn !== 'undefined' ? celebrussn : '',
          "trackingCode": v0,
          "urlOver255": _g,
          "hash": window.location.hash,
          "hostname": window.location.hostname,
          "protocol": window.location.protocol,
          "pathname": window.location.pathname,
          "href": window.location.href,
          "mainpageurl": mainpageurl(),
          "uriParams": uriParams,
          "errorCode": c_errorCode,
          "v61": bactm._readCookie('BA_0021') ? bactm._readCookie('BA_0021') : "",
          "v62": bactm._readCookie('state') ? bactm._readCookie('state') : "",
          "v63": bactm._readCookie('CONTEXT') ? bactm._readCookie('CONTEXT') : "",
          "v64": bactm._readCookie('INTL_LANG') ? bactm._readCookie('INTL_LANG') : "",
          "v65": bactm._readCookie('BOFA_LOCALE_COOKIE') ? bactm._readCookie('BOFA_LOCALE_COOKIE') : "",
          "v66": bactm._readCookie('LANG_COOKIE') ? bactm._readCookie('LANG_COOKIE') : "",
          "v81": digitalData.page.pageInfo[pageInfoKey].pageID ? digitalData.page.pageInfo[pageInfoKey].pageID : "",
          "v82": digitalData.page.pageInfo[pageInfoKey].destinationURL ? digitalData.page.pageInfo[pageInfoKey].pdestinationURL : "",
          "v83": digitalData.page.pageInfo[pageInfoKey].referringURL ? digitalData.page.pageInfo[pageInfoKey].referringURL : "",
          "v84": digitalData.page.pageInfo[pageInfoKey].issueDate ? digitalData.page.pageInfo[pageInfoKey].issueDate : "",
          "v85": digitalData.page.pageInfo[pageInfoKey].language ? digitalData.page.pageInfo[pageInfoKey].language : "",
          "v86": digitalData.page.pageInfo[pageInfoKey].segmentValue ? digitalData.page.pageInfo[pageInfoKey].segmentValue : "",
          "v87": digitalData.page.pageInfo[pageInfoKey].appName ? digitalData.page.pageInfo[pageInfoKey].appName: "",
          "v88": digitalData.page.pageInfo[pageInfoKey].appStepNumber ? digitalData.page.pageInfo[pageInfoKey].appStepNumber : "",
          "v89": digitalData.page.pageInfo[pageInfoKey].appStepName ? digitalData.page.pageInfo[pageInfoKey].appStepName : "",
          "v90": digitalData.page.category?.primaryCategory ? digitalData.page.category?.primaryCategory : "",
          "v91": digitalData.page.category?.addlCategory ? digitalData.page.category?.addlCategory : "",
          "v92": digitalData.page.category?.pageType ? digitalData.page.category?.pageType : "",
          "v93": digitalData.applicationID ? digitalData.applicationID : "",
          "v111": bactm.polyfills.object.exists(digitalData, "product[0].productInfo.productID") ? digitalData.product[0].productInfo.productID : "",
          "v112": bactm.polyfills.object.exists(digitalData, "product[0].productInfo.productName") ? digitalData.product[0].productInfo.productName : "",
          "v113": bactm.polyfills.object.exists(digitalData, "product.category.primaryCategory") ? digitalData.product.category.primaryCategory : "",
          "v72": bactm.polyfills.object.exists(digitalData, "user.state") ? digitalData.user.state : "",
          "v73": digitalData.user.preferred_rewards_tier ? digitalData.user.preferred_rewards_tier : "",
          "v74": typeof digitalData.user.authenticated !== 'undefined' ? digitalData.user.authenticated.toString() : "",
          "v100": bactm.polyfills.object.exists(digitalData, "page.attributes.chat.section") ? digitalData.page.attributes.chat.section : "",
          "v101": bactm.polyfills.object.exists(digitalData, "page.attributes.chat.site_id") ? digitalData.page.attributes.chat.site_id : "",
          "v102": bactm.polyfills.object.exists(digitalData, "page.attributes.chat.pagetype") ? digitalData.page.attributes.chat.pagetype : "",
          "v103": bactm.polyfills.object.exists(digitalData, "page.attributes.chat.target[0].lpButtonDiv") ? digitalData.page.attributes.chat.target[0].lpButtonDiv : "",
          "v104": bactm.polyfills.object.exists(digitalData, "page.attributes.chat.conversionstage") ? digitalData.page.attributes.chat.conversionstage : "",
          "v105": bactm.polyfills.object.exists(digitalData, "page.attributes.chat.sub_section") ? digitalData.page.attributes.chat.sub_section : "",
          "v106": bactm.polyfills.object.exists(digitalData, "page.attributes.chat.customer_lob") ? digitalData.page.attributes.chat.customer_lob : "",
          "v60": digitalData.page.attributes.searchResults ? digitalData.page.attributes.searchResults : "",
          "v121": digitalData.page.attributes.subCampaignCode ? digitalData.page.attributes.subCampaignCode : "",
          "v122": bactm.polyfills.object.exists(digitalData, "cart.attributes.applicationID") ? digitalData.cart.attributes.applicationID : "",
          "v123": bactm.polyfills.object.exists(digitalData, "cart.attributes.sourceCode") ? digitalData.cart.attributes.sourceCode : "",
          "v124": bactm.polyfills.object.exists(digitalData, "cart.attributes.campaignId") ? digitalData.cart.attributes.campaignId : "",
          "profile": "main",
          "deviceType": "browser"
        };
    
        try {
          qs = _buildQs(qsMappings);
          cv = _buildQs(cvMappings);
        } catch (e) {
          bactm._log(e, LOG_LEVEL.DEBUG);
          bactm.reportError(e);
        }
    
        var queryString = _getQueryStringParamFromObject(qs);
        var contextVariable = _getQueryStringParamFromObject(cv);
        var pixelTagSrc = '';
        if (sitePromotions) pixelTagSrc = _getBaseUrl() + '?AQB=1&' + queryString + '&c.&boa.&spimpression=' + sitePromotions[0] + '&' + contextVariable + '&.boa&.c&AQE=1';
        else pixelTagSrc = _getBaseUrl() + '?AQB=1&' + queryString + '&c.&boa.&' + contextVariable + '&.boa&.c&AQE=1';
        var tag = new bactm.PixelTag(pixelTagSrc);
        tag.appendToBody();

        // on completion of the initial scan and capture, allow the rescan functionality with bactm.impressions.
        const inDataCollector = window.dataCollector.filter(item => item.event === "sitepromotion").map(sitepromotion => sitepromotion.options.value);
        const sitePromotionsSet = new Set(sitePromotions[0].split('|').concat(window.dataCollector.filter(item => item.event === "sitepromotion").map(sitepromotion => sitepromotion.value)));
        const filteredSitePromotions = Array.from(sitePromotionsSet).filter(sp => !!sp);
        filteredSitePromotions.forEach(cmspValue => {
          if (inDataCollector.includes(cmspValue)) return;
          let impressionObject = {
            event: 'sitepromotion',
            options: {
              href: '',
              value: cmspValue
            }
          };
          
          window.dataCollector.push(impressionObject);
        })
        window.initialAdobePageviewCollected = true;
      } catch (e) {
        bactm._log(e, LOG_LEVEL.DEBUG);
        bactm.reportError(e);
      }
    };

    /**
     * Searches the element for a unique identifier
     * Precedence is data-bactmln, id, name, and lastly outerHTML
     * @param {HTML Element} element
     * @returns {String} the unique identifier
     */
    var sanitizeTarget = function(element) {
      if (element) {
        // helper stuff
        const impHref = element.getAttribute("data-impressionhref");
        const resolveCOID = function(hrefString){
          return hrefString.includes('cm_sp') ? hrefString.split('?')[1].split('-_-')[2].substr(0,8) : false;
        };
        // decision tree
        if(typeof impHref === "string" && resolveCOID(impHref)) {
          return resolveCOID(impHref);
        } else if (typeof element.href === "string" && resolveCOID(element.href)){
          return resolveCOID(element.href);
        } else if(element.getAttribute('data-bactmln')) {
          return element.getAttribute('data-bactmln');
        } else if (element.id) {
          return element.id;
        } else if (element.name) {
          return element.name;
        } else {
          return element.outerHTML;
        }
      }
    };

    /**
     * Tracks clicks
     * @param {MouseEvent} e
     */
    var trackClick = function (e) {
      try {
        var qs = {};
        var cv = {};
        var pageUrl = document.location.href;
        var mid = _getAdobeMID();
        if (!mid) {
          bactm._log('Adobe Experience ID is not set', LOG_LEVEL.INFO);
          return;
        }
    
        var cdp = _getDotsInDomain(document.location.origin);
        var g = pageUrl.substr(0, 255);
        var _g = '';
    
        if (pageUrl.length > 255) {
          _g = pageUrl.substr(256, pageUrl.length);
        }


        var pev1Check = function(){
          var expr = typeof e.currentTarget.dataset.impressionhref;
          switch (expr) {
            case 'string':
              if(e.currentTarget.dataset.impressionhref !== "" && e.currentTarget.dataset.impressionhref !== null) {
                return e.currentTarget.dataset.impressionhref;
              } else {
                if (typeof e.currentTarget.href !== "undefined") {
                  return e.currentTarget.href;
                } else {
                  return "javascript:void(0)";
                }
              } 
              break;
            case 'undefined':
              if (typeof e.currentTarget.href !== "undefined") {
                return e.currentTarget.href;
              } else {
                return "javascript:void(0)";
              }
              break;
          }
        }
    
        var pe = 'lnk_o';
        var pev1 = pev1Check();
        var pev2 = sanitizeTarget(e.currentTarget);
        var t = _getTime();
        var pageInfoKey = _getPageInfoKey();
        var pageID = _getPageId(pageInfoKey);
        var pageName = pageID;
    
        // Remapping c_clicked value from DIL to AA
        var c_clicked = '';
        try {
          if (window.utag_data['customEventSettings'] && Array.isArray(window.utag_data['customEventSettings'])){
            var CES = window.utag_data['customEventSettings'];
            for (var i = 0; i < CES.length; i++) {
              if (
                  typeof CES[i].el !== "undefined"
                  && (CES[i].el === pev2 || CES[i].el.slice(1) === pev2)
                  && typeof bactm !== "undefined"
                  && bactm.polyfills.object.exists(CES[i], 'aam.clicked')
              ) {
                c_clicked = CES[i].aam.clicked;
              }
            }
          }
        } catch (e) {
          bactm._log(e, LOG_LEVEL.DEBUG);
          bactm.reportError(e);
        }

        // Check pev1 & pev2 target URLs for "cm_" before assigning to context variables
        var pevCheck = function(pev1, pev2) {
          try {
            if (typeof pev1 !== 'undefined' && typeof pev2 !== 'undefined') {
              if (typeof pev1 === 'string' && pev1.toLowerCase().includes('cm_')) {
                cvMappings.Ad_URL = pev1;
                cvMappings.Ad_clicked = pev2;
              } else {
                cvMappings.webbutton_URL = pev1;
                cvMappings.webbutton_clicked = pev2;
              }
            } else {
              bactm._log("Adobe Analytics pevCheck() failed. Check pev1 & pev2 values.", LOG_LEVEL.DEBUG);
              bactm.reportError("Adobe Analytics pevCheck() failed. Check pev1 & pev2 values.");
            }
          } catch (e) {
            bactm._log(e, LOG_LEVEL.DEBUG);
            bactm.reportError(e);
          }
        }
    
    
        var qsMappings = {
          "cdp": cdp,
          "ce": ce,
          "g": g,
          "mid": mid,
          "ndh": ndh,
          "ns": ns,
          "pe": pe,
          "pev1": pev1,
          "pev2": pev2,
          "pageName": pageName,
          "t": t
        };
    
        var cvMappings = {
          "href": g,
          "pageName": pageName,
          "trackingCode": v0,
          "urlOver255": _g,
          "clicked": c_clicked,
          "v59": e.currentTarget.name ? e.currentTarget.name: ""
        };

        pevCheck(pev1, pev2);
    
        try {
          qs = _buildQs(qsMappings);
          cv = _buildQs(cvMappings);
        } catch (e) {
          bactm._log(e, LOG_LEVEL.DEBUG);
          bactm.reportError(e);
        }
    
        var queryString = _getQueryStringParamFromObject(qs);
        var contextVariable = _getQueryStringParamFromObject(cv);
        var pixelTagSrc = _getBaseUrl() + '?AQB=1&' + queryString + '&c.&boa.&' + contextVariable + '&.boa&.c&AQE=1';
        var tag = new bactm.PixelTag(pixelTagSrc);
        tag.appendToBody();
      } catch (e) {
        bactm._log(e, LOG_LEVEL.DEBUG);
        bactm.reportError(e);
      }
    };

    var _impressionAdobeTag = function(pageIDarg, impHref) {
      try {
          if (!(_getAdobeMID())) {
              bactm.log('Adobe Experience ID is not set');
              return;
          }

          var qs = {};
          var cv = {};
          var pageUrl = encodeURI(document.location.href);
          var cdp = _getDotsInDomain(document.location.origin);
          var guID = bactm.ddo.get('user.olb3rdpartyid', null);
          var g = pageUrl.substr(0, 255);
          var _g = '';
          var pageID = pageIDarg;
          var pageName = pageID;
          var t = _getTime();
          if (pageUrl.length > 255) {
              _g = pageUrl.substr(256, pageUrl.length);
          }
          var pe = 'lnk_o';

          // sitePromotion returns an array with 2 indeces, first is the full cm_sp qs, second is just the 8-digit COID.
          var sitePromotion = ((href) => {
            try{
              if (href.includes('cm_sp') && (href.split('-_-').length >= 3)){
                return [href.split('?')[1].split('cm_sp=')[1], href.split('?')[1].split('-_-')[2].substr(0, 8)] 
              }else {
                return ["", ""];
              }
            } catch(e){
              return ["",""]
            }
          })(impHref);

          var qsMappings = {
            "cdp": cdp,
            "ce": ce,
            "g": g,
            "mid": _getAdobeMID(),
            "ndh": ndh,
            "ns": ns,
            "pe": pe,
            "pev1": 'javascript:void(0);',
            "pev2": "ImpressionEvent",
            "pageName": pageName,
            "t": t
          };
      
          var cvMappings = {
            "coid": sitePromotion[1],
            "guid": guID,
            "href": g,
            "pageName": pageName,
            "trackingCode": v0,
            "urlOver255": _g,
            "clicked": "",
            "v59": ""
          };

          try {
              qs = _buildQs(qsMappings);
              cv = _buildQs(cvMappings);
          } catch (e) {
              bactm._log(e, LOG_LEVEL.DEBUG);
          }
          var queryString = _getQueryStringParamFromObject(qs);
          var contextVariable = _getQueryStringParamFromObject(cv);
          var pixelTagSrc = _getBaseUrl() + '?AQB=1&' + queryString + '&c.&boa.&spimpression=' + sitePromotion[0] + '&' + contextVariable + '&.boa&.c&AQE=1';
          var tag = new bactm.PixelTag(pixelTagSrc);
          tag.appendToBody();
      } catch (e) {
          bactm._log(e, LOG_LEVEL.DEBUG);
      }
    };

    var assignListeners = function () {
      var anchors = bactm.polyfills.array.from(document.getElementsByTagName('a'));
      var buttons = bactm.polyfills.array.from(document.getElementsByTagName('button'));
      anchors.forEach(function(anchor) {
        var anchorAtt = anchor.getAttribute("data-aaClickEvent");
        if (anchorAtt == null || anchorAtt !== true) {
          anchor.addEventListener('click', trackClick);
          anchor.setAttribute("data-aaClickEvent", true);
        }
      });
      buttons.forEach(function(button) {
        var buttonAtt = button.getAttribute("data-aaClickEvent");
        if (buttonAtt == null || buttonAtt !== true) {
          button.addEventListener('click', trackClick);
          button.setAttribute("data-aaClickEvent", true);
        }
      });
    };

    var _init = function () {
      bactm._log('adobesensei plugin v' + version + ' initializing.', LOG_LEVEL.INFO);
      assignListeners();
      bactm.on('adobeListeners', function () {
        assignListeners();
      });
      bactm.on('afterPageviewAdobe', function () {
        setTimeout(_pageview, 2000);
      });
    };
    _init();

    /**
     * Functions to return publicly
     */
    return { 
      manualImpression: _impressionAdobeTag,
      manualAdobeLinkClick: trackClick,
      adobeAssignListeners: assignListeners
    };
  });
};

bactm.on('plugins:OneTrust:C0002:AdobeSensei', _initAdobeSensei);
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
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_55' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_55' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("55", "bofa.main");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

