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
/** @license Copyright 2016 Bank of America, N.A. All rights reserved. */

/**
 * @fileoverview Plugin for automatically capturing conversion events for applications.
 * 
 * @requires window.bactm
 * @requires window.digitalData
 * @requires window.utag_data.App_Conversion_Settings
 * 
 * This library is an extension of the core Bank of America digital analytics library
 * accessible via window.bactm. If the core library is not found, this library will
 * return null with no code executing.
 * 
 * Library requires the Tealium lookup table to be found at utag_data.App_Conversion_Settings.
 * Conversion settings in the lookup table should be a JSON array of objects, defining the
 * rule for when to fire conversion events for the current application.
 * 
 * Example of all acceptable parameters for a conversion event object:
 * 
 *   {
 *       "eventId": "uniqueId",
 *       "eventName": "A Conversion Event Name",
 *       "initiateOnStepNumber": [ 100 ],
 *       "initiateOnEventComplete": "uniqeIdOfOtherEvent",
 *       "completeOnStepNumber": [ 500, 350 ],
 *       "completeIfAuthenticated": true,
 *       "completeIfSaveAndReturn": true,
 *       "completeOnElementBlur": "element_id",
 *       "completeOnEventInitiate": "uniqeIdOfOtherEvent",
 *       "completeOnEventComplete": "uniqeIdOfOtherEvent",
 *       "completeAppOnEventComplete": true,
 *       "cartViewOnInitiate": true
 *   }
 * 
 * Tip: Use http://jsonformatter.org/ to ensure properly formatted JSON and save JSON
 * files in SVN under DCOM_tagmanagement/support_data/app_conv_event/[APP_NAME].json
 * 
 * Example #1:
 * (utag_data.App_Conversion_Settings lookup table value) 
 * Fire an initiate of 'App View to Start' on step number 100. If user is authenticated,
 * also fire a complete of 'App View to Start' and an initiate of 'App Start to Submit'.
 * If user is not authenticated in, complete of 'App View to Start' is fired when a user
 * clicks on the 'first_name' element.
 * 
 * A complete of 'App Start to Submit' is fired on steps 450 or 550, or when a complete
 * is fired of the event we assign an id of 'decline'
 * 
 *   [
 *       {
 *           "eventId": "view",
 *           "eventName": "App View to Start",
 *           "initiateOnStepNumber": 100,
 *           "completeIfAuthenticated": true,
 *           "completeOnElementBlur": "first_name"
 *       },
 *       {
 *           "eventId": "submit",
 *           "eventName": "App Start to Submit",
 *           "initiateOnEventComplete": "view",
 *           "cartViewOnInitiate": true,
 *           "completeOnStepNumber": [450, 550]
 *           "completeOnEventComplete": "decline",
 *           "completeAppOnEventComplete": true
 *       },
 *       {
 *           "eventId": "decline",
 *           "eventName": "App Decline",
 *           "completeOnStepNumber": 350
 *       }
 *   ]
 * 
 * Rules are fired using the bactm trigger of: 'afterPageview'
 *
 * @author jeremy.hodges@bankofamerica.com (Jeremy Hodges)
 */

