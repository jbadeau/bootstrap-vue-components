(function(root, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD. Register as an anonymous module.
		define([ "vue", "bvc/progress-bar/bootstrap/progress-bar", "html!./app.html" ], factory);
	}
	else if (typeof exports === "object") {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	}
	else {
		// Browser globals (root is window)
		root.app = factory();
	}
}(this, function(Vue, BVCProgressBar, html) {

	// App data with declarative progressbar
	var app = new Vue({
		el : "#app",
		template : html,
		data : {
			title : "Bootstrap Vue Component Demo",
			progress : {
				minimum : 0,
				maximum : 100,
				value : 0
			}
		},
		ready : function() {
			this.$on("change", function() {
				this.text = this.percentComplete + "%";
			});
			this.$on("complete", function() {
				this.text = "Complete";
			});
			var interval = setInterval(function() {
				if (this.progress.value < 100) {
					this.progress.value = this.progress.value + 1;
				}
				else {
					clearInterval(interval);
				}
			}.bind(this), 100);
		}
	});

	// imparative progressbar
	var progressBar = new BVCProgressBar({
		el : "#progress",
		data : {
			minimum : 0,
			maximum : 100,
			value : 0
		},
		ready : function() {
			this.$on("change", function() {
				this.text = this.percentComplete + "%";
			});
			this.$on("complete", function() {
				this.text = "Complete";
			});
			var interval = setInterval(function() {
				if (this.value < 100) {
					this.value = this.value + 1;
				}
				else {
					clearInterval(interval);
				}
			}.bind(this), 100);
		}
	});
	
	return app;

}));