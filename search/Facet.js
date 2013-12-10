var ML = ML || {};

/**
 * Class representing a MarkLogic search-result facet.
 * @constructor
 */ 
ML.Facet = function (key, obj) {
    'use strict';
        // properties
    var name,
    	type,
    	facetValues,

        // methods
        getName,
        getType,
        getFacetValues;
        
    name = key;
    type = obj.type;
    
    // Load facet values
    facetValues = [];
    if (obj['facetValues'] !== undefined) {
		for (var i = 0; i < obj['facetValues'].length; ++i) {
			var facetValue = new ML.FacetValue(obj['facetValues'][i]);
			facetValues.push(facetValue);
		}
    }

    /**
     * Get the facet name.
     * @returns The facet name.
     */ 
    getName = function () {
        return name;
    };
  
    /**
     * Get the facet type.
     * @returns The facet type.
     */ 
    getType = function () {
    	return type;
    };
    
    /**
     * Get the facet values.
     * @returns An array of FacetValue objects.
     */ 
    getFacetValues = function () {
        return facetValues;
    };
  
    // Public API
    return {
        getName: getName,
        getType: getType,
        getFacetValues: getFacetValues
    };

};
