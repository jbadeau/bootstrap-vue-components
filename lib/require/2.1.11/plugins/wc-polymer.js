define(['module'], function (module) {
    'use strict';
    
   var wc = {
        load: function (name, parentRequire, onLoad, config) {name
        	parentRequire([ "polymer" ], function(Polymer) {
            	Polymer.import([ parentRequire.toUrl(name) ], function() {
            		onLoad();
            	});  		
        	}, function(error) {
        		onLoad.error(error);
        	});
        }
    };

    return wc;
});
