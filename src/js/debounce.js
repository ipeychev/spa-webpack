'use strict';

if (typeof SPA == 'undefined') {
	var SPA = {};
}

function debounce(callback, timeout, context, args) {
    var callFn,
        debounceHandle;

    callFn = function() {
        var callArgs,
            callContext,
            len,
            result = [],
            startIndex = 0;

        callContext = context || this;

        for (len = arguments.length; startIndex < len; ++startIndex) {
            result.push(arguments[startIndex]);
        }

        callArgs = result.concat(args || []);

        clearTimeout(debounceHandle);

        debounceHandle = setTimeout(function() {
            callback.apply(callContext, callArgs);
        }, timeout);
    };

    callFn.cancel = function() {
        clearTimeout(debounceHandle);
    };

    return callFn;
}

export default debounce;