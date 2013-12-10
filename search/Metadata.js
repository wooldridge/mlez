var ML = ML || {};

/**
 * Class representing MarkLogic search metadata.
 * @constructor
 */ 
ML.Metadata = function (data) {
    'use strict';
        // properties
    var items,

        // methods
        getItems,
        getItemByKey;
    
    // Load metadata items
    items = [];
    for (var i = 0; i < data.length; ++i) {
        var item = new MetaItem(data[i]);
		items.push(item);
	}

    /**
     * Get the metadata items.
     * @returns An array of MetaItem objects.
     */ 
    getItems = function () {
        return items;
    };
  
    /**
     * Get a metadata item by key.
     * @param key The key.
     * @returns A metadata item with the key (or null if none found). (Note that there may be multiple items with the same key.)
     */ 
    getItemByKey = function (key) {
        result = null;
        for (var i = 0; i < items.length; ++i) {
            if (items[i].getKey() === key) {
                result = items[i];
                break;
            }
        }
        return result;
    };
  
    // Public API
    return {
        getItems: getItems,
        getItemByKey: getItemByKey
    };

};

