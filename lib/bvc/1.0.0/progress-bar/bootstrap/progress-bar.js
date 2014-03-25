(function(root, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD. Register as an anonymous module.
		define([ "vue", "html!./progress-bar.html", "bootstrap" ], factory);
	}
	else if (typeof exports === "object") {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	}
	else {
		// Browser globals (root is window)
		root.BVCProgressBar = factory();
	}
}(this, function(Vue, html) {

	var BVCProgressBar = Vue.extend({

		template : html,

		data : {
			minimum : 0,
			maximum : 100,
			value : 0,
			enabled : true,
			visible : true
		},

		computed : {
			percentComplete : function() {
				return Math.ceil(this.value / this.maximum * 100);
			},
			text : {
				$get : function() {
					return this.percentComplete + "%";
				},
				$set : function(value) {
				}
			}
		},

		created : function() {
			this.$watch("value", function(value) {
				this.$dispatch("change", value, this);
				if (value == this.maximum) {
					this.$dispatch("complete", value, this);
				}
			});
		}

	});

	Vue.component("bvc-progress-bar", BVCProgressBar);

	return BVCProgressBar;

}));