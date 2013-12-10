var ML = ML || {};

/**
 * Class representing a MarkLogic search-result match.
 * @constructor
 */ 
ML.Match = function (data) {
    'use strict';
        // properties
    var matchText,

        // methods
        getData,
        getPath,
        getMatchText,
        getMatchTextAsHTML;
    
    // Load match text
    matchText = [];
    for (var i = 0; i < data['match-text'].length; ++i) {
        var obj = {};
        if (data['match-text'][i] instanceof Object) {
        	obj['text'] = data['match-text'][i]['highlight'];
        	obj['type'] = 'highlight';
        } else {
        	obj['text'] = data['match-text'][i];
        	obj['type'] = 'plain';
        }
		matchText.push(obj);
	}

    /**
     * Get the raw data of the match.
     * @returns The match data as a JSON object.
     */ 
    getData = function () {
        return data;
    };
  
    /**
     * Get the path.
     * @returns The path.
     */ 
    getPath = function () {
        return data.path;
    };
  
    /**
     * Get the match text.
     * @returns The match text as an array of objects.
     */ 
    getMatchText = function () {
        return matchText;
    };
  
    /**
     * Get the match text as an HTML string.
     * @returns An HTML string of match text with highlighting.
     */ 
    getMatchTextAsHTML = function () {
    	var html = '<span>';
    	var matches = getMatchText();
		for (var i = 0; i < matches.length; ++i) {
			if (matches[i]['type'] === 'highlight') {
				html += '<span class="highlight">' + matches[i]['text'] + '</span>';
			} else {
				html += matches[i]['text'];
			}
		}
		html += '</span>'
		return html;
    };
  
    // Public API
    return {
        getData: getData,
        getPath: getPath,
        getMatchText: getMatchText,
        getMatchTextAsHTML: getMatchTextAsHTML
    };

};
