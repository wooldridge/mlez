var ML = ML || {};

/**
 * Class representing a MarkLogic search metadata item.
 * @constructor
 */ 
ML.MetaItem = function (data) {
    'use strict';
        // properties
    var key,
        value,
        type,

        // methods
        getKey,
        getValue,
        getType;

    for (var prop in data) {
        if (prop === 'metadata-type') {
            type = data[prop];
        } else {
            key = prop;
            value = data[prop];
        }
    }

    /**
     * Get the metadata key.
     * @returns The key.
     */ 
    getKey = function () {
        return key;
    };
  
    /**
     * Get the metadata value.
     * @returns The value.
     */ 
    getValue = function () {
    	return value;
    };
  
    /**
     * Get the metadata type.
     * @returns The type ('element', 'attribute', 'constraint').
     */ 
    getType = function () {
    	return type;
    };
  
    // Public API
    return {
        getKey: getKey,
        getValue: getValue,
        getType: getType
    };

};
