"use strict";
exports.__esModule = true;
exports.Internal = void 0;
var Internal;
(function (Internal) {
    Internal.normalizeSearchData = function (data, objPropToUseForDisplayingData) {
        var dataCollection = data;
        var isDataElementAnObject = !Array.isArray(dataCollection[0]) && typeof dataCollection[0] === 'object';
        if (isDataElementAnObject) {
            dataCollection = data.map(function (dataItem) { return dataItem[objPropToUseForDisplayingData]; });
        }
        return dataCollection;
    };
})(Internal = exports.Internal || (exports.Internal = {}));
