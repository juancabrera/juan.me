var $___46__46__47__46__46__47_source_47_js_47_module__ = (function() {
  "use strict";
  var __moduleName = "../../source/js/module";
  function moduleTest() {
    this.init = function() {
      console.log("IE6 module test");
    };
  }
  return {get moduleTest() {
      return moduleTest;
    }};
})();
var $___46__46__47__46__46__47_source_47_js_47_main__ = (function() {
  "use strict";
  var __moduleName = "../../source/js/main";
  var moduleTest = ($___46__46__47__46__46__47_source_47_js_47_module__).moduleTest;
  var test = new moduleTest();
  test.init();
  return {};
})();
