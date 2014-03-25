bootstrap-vue-components
========================

Example of how to wrap Bootstrap using Vue components.

Imperative progress-bar:

```javascript
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
```
```html
<bvc-progress-bar v-with="progress"></bvc-progress-bar>
```

Imperative progress-bar
```javascript
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
```
```html
	<div id="progress"></div>
```
