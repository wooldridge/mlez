var ML = ML || {};

/**
 * Class representing a MarkLogic search result.
 * @constructor
 */ 
ML.SearchResult = function (data) {
    'use strict';
        // properties
    var matches,

        // methods
        getData,
        getIndex,
        getURI,
        getPath,
        getScore,
        getConfidence,
        getFitness,
        getHref,
        getMimetype,
        getFormat,
        getMatches,
        getMatchesAsHTML,
        getMetadata,
        getMetadataByKey;

    matches = [];
    for (var i = 0; i < data.matches.length; ++i) {
		var match = new ML.Match(data.matches[i]);
		matches.push(match);
	}

    /**
     * Get the raw data of the search result.
     * @returns The search result data as a JSON object.
     */ 
    getData = function () {
        return data;
    };
  
    /**
     * Get the index.
     * @returns The index.
     */ 
    getIndex = function () {
        return data.index;
    };

    /**
     * Get the URI.
     * @returns The URI.
     */ 
    getURI = function () {
        return data.uri;
    };
    
    /**
     * Get the path.
     * @returns The path.
     */ 
    getPath = function () {
        return data.path;
    };
  
    /**
     * Get the score.
     * @returns The score.
     */ 
    getScore = function () {
        return data.score;
    };
  
    /**
     * Get the confidence.
     * @returns The confidence.
     */ 
    getConfidence = function () {
        return data.confidence;
    };
  
    /**
     * Get the fitness.
     * @returns The fitness.
     */ 
    getFitness = function () {
        return data.fitness;
    };
  
    /**
     * Get the href.
     * @returns The href.
     */ 
    getHref = function () {
        return data.href;
    };
  
    /**
     * Get the mimetype.
     * @returns The mimetype.
     */ 
    getMimetype = function () {
        return data.mimetype;
    };
  
    /**
     * Get the format.
     * @returns The format.
     */ 
    getFormat = function () {
        return data.format;
    };
  
    /**
     * Get the matches.
     * @returns Array of Match objects.
     */ 
    getMatches = function () {
        return matches;
    };
  
    /**
     * Get the matches as an HTML string.
     * @returns An HTML string of match content with highlighting.
     */ 
    getMatchesAsHTML = function () {
        var html = '';
        for (var i = 0; i < data.matches.length; ++i) {
		    // concat content
	    }
        return html;
    };
  
    /**
     * Get the metadata.
     * @returns Array of Metadata objects.
     */ 
    getMetadata = function () {
        return metadata;
    };
  
    /**
     * Get the value of a metadata item.
     * @param key A metadata key.
     * @returns The metadata value associated with the key.
     */ 
    getMetadataByKey = function (key) {
    	var value = '';
		for (var i = 0; i < data.metadata.length; ++i) {
			if (data.metadata[i][key] !== undefined) {
				value = data.metadata[i][key];
				break;
			}
		}
        return value;
    };
  
    // Public API
    return {
        getData: getData,
        getIndex: getIndex,
        getURI: getURI,
        getPath: getPath,
        getScore: getScore,
        getConfidence: getConfidence,
        getFitness: getFitness,
        getHref: getHref,
        getMimetype: getMimetype,
        getFormat: getFormat,
        getMatches: getMatches,
        getMatchesAsHTML: getMatchesAsHTML,
        getMetadata: getMetadata,
        getMetadataByKey: getMetadataByKey
    };

};

