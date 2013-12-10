var ML = ML || {};

/**
 * Class representing a set of MarkLogic search results.
 * @constructor
 */ 
ML.SearchResults = function (data) {
    'use strict';
        // properties
    var results,
        facets,
        facetsGeo,

        // methods
        getData,
        getTotal,
        getStart,
        getPageLength,
        getQText,
        getQuery,
        getMetrics,
        getResults,
        getFacets,
        getFacetsGeo;
    
    results = [];
    for (var i = 0; i < data.results.length; ++i) {
		var result = new ML.SearchResult(data.results[i]);
		results.push(result);
	}

    facets = [];
    facetsGeo = [];
    if (data.facets !== undefined) {
		for (var prop in data['facets']) {
		    var facet = new ML.Facet(prop, data['facets'][prop]);
	        facets.push(facet);
		}
    }
	
    /**
     * Get the raw data of the search results.
     * @returns The search results data as a JSON object.
     */ 
    getData = function () {
        return data;
    };
  
    /**
     * Get the total number of results.
     * @returns Total number of results.
     */ 
    getTotal = function () {
        return data.total;
    };
  
    /**
     * Get the start index.
     * @returns The start index.
     */ 
    getTotal = function () {
        return data.start;
    };
  
    /**
     * Get the page length (number of results in set).
     * @returns The page length.
     */ 
    getStart = function () {
        return data.page-length;
    };
  
    /**
     * Get the query text.
     * @returns The query text.
     */ 
    getQText = function () {
        return data.qtext;
    };
  
    /**
     * Get the query object.
     * @returns The query object as a JSON object.
     */ 
    getQuery = function () {
        return data.query;
    };
  
    /**
     * Get the results metrics.
     * @returns The result metrics as a JSON object.
     */ 
    getMetrics = function () {
        return data.metrics;
    };
  
    /**
     * Return the results.
     * @returns Array of Result objects.
     */ 
    getResults = function () {
        return results;
    };
  
    /**
     * Return the non-geospatial facets.
     * @returns Array of Facet objects.
     */ 
    getFacets = function () {
        return facets;
    };
  
    /**
     * Return the geospatial facets.
     * @returns Array of FacetGeo objects.
     */ 
    getFacetsGeo = function () {
        return facetsGeo;
    };
  
    // Public API
    return {
        getData: getData,
        getTotal: getTotal,
        getStart: getStart,
        getPageLength: getPageLength,
        getQText: getQText,
        getQuery: getQuery,
        getMetrics: getMetrics,
        getResults: getResults,
        getFacets: getFacets,
        getFacetsGeo: getFacetsGeo
    };

};

