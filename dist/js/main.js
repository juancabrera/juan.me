var $___46__46__47__46__46__47_source_47_js_47_loader__ = (function() {
  "use strict";
  var __moduleName = "../../source/js/loader";
  function siteLoader() {
    this.init = function() {
      var b = document.querySelector("body");
      window.setTimeout(function() {
        b.className += " l";
      }, 200);
    };
  }
  return {get siteLoader() {
      return siteLoader;
    }};
})();
var $___46__46__47__46__46__47_source_47_js_47_main__ = (function() {
  "use strict";
  var __moduleName = "../../source/js/main";
  var siteLoader = ($___46__46__47__46__46__47_source_47_js_47_loader__).siteLoader;
  var sl = new siteLoader();
  document.addEventListener("DOMContentLoaded", function() {
    sl.init();
  }, false);
  return {};
})();
