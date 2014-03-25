(function(requirejs) {

	var config = {

		baseUrl : "app",

		paths: {
			"vue" : "../lib/vue/0.10.0/vue",
			"jquery" : "../lib/jquery/1.11.0/jquery-1.11.0",
			"bootstrap" : "../lib/bootstrap/3.1.1/js/bootstrap",
			"text" : "../lib/require/2.1.11/plugins/text",
			"css" : "../lib/require/2.1.11/plugins/css",
			"i18n" : "../lib/require/2.1.11/plugins/i18n",
			"html" : "../lib/require/2.1.11/plugins/html"
		},

		shim: {
			"bootstrap": { deps: [ "jquery" ] },
		},

		packages: [
		    { name : "bvc", location : "../lib/bvc/1.0.0" },
		]

	};

	requirejs(config, [ "src/app" ], null, fail);

	function fail(error) {
		console.error("The application failed to start: ", error);
	}

})(requirejs);
