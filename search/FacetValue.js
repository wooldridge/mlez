var ML = ML || {};

/**
 * Class representing a MarkLogic search-result facet value.
 * @constructor
 */ 
ML.FacetValue = function (obj) {
    'use strict';
        // properties
    var 

        // methods
        getName,
        getCount,
        getValue;
        
    /**
     * Get the name.
     * @returns The name.
     */ 
    getName = function () {
        return obj.name;
    };
  
    /**
     * Get the count.
     * @returns The count.
     */ 
    getCount = function () {
    	return obj.count;
    };
    
    /**
     * Get the value.
     * @returns The value.
     */ 
    getValue = function () {
        return obj.value;
    };
  
    // Public API
    return {
        getName: getName,
        getCount: getCount,
        getValue: getValue
    };

};