(function(parent, name, context, definition) {
    // Check if is used inside a "modern" browser, if not, return
    if (!context || !context[parent] || !Array.prototype.filter) {
        return;
    }

    context[parent]['plugins'][name] = definition();
})('bactm', 'conversionEvents', typeof window !== 'undefined' ? window : null, function() {

    var parent                          = 'bactm'
      , ba                              = window[parent]
      , win                             = window
      , doc                             = document || {}
      , version                         = '1.3.0'
      , applicationConversionEvents     = []
      , conversionTracker               = {}
      , conversionTrackerStorageKey     = 'conversionEvents'
      , conversionOnBlurStorage         = {}
      , LOG_LEVEL = {
            OFF     : 10
          , FATAL   : 5
          , ERROR   : 4
          , WARN    : 3
          , INFO    : 2
          , DEBUG   : 1
        };

    // ===========================================================================
    // Core conversion event functions.
    // ===========================================================================

    /**
     * Get the application conversion events out of the lookup table and convert
     * the JSON into a JavaScript array.
     * @requires {JSON} utag_data.App_Conversion_Settings
     * @private
     * @returns {void}
     */
    var _getApplicationConversionEvents = function() {
        if(!utag_data.App_Conversion_Settings) return;

        var conversionEvents = '';

        try {
            conversionEvents = JSON.parse(utag_data.App_Conversion_Settings);
        } catch(e) {
            ba._log('Conversion events settings lookup table value must be a JSON array of objects outlining conversions to fire for the current application.', LOG_LEVEL.INFO);
            ba._log(e, LOG_LEVEL.DEBUG);
            return;
        }

        if(!Array.isArray(conversionEvents)) {
            if(typeof conversionEvents !== 'object') {
                ba._log('Conversion events settings lookup table value must be an array of objects outlining conversions to fire for the current application.', LOG_LEVEL.INFO);
                return;
            }
            conversionEvents = [ conversionEvents ];
        }

        applicationConversionEvents = conversionEvents;
    }

    /**
     * Takes in a pageInfoArrayIndex that a pageview has been called on and processes
     * any associated conversion event rules as necessary based on the rules found
     * in the JSON array from the lookup table.
     * @requires {array} digitalData.page.pageInfo[n]
     * @private
     * @param {number} pageInfoArrayIndex - Index of the pageInfo array from
     *                 digitalData.page.pageInfo[n] the pageview has been fired on.
     * @param {object} options - Object containing options for the pageview.
     * @returns {void}
     */
    var _processApplicationConversionEvents = function(pageInfoArrayIndex, options, pageInfo) {
        ba._log('Processing application conversion events.', LOG_LEVEL.INFO);

        if(!Array.isArray(applicationConversionEvents)) return;
        if(!ba._isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;

        ba._log('Conversions for pageInfoArrayIndex: ' + pageInfoArrayIndex,
                applicationConversionEvents, LOG_LEVEL.DEBUG);

        pageInfo = pageInfo || ba._getPageInfo(pageInfoArrayIndex, options);
        ba._log('pageInfo details for conversion events:', pageInfo, LOG_LEVEL.DEBUG);
        
        // Need to loop over all the rules associated with this app and detemine if
        // there is anything we need to do.
        for(var i = 0, len = applicationConversionEvents.length; i < len; i++) {
            var conversionEvent = applicationConversionEvents[i];
            if(typeof conversionEvent !== 'object') continue;

            // If this conversion event has the rule initiateOnStepNumber evaluate
            // if one of the numbers in the array matches our current appStepNumber.
            if(conversionEvent.initiateOnStepNumber) {
                var appStepNumber = _asArray(conversionEvent.initiateOnStepNumber);

                if(appStepNumber.indexOf(+pageInfo.appStepNumber) > -1) {
                    _newConversionEvent('initiate', conversionEvent, pageInfo);

                    // If completeIfAuthenticated is set to true and the user is authenticated or
                    // if completeIfSaveAndReturn is set to true and page options indidicate isSaveAndReturn
                    // then we complete the event and determine if we need to cleanup an event
                    // listener if this event has a completeOnElementBlur rule.
                    if(
                        (_toLowerCaseString(conversionEvent.completeIfAuthenticated) === 'true' && pageInfo.authenticated) ||
                        (_toLowerCaseString(conversionEvent.completeIfSaveAndReturn) === 'true' && options.isSaveAndReturn)
                    ) {
                        _newConversionEvent('complete', conversionEvent, pageInfo);

                        if(!conversionEvent.completeOnElementBlur) continue;
                        _removeConversionOnBlurListener(conversionEvent.completeOnElementBlur);
                    }
                }
            }

            // If this conversion event has the rule completeOnStepNumber evaluate
            // if one of the numbers in the array matches our current appStepNumber.
            if(conversionEvent.completeOnStepNumber) {
                var appStepNumber = _asArray(conversionEvent.completeOnStepNumber);
                
                if(appStepNumber.indexOf(+pageInfo.appStepNumber) > -1) {
                    _newConversionEvent('complete', conversionEvent, pageInfo);
                    continue;
                }
            }

            // If the conversion event rule completeOnElementBlur is set and we get here
            // because a complete event hasn't already happened, setup an event listener
            // that will fire a complete when this element in the rule is clicked.
            if(conversionEvent.completeOnElementBlur) {
                _addConversionOnBlurListener('complete', conversionEvent, pageInfo);
            }
        }
    }

    /**
     * Check to ensue this conversion event hasn't already been fired, and if not create 
     * a new conversion event. Check the rules for the current app to determine if there
     * are any dependencies to fire based on this conversion event.
     * @private
     * @param {string} actionType - initiate|complete - The type of conversion event to fire.
     * @param {object} event - Conversion event as pulled from the lookup table.
     * @param {object} pageInfo - pageInfo object containing appName and originalAppName.
     * @returns {void}
     */
    var _newConversionEvent = function(actionType, event, pageInfo) {
        var eventName = pageInfo.appName + ' ' + event.eventName;
        if(!_isDuplicateConversion(pageInfo.originalAppName, eventName, actionType)) {
            ba._log('New conversion event.', arguments);
            
            ba.conversion({
                eventName   : eventName
              , actionType  : actionType
              , category    : pageInfo.category
            });
            _addConversionToTracker(pageInfo.originalAppName, eventName, actionType);

            var shouldFireCartView = _evaluateRule('cartView', actionType, event)
              , isAppComplete      = _evaluateRule('appComplete', actionType, event);

            if(shouldFireCartView) ba.cartView();
            if(isAppComplete) {
                ba.productsPurchased();
                _clearTracking(pageInfo.originalAppName);
            }
        }

        _processConversionEventDependencies(actionType, event, pageInfo);
    };

    /**
     * Determine if the requested rule has been set to true in the requested event.
     * @private
     * @param {string} rule - Unique name of the rule to evaluate.
     * @param {string} actionType - initiate|complete - The type of conversion event to fire.
     * @param {object} event - Conversion event as pulled from the lookup table.
     * @returns {bool} 
     */
    var _evaluateRule = function(rule, actionType, event) {
        var rules = {
            'cartview' : function() {
                return (actionType === 'initiate' &&
                        event.cartViewOnInitiate &&
                        _toLowerCaseString(event.cartViewOnInitiate) === 'true');
            },
            'appcomplete' : function() {
                return (actionType === 'complete' &&
                        event.completeAppOnEventComplete &&
                        _toLowerCaseString(event.completeAppOnEventComplete) === 'true');
            }
        }

        if(rules[_toLowerCaseString(rule)]) {
            return rules[_toLowerCaseString(rule)]();
        }
    }

    /**
     * Process if there are any dependant events to fire off based on this event and
     * actionType.
     * @private
     * @param {string} actionType - initiate|complete - The type of conversion event to fire.
     * @param {object} event - Conversion event as pulled from the lookup table.
     * @param {object} pageInfo - pageInfo object containing appName and originalAppName.
     * @returns {void}
     */
    var _processConversionEventDependencies = function(actionType, event, pageInfo) {
        ba._log('Proessing conversion event dependencies.', LOG_LEVEL.DEBUG);
        if(!Array.isArray(applicationConversionEvents)) return;

        var dependencyRules = {
            'initiate' : [
                { 'ruleName' : 'completeOnEventInitiate', 'actionType' : 'complete'}
            ],
            'complete' : [
                { 'ruleName' : 'initiateOnEventComplete', 'actionType' : 'initiate' }
              , { 'ruleName' : 'completeOnEventComplete', 'actionType' : 'complete' }
            ]
        }

        var rules = dependencyRules[actionType];
        if(!rules) return;

        for(var i = 0, len = rules.length; i < len; i++) {
            var rule = rules[i];

            var dependencies = applicationConversionEvents.filter(function(item) {
                return item.hasOwnProperty(rule.ruleName) && item[rule.ruleName] === event.eventId;
            });

            for(var k = 0, dependLen = dependencies.length; k < dependLen; k++) {
                _newConversionEvent(rule.actionType, dependencies[k], pageInfo);
            }
        }
    }

    /**
     * If this conversion event hasn't already been fired and is in the tracker,
     * add the info to our storage object for later lookup and add an event listener
     * to the DOM object to fire the conversion when such element is clicked.
     * @private
     * @param {string} actionType - initiate|complete - The type of conversion event to fire.
     * @param {object} event - Conversion event as pulled from the lookup table.
     * @param {object} pageInfo - pageInfo object containing appName and originalAppName.
     * @returns {void}
     */
    var _addConversionOnBlurListener = function(actionType, event, pageInfo) {
        var eventName = pageInfo.appName + ' ' + event.eventName;
        if(!_isDuplicateConversion(eventName, actionType)) {
            var element = doc.getElementById(event.completeOnElementBlur);
            if(element) {
                conversionOnBlurStorage[event.completeOnElementBlur] = {
                      actionType    : actionType
                    , event         : event
                    , pageInfo      : pageInfo
                };

                element.addEventListener('blur', _conversionEventOnBlur);
            }
        }
    }

    /**
     * 
     */
    var _removeConversionOnBlurListener = function(elementId) {
        var element = doc.getElementById(elementId);
        if(element) element.removeEventListener('blur', _conversionEventOnBlur);
    }

    /**
     * Get a unique tracking key based on the event name and actin type.
     * @private
     * @param {string} eventName - Name of the conversion event.
     * @param {string} actionType - Action type of the conversion event.
     * @returns {string}
     */
    var _uniqueEventTrackerKey = function(eventName, actionType) {
        return (eventName + '.' + actionType).trim();
    }

    /**
     * Checks against the localStorage to see if we have already fired this conversion
     * event or not.
     * @private
     * @param {string} key - Unique key of the app.
     * @param {string} eventName - Name of the conversion event to check.
     * @param {string} actionType - Action type of the converstion event.
     * @returns {bool}
     */
    var _isDuplicateConversion = function(key, eventName, actionType) {
        var tracker = conversionTracker.get(key || 'None') || [];
        return tracker.indexOf(_uniqueEventTrackerKey(eventName, actionType)) > -1 ? true : false;
    }

    /**
     * Adds the conversion event to the local tracker so we can determien if this event
     * has already been fired in the future.
     * @private
     * @param {string} key - Unique key of the app.
     * @param {string} eventName - Name of the conversion event to check.
     * @param {string} actionType - Action type of the converstion event.
     * @returns {void}
     */
    var _addConversionToTracker = function(key, eventName, actionType) {
        var key = key || 'None'
          , tracker = conversionTracker.get(key) || [];
        tracker.push(_uniqueEventTrackerKey(eventName, actionType));

        conversionTracker.set(key, tracker);
        _saveConversionTracker();
    }

    /**
     * Clear the conversion event tracking for the specified application.
     * @private
     * @param {string} key - Unique key of the app.
     * @returns {void}
     */
    var _clearTracking = function(key) {
        conversionTracker.remove(key || 'None');
        _saveConversionTracker();
    }

    /**
     * Take the conversionTracker object, stringify and push into local sessionStorage.
     * @private
     * @returns {void}
     */
    var _saveConversionTracker = function() {
        try {
            conversionTracker.save();
        } catch(e) {
            ba._log('Unable to save conversionTracker to sessionStorage.', LOG_LEVEL.ERROR);
        }
    }

    /**
     * Event listener function to be a part of application conversion tracking. When blurred,
     * function will use the ID of the element to try and locate the conversion details within
     * the conversionOnBlurStorage object. If found, a new conversion is created with the
     * details.
     * @private
     * @returns {void}
     */
    var _conversionEventOnBlur = function() {
        this.removeEventListener('blur', _conversionEventOnBlur);
        var conversionEvent = conversionOnBlurStorage[this.id];
        if(conversionEvent) {
            _newConversionEvent(
                conversionEvent.actionType
              , conversionEvent.event
              , conversionEvent.pageInfo
            );
        }
    }
    // ===========================================================================
    // End core conversion event functions.
    // ===========================================================================

    // ===========================================================================
    // Helper functions.
    // ===========================================================================

    /**
     * Takes any value, if it's already an array returns itself. Otherwise, returns an array with
     * the value being the item within the array.
     * @private
     * @param {any} value
     * @returns {array}
     */
    var _asArray = function(value) {
        if(Array.isArray(value)) return value;
        return [ value ];
    }

    /**
     * Converts a given value to a lowercase string for comparison.
     * @private
     * @param {string|number|bool} value - Value you wish to convert to a lowercase string.
     * @returns {string}
     */
    var _toLowerCaseString = function(value) {
        return (value + '').toLowerCase();
    }

    // ===========================================================================
    // End Helper functions.
    // ===========================================================================

    /**
     * Event listener fired on afterPageview.
     * @private
     * @returns {void}
     */
    var _afterPageviewListener = function(info) {
        if(!info || typeof info.pageInfoArrayIndex === 'undefined') return;

        _processApplicationConversionEvents(info.pageInfoArrayIndex, info.options, info.pageInfo);
    }

    /**
     * Initialization function fired as soon as library loads. Loads application conversion events
     * from the lookup table, processes any pageviews already in the dataCollector and setups
     * a listener on the afterPageview event.
     * 
     * If we do not have a conversion events lookup table for this page, then we leave and do nothing.
     * This plugin will not work without a conversion events lookup table. 
     * @private
     * @returns {void}
     */
    var _init = function() {
        if(typeof utag_data === 'undefined' || !utag_data.App_Conversion_Settings) return; 

        _getApplicationConversionEvents();
        conversionTracker = new ba.Store(conversionTrackerStorageKey);
        ba.on('afterPageview', _afterPageviewListener);
    }

    /**
     * Initialize our plugin on page load.
     */
    _init();

    /**
     * Functions to return publicly.
     */
    return { 'clear' : _clearTracking };
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
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_36' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_36' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("36", "bofa.main");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

